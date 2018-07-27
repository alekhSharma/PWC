'use strict';
module.exports = function(app) {
  var PWS = require('../controllers/todoListController');
  
  //save blog contenteditable
  app.route('/saveblog')
  .post(PWS.saveblog);
  
  app.route('/sendloginreq')
  .post(PWS.sendLoginCredents);
  
  app.route('/sendsignupreq')
  .post(PWS.sendSignupCredents);
  
  app.route('/dashboard')
  .get(PWS.showDashboard)
  .post(PWS.saveInformationStat); 
  
  app.route('/blogdetail')
  .get(PWS.showblog)
  .post(PWS.showblog);

  app.route('/blogdetail/:id')
  .get(PWS.showblog)
  .post(PWS.showblog);

  app.route('/blogcreation')
  .get(PWS.blogcreation)
  .post(PWS.blogcreation);

  app.route('/blog')
  .get(PWS.blogsetup)
  .post(PWS.blogsetup);

  app.route('/adminPanel')
  .get(PWS.adminPanel)
  .post(PWS.adminPanel);

  app.route('/adminPanel/:id')
  .post(PWS.adminPanelEditPage);
  
  app.route('/photo')
  .post(PWS.saveProfilePic);
  
  app.route('/')
  .get(PWS.first_page);

  app.route('/logout')
  .post(PWS.logout);
  
};

