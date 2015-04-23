define(function() {
	return function(){
		return	'<!-- TODO一覧表示のレイアウトテンプレート -->' +
				'<script type="text/template" id="todo-layout-template">' +
				'<h1>TODOリスト</h1>' +
				'<div id="todo-lists"></div>' +
				'</script>' +
				'<!-- TODO一覧表示のテンプレート -->' +
				'<script type="text/template" id="todo-composite-template">' +
				'<textarea style="width:300px;height:50px"id="new-todo" placeholder="Todo?" autofocus></textarea>' +
				'<input type="button" id="addTodo" value="追加">' +
				'<hr>' +
				'<div>' +
				'	<table border="1" width="350px">' +
				'		<tbody></tbody>' +
				'	</table>' +
				'</div>' +
				'</script>' +
				'<!-- TODO一行分のテンプレート（上のtbody部分に挿入される） -->' +
				'<script type="text/template" id="todo-item-template">' +
				'<td><input type="checkbox" class="toggle" <%- status === "1" ? "checked" : "" %>></td>' +
				'<td style="margin:0px">' +
				'	<span class="todo-edit" style="margin:0px"><%- todo %></span>' +
				'</td>' +
				'<td>' +
				'	<a class="remove-link" href="#">削除</a>' +
				'	<a class="detail-link" href="#todo-lists/<%- id %>">詳細</a>' +
				'</td>' +
				'</script>';
	};
});
