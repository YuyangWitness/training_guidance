
/*
 新用户注册
 * */
function reg(regInfo, callback) {
	var checkEmail = function(email) {
		email = email || '';
		return (email.length > 3 && email.indexOf('@') > -1);
	};
	
	regInfo.account = regInfo.account || '';
	regInfo.password = regInfo.password || '';
	if(regInfo.account.length<5){
		callback('账号字符不能小于5');
		return callback;
	}
	if(regInfo.password.length<5){
		callback('密码不能小于5个字符');
		return callback;
	}
	if(!checkEmail(regInfo.email)){
		callback('邮箱输入不合法');
		return callback;
	}
	var account = regInfo.account;
	var password = regInfo.password;
	/*localStorage.setItem('account',account);
	localStorage.setItem('password',password);*/
	//获取users的信息，把json字符串格式转换成json对象
	var users = JSON.parse(localStorage.getItem('users')||'[]');
	if(users!==null){
	var same = users.some(function(user){
		return user.account == regInfo.account;
	});
	if(same){
		callback('账户已被注册');
		return callback;
	}
	}
	//把新的信息放入到json中
	users.push(regInfo);
	//把新的users信息放入到本地存储数据库中
	localStorage.setItem('users',JSON.stringify(users));
	
	return callback();
}
/*
 用户登录
 * */
function login(loginInfo,callback){
	loginInfo = loginInfo || {};
	 loginInfo.account = loginInfo.account || '';
	 loginInfo.password = loginInfo.password || '';
	
	if(loginInfo.account.length<5){
		callback('用户名字段不能小于5');
		return callback;
	}
	if(loginInfo.password.length<5){
		callback('密码字段不能小于5');
		return callback;
	}
	   
	var users = JSON.parse(localStorage.getItem('users')||'[]');
	//主要是some这个函数，它能够遍历数组，若是找到函数中合适的条件，会返回true，若是没有找到则返回false
	var authed = users.some(function(user){
		return user.account == loginInfo.account && user.password == loginInfo.password;
	})
 
  
   /*var account = localStorage.getItem('account');
   var password = localStorage.getItem('password');
   var authed = false;
    if(loginInfo.account == account && loginInfo.password == password){
    	  authed = true;
    }*/
	
	if(authed){
		createState(loginInfo.account);
		return callback();
	}else{
		return callback('用户密码错误');
	}
}
function createState(name){
	var state = getstate();
	state.account = name;
	state.state = 'logining';
	setstate(state);
}

/*
 获取状态
 * */
function getstate(){
	return JSON.parse(localStorage.getItem('stateInfo')||'{}');
}
/*
 设置状态
 * */
function setstate(stateInfo){
	var state = stateInfo || {};
	localStorage.setItem('stateInfo', JSON.stringify(stateInfo));
	
	
}



