import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const GOOGLE_CLIENT_ID =
  "139724332996-pdqokpaqaj5t8jephabs0g56v2si6d5j.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "Dg1-Qy_ai2xIIBGT79LXLuxH";
const GOOGLE_CALLBACK_URL = "http://localhost:3000";
import Table from '../table';
import { encode, decode } from '../utils/tokens';
import { checkPassword } from '../utils/security'

let usersTable = new Table('users');
let tokensTable = new Table('tokens');

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    }, (email, password, done) => {

        
        // array destructuring. find() will return an array of results.
        // destructuring the first (and hopefully only) result into the user variable
        usersTable.find({ email })
            .then((results) => results[0])
            .then((user) => {
                if (user && user.hash) {
                    checkPassword(password, user.hash)
                        .then((matches) => {
                            if (matches) {
                                //password correct
                                tokensTable.insert({
                                    userid: user.id
                                })
                                    .then((idObj) => encode(idObj.id))
                                    .then((token) => {
                                        return done(null, { token })
                                    });
                            } else {
                                //password incorrect
                                return done(null, false, { message: 'Invalid credentials' });
                            }
                        }).catch((err) => {
                            throw err;
                        })
                } else {
                    return done(null, false, { message: 'Invalid credentials' });
                }
            }).catch((err) => {
                return done(err);
            })
    }));

    passport.use(
        new GoogleStrategy(
          {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: GOOGLE_CALLBACK_URL
          },
          async function(accessToken, refreshToken, profile, done) {
            let email = profile.emails[0].value;
            if (accessToken && email) {
              let user;
              try {
                user = await usersTable.find({ email });
    
                //found the user already and setting token
                if (user && user[0]) {
                  user = user[0];
                  return done(null, {
                    token: encode((await tokensTable.insert({ userid: user.id })).id)
                  });
                } else {
                  //need to send the user to the register page
                  return done(null);
    
                  // let hash = await generateHash(accessToken);
                  // let newUser = {
                  //   last_name: profile.name.familyName,
                  //   first_name: profile.name.givenName,
                  //   email,
                  //   hash,
                  //   username: profile.displayName
                  // };
                  // user = await usersTable.insert(newUser);
                }
              } catch (err) {
                console.log(err);
                return done(null, false, { message: "Invalid login" });
              }
            }
          }
        )
      );


    passport.use(new BearerStrategy(async (token, done) => {
        let tokenId = decode(token);
        console.log(tokenId);
        if (!tokenId) {
            return done(null, false, { message: 'Invalid token' });
        }
        try {
            let tokenRecord = await tokensTable.getOne(tokenId);
            let user = await usersTable.getOne(tokenRecord.userid);
            if (user) {
                delete user.password; //removes pw from user object on server
                return done(null, user);// after this, req.user is SET
            } else {
                return done(null, false, { message: 'Invalid token' });
            }
        } catch (err) {
            return done(err);
        }
    }));

    app.use(passport.initialize());
}

export default configurePassport;
