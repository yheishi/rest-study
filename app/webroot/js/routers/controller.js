//controller
console.log('load controller');
define(function(require) {
	console.log('run controller');
	var TodoController = Marionette.Controller.extend({

		todoLists : function() {
			//Todoレイアウト用ビューにルーティング
			this.nextView('views/todo-layout-view', 'templates/todo-template');
		},

		todoDetail : function(id) {
			this.nextView('views/todo-detail-layout-view', 'templates/todo-detail-template', {modelId : id});
		},

		nextView : function(viewPath, templatePath, option) {
			require([templatePath], function(template){
				$('#pageTmpl').html(template);
			});
			require([viewPath], function(View){
				window.application.mainRegion.show(new View(option));
			});
		},

	});
	return TodoController;
});
