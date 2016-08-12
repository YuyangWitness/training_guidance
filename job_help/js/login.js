/*
 新用户注册
 * */
function reg(regInfo, callback) {
	var checkEmail = function(email) {
		email = email || '';
		return(email.length > 3 && email.indexOf('@') > -1);
	};

	regInfo.account = regInfo.account || '';
	regInfo.password = regInfo.password || '';
	if(regInfo.account.length < 5) {
		callback('账号字符不能小于5');
		return callback;
	}
	if(regInfo.password.length < 5) {
		callback('密码不能小于5个字符');
		return callback;
	}
	if(!checkEmail(regInfo.email)) {
		callback('邮箱输入不合法');
		return callback;
	}
	var account = regInfo.account;
	var password = regInfo.password;
	/*localStorage.setItem('account',account);
	localStorage.setItem('password',password);*/
	//获取users的信息，把json字符串格式转换成json对象
	var url = geturl()+"teacher/addTeacher";
	var reg = {
		teaName: regInfo.account,
		teaPassword: regInfo.password,
		email: regInfo.email
	}
	mui.ajax(url, {
		data: reg,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		success: function(data) {
			if(data == "1") {

				return callback();
			}else if(data == "2"){
				callback('用户名已被注册');
				return callback;
			}else{
				callback('添加失败');
				return callback;
			}
		},
		error: function(xhr, type, errorThrown) {
	
			//异常处理；
			console.log(type);
			callback('添加失败');
				return callback;
		}
	});
}
/*
 用户登录
 * */
function login(loginInfo, callback) {
	loginInfo = loginInfo || {};
	loginInfo.account = loginInfo.account || '';
	loginInfo.password = loginInfo.password || '';

	if(loginInfo.account.length < 5) {
		callback('用户名字段不能小于5');
		return callback;
	}
	if(loginInfo.password.length < 5) {
		callback('密码字段不能小于5');
		return callback;
	}

   var url = geturl()+"teacher/selectByname";
	var log = {
		teaName: loginInfo.account,
		teaPassword: loginInfo.password,
	}
	
   mui.ajax(url, {
		data: log,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		success: function(data) {
			if(data == "1") {
               createState(loginInfo.account);
		
				return callback();
			}else if(data == "2"){
				callback('密码错误');
				return callback;
			}else if(data =="0"){
				callback('用户不存在');
				return callback;
			}else{
				callback('登录失败11111');
				return callback;
			}
		},
		error: function(xhr, type, errorThrown) {
	
			//异常处理；
			console.log(type);
			callback('登录失败');
				return callback;
		}
	});

}

function createState(name) {
	var state = getstate();
	state.account = name;
	state.state = 'logining';
	setstate(state);
}

/*
 获取状态
 * */
function getstate() {
	return JSON.parse(localStorage.getItem('stateInfo') || '{}');
}
/*
 设置状态
 * */
function setstate(stateInfo) {
	var state = stateInfo || {};
	localStorage.setItem('stateInfo', JSON.stringify(stateInfo));

}