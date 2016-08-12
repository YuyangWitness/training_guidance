function geturl(){
	var url = "http://172.16.120.36:8080/Guidance/";
	return url;
}

function selectStu(username) {
	
	var url = geturl()+"student/getstudentBydrt";
	var directornanme = username;
	var stu = {
		director: directornanme
	};
	mui.ajax(url, {
		data: stu,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		success: function(data) {
			//console.info(JSON.stringify(data));
			for(var i = 0; i < data.studentList.length; i++) {
				//console.info(data.studentList[i].username); 
				getStu(data.studentList[i]);
			}

		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
		}
	});

}

function selectStuByid(id) {

	var url = geturl()+"student/getstudentByid";
	var stu = {
		id: id
	};
	mui.ajax(url, {
		data: stu,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		success: function(data) {
			setStuByid(data.student);
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
		}
	});

}

function setStuByid(stuInfo) {
	var username = stuInfo.username;
	var name = stuInfo.name;
	var department = stuInfo.department;
	var id = stuInfo.id;
    var picpath = stuInfo.picpath;
	var modifyWebview = mui.openWindow({
		url: 'modifyStudent.html',
		id: 'modifyStudent',
		extras: {
			username: username,
			name1: name,
			department: department,
			userID: id,
			picpath:picpath
		}
	});
}function deleteStu(){
//var a=	this.getAttribute('class')
	alert("aaaaa");
}
function getStu(stuInfo) {
	var name = stuInfo.name;
	var username = stuInfo.username;
	var department = stuInfo.department;
	var director = stuInfo.director;
	var id = stuInfo.id;
	var picpath = stuInfo.picpath;
	var innerHtml = '<li class="mui-table-view-cell mui-media">';
	innerHtml += '<div class="mui-slider-right mui-disabled deletestu">'
	innerHtml += '<a class="mui-btn mui-btn-red" href="' + id + '">删除</a></div>'
	innerHtml += '<div class="mui-slider-handle">'
	innerHtml += '<a href="' + id + '" class="getid">';
	innerHtml += '<img class="mui-media-object mui-pull-left" src="'+picpath+'">';
	innerHtml += '<div class="mui-media-body">' + name;
	innerHtml += '<p class="mui-ellipsis">' + '科室：' + department + '</p>';
	innerHtml += '<p class="mui-ellipsis">' + '指导老师：' + director + '</p>';
	innerHtml += '</div></a></div></li>';
	$('#StuList').append(innerHtml);
}

function removeAllItem() {
	$('.mui-table-view-cell').remove();
}

function seletTrain(account){
	
	var url = geturl()+"train/getTrainInfo";
	var stu = {
		director: account 
	};
	mui.ajax(url, {
		data: stu,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		success: function(data) {
			for (var i = 0 ; i<data.length;i++) {
				  addTrainItem(data[i]);
			}
         
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
		}
	});

}
function addTrainItem(data){
	var inner = '';
	inner += '<li class="mui-table-view-cell"><lable style="display:none;" class="idVal">'+data.id+'</lable><div class="mui-slider-right mui-disabled deletestu">';
	inner += '<a class="mui-btn mui-btn-red" href="' + data.id + '">删除</a></div>'
	inner += '<div class="mui-slider-handle">'
	inner += '<p id="title">'+data.title+'</p><span id="data">'+data.startDate+'至'+data.endDate+'</span>';
	inner += '<p id="content">'+data.content+'</p>';
	inner += '<span>学生：'+data.studentVal+'</span></div></li>';
	
	$('#TrainList').append(inner);

}
function addTrain(trainInfo,callback){
	if(trainInfo.title.length == 0 ){
		callback('标题不能为空');
		return callback;
	}
		if(trainInfo.content.length == 0 ){
			callback('内容不能为空');
		return callback;
		}if(trainInfo.startDate.length == 0 ){
			callback('起始日期不能为空');
		return callback;
		}if(trainInfo.endDate.length == 0){
			callback('结束日期不能为空');
		return callback;
		}if(trainInfo.student.length == 0){
			callback('培训学生不能为空');
		return callback;
		}
		var url = geturl()+"train/insertTrain";
			mui.ajax(url, {
				data: trainInfo,
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				success: function(data) {
					if(data == "1"){
						plus.nativeUI.toast('添加成功');
						mui.back();
					}else{
					plus.nativeUI.toast('添加失败');

					}

				},
				error: function(xhr, type, errorThrown) {
					//异常处理；
					console.log(type);	
					return callback;
				}
			});

}

function getstudentData(userPicker){
	
			var user = getstate();
			var director = {
				director: user.account
			}
			var url = geturl()+"student/selectStuforTrain";
			mui.ajax(url, {
				data: director,
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				success: function(data) {
					userPicker.setData(data);

				},
				error: function(xhr, type, errorThrown) {
					//异常处理；
					console.log(type);
				}
			});
}
function modifyTrain(trainInfo,callback){
	if(trainInfo.title.length == 0 ){
		callback('标题不能为空');
		return callback;
	}
		if(trainInfo.content.length == 0 ){
			callback('内容不能为空');
		return callback;
		}if(trainInfo.startDate.length == 0 ){
			callback('起始日期不能为空');
		return callback;
		}if(trainInfo.endDate.length == 0){
			callback('结束日期不能为空');
		return callback;
		}if(trainInfo.student.length == 0){
			callback('培训学生不能为空');
		return callback;
		}
		var url = geturl()+"train/updateTrain";
			mui.ajax(url, {
				data: trainInfo,
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				success: function(data) {
					if(data == "1"){
						plus.nativeUI.toast('修改成功');
						mui.back();
					}else{
					plus.nativeUI.toast('修改失败');

					}

				},
				error: function(xhr, type, errorThrown) {
					//异常处理；
					console.log(type);	
					return callback;
				}
			});

}
