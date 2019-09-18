import { Router } from 'express';
import Table from "../table";

let router = Router();
let userTable = new Table("stripe_users");


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

router.post("/", async (req, res) => {
    try {
      let insertObject = {
        access_token: req.body.access_token,
            livemode: req.body.livemode,
            refresh_token: req.body.refresh_token,
            token_type: req.body.token_type,
            stripe_publishable_key: req.body.stripe_publishable_key,
            stripe_user_id: req.body.stripe_user_id,
            scope: req.body.scope,
            email: req.body.email
      };
      console.log(insertObject);
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