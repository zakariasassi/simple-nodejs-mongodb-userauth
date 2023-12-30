const User = require("../model/UserModel");

exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.json({
      msg: " Username or password incorrect",
      state: 0,
      data: [],
    });
  }

  const user = await User.findOne({
    username: username,
  });

  if (!user) {
    return res.json({
      msg: " User not found",
      state: 0,
      data: [],
    });
  }


  if(password === user.password ){
     return res.json({
        msg : "Auth Ok",
        state : 1,
        data: user
    })
  }else{
    return res.json({
        msg : "Password incorrect",
        state : 0,
        data: []
    })
  }


};




exports.signup = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;

  if (!username || !password || !email || !phone) {
    return res.json({
      msg: " Username or password incorrect",
      state: 0,
      data: [],
    });
  }

  const user = await User.findOne({
    $or:[
        {username: username},
        {email : email}
    ]
    
 
  });

  if (user) {
    return res.json({
      msg: "This username or email is already taken in our system",
      state: 0,
      data: [],
    });
  }


  await User.create({
    username: username,
    password: password,
    phone: phone,
    email: email,
  })
    .then((data) => {
        return res.json({
        msg: "Account created successfully",
        state: 1,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return  res.json({
        msg: "Internal server error contact with support",
        state: 0,
        data: [],
      });
    });
};
