define(function() {
    return function(){  
    	return	'<!-- 詳細画面のレイアウトテンプレート -->' +
				'<script type="text/template" id="todo-detail-layout-template">' +
				'<div id="todo-item"></div>' +
				'</script>' +
				'<!-- 詳細画面の表示内容テンプレート -->' +
				'<script type="text/template" id="todo-detail-item-template">' +
				'<h2>Todo #<%- id %></h2>' +
				'<div>' +
				'<textarea style="width:300px;height:50px" id="edit-todo" autofocus placeholder="Todo?"><%- todo %></textarea>' +
				'<input type="button" id="updateTodo" value="更新"></input>' +
				'<input type="button" id="updateCancel" value="キャンセル"></input>' +
				'</div>' +
				'</script>';
  };
});
