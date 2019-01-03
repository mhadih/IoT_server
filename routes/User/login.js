var express = require('express');
var router = express.Router();

router.post('/', async function(req, res, next){
	const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let username = req.body.data.username;
  let user = await User.findOne({ username: username });
  let Token = await auth.createToken(user);

  return res.json({
    data: { Token: Token }
  });
}); 

module.exports = router;
