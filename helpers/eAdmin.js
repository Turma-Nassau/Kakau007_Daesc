module.exports = {
    eAdmin: function (req, res, next) {
      console.log(req.user);
      if (req.isAuthenticated() && req.user.eAdmin == 1) {
  
        return next();
        
      }
  
      req.flash("erro_msg", "Você deve ser um admin para entrar aqui");
      res.redirect("/user/restrito");
    }
  };