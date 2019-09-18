import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import { generateHash } from "../utils/security";
import Table from "../table";

let router = Router();
let userTable = new Table("users");

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
  console.log(req.user);  
  res.json(req.user);
    
});


router.get('/', (req, res) => {
  userTable.getAll()
      .then(users => {
          res.json(users);
      })
});

router.get('/:id', async (req, res) => {
  try {
      let foundClass = await userTable.getOne(req.params.id);
      res.json(foundClass);
  } catch (err) {
      console.log(err);
      res.sendStatus(500);
  }
});

/**
 * register a user
 * is expecting:
 * { email, password, address_line_one, address_line_two, city, state, zip, bio, first_name, last_name, middle_initial, profile_picture_link, telephone, username }
 * in the request's body
 */
router.post("/", async (req, res) => {
    try {
      let hash = await generateHash(req.body.password);
      let insertObject = {
        email: req.body.email,
        hash,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        profile_picture_link: req.body.profile_picture_link
        
      };
      let idObj = await userTable.insert(insertObject);
      res.status(201).json(idObj);
    } catch (err) {
      console.log(err);
      if (err.errno === 1062) {
        res.status(500).send("Emails have to be unique!");
      } else res.status(500).send(err);
    }
  });

export default router;