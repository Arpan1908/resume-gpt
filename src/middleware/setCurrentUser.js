const UserServices = require('../user/user.services');  

module.exports = async function setCurrentUser(req,res,next){
    const email = req.session;
   if(email){
    user = await UserServices.getUserbyEmail(email);
    req.user = user;
    next();
   }else{
    res.redirect('/')
   }
}
