FlowRouter.route('/admin', {
  name: 'Admin.base',
  action(params, queryParams) {
    console.log("Routing to admin panel");
	BlazeLayout.render('app_body', {main: 'adminPage'});
  }
});


FlowRouter.route('/', {
  name: 'Landing',
  action(params, queryParams) {
    console.log("Routing to landing page");
	BlazeLayout.render('app_body', {main: 'landingPage'});
  }
});
