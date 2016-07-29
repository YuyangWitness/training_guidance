function selectStu(database,username) {
	database.transaction(function(tx) {
		tx.executeSql(
			"select * from student where director = ?", [username],
			function(tx, result) {
				for(var i = 0; i < result.rows.length; i++) {
					getStu(result.rows.item(i));
				}
			}, null
		);
	});
}

function getStu(stuInfo) {
	var name = stuInfo.name;
	var username = stuInfo.username;
	var department = stuInfo.department;
	var director = stuInfo.director;
	var innerHtml = '<li class="mui-table-view-cell mui-media">';
	innerHtml += '<a href="javascript:;">';
	innerHtml += '<img class="mui-media-object mui-pull-left" src="images/qq.png">';
	innerHtml += '<div class="mui-media-body">' + name;
	innerHtml += '<p class="mui-ellipsis">' + '科室：' + department + '</p>';
	innerHtml += '<p class="mui-ellipsis">' + '指导老师：' + director + '</p>';
	innerHtml += '</div></a></li>';
	$('#StuList').append(innerHtml);
}