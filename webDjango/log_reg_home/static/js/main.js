//xử lí sự kiện click đăng kí and close
document.getElementById("header_registry").addEventListener("click",click_registry);	
		function click_registry() {
			var log = document.getElementById("registry");
			log.style.display = "block";
		}

document.getElementById("registry_close").addEventListener("click",close_registry);
		function close_registry() {
			var log = document.getElementById("registry");
			log.style.display = "none";
		}

//xử lí sự kiện click đăng nhập and close
document.getElementById("header_login").addEventListener("click",click_login);	
		function click_login() {
			var log = document.getElementById("login");
			log.style.display = "block";
		}

document.getElementById("login_close").addEventListener("click",close_login);
		function close_login() {
			var log = document.getElementById("login");
			log.style.display = "none";
		}

//xử lí sự kiện swap login và registry

document.getElementById("swap_login").addEventListener("click",swap_login);
		function swap_login(){
			var log1 = document.getElementById("login");
			log1.style.display = "block";
			var log = document.getElementById("registry");
			log.style.display = "none";
		}

document.getElementById("swap_registry").addEventListener("click",swap_registry);
		function swap_registry(){
			var log1 = document.getElementById("registry");
			log1.style.display = "block";
			var log = document.getElementById("login");
			log.style.display = "none";
		}


// xử lí form đăng kí
var gmail = /^\w+@gmail.com$/;
var numberphone = /^\d{10}$/;

function check_form_reg(){
	var user_reg = document.getElementById("input_user_reg").value;
	var password_reg = document.getElementById("input_pass_reg").value;
	var repassword = document.getElementById("input_repass").value;
	
	if(user_reg ==''){
		document.getElementById("err_user_reg").innerHTML = "Không được để trống tên đăng nhập";
		return false;
	}else if(!gmail.test(user_reg) && !numberphone.test(user_reg)){
		document.getElementById("err_user_reg").innerHTML = "Tên đăng nhập không đúng định dạng";
		return false;	 
	}else if(password_reg==''){
		document.getElementById("err_user_reg").innerHTML = '';
		document.getElementById("err_pass_reg").innerHTML = "Không được để trống mật khẩu";
		return false;
	}else if(repassword == ''){
		document.getElementById("err_pass_reg").innerHTML = '';
		document.getElementById("err_repass").innerHTML = "Không được để trống nhập lại mật khẩu";
		return false;
	}else if(password_reg != repassword){
		document.getElementById("err_repass").innerHTML = "Mật khẩu và nhập lại mật khẩu phải giống nhau";
		return false;
	}else{
		return true;
	}
}

function check_form_log(){
	var user_log = document.getElementById("input_user_log").value;
	var pass_log = document.getElementById("input_pass_log").value;
	var admin = /^admin$/;
	if(user_log ==''){
		document.getElementById("err_user_log").innerHTML = "Không được để trống tên đăng nhập";
		return false;
	}else if(!gmail.test(user_log) && !numberphone.test(user_log) && !admin.test(user_log)){
		document.getElementById("err_user_log").innerHTML = "Tên đăng nhập không đúng định dạng";
		return false;
	}else if(pass_log ==''){
		document.getElementById("err_user_log").innerHTML = '';
		document.getElementById("err_pass_log").innerHTML = "Không được để trống mật khẩu";
		return false; 
	}else{
		return true;
	}
}

function check_form_khach(){
	var sdt = document.getElementById("input_sdt").value;
	var name_kh = document.getElementById("name_kh").value;
	var address_kh = document.getElementById("address_kh").value;
	if(name_kh.length>30 || name_kh.length < 5){
		document.getElementById("err_name_kh").innerHTML = "Họ tên không được nhỏ hơn 5 kí tự hoặc quá 30 kí tự";
		return false;
	}else if(!numberphone.test(sdt)){
		document.getElementById("err_name_kh").innerHTML = "";
		document.getElementById("err_sdt_kh").innerHTML = "Số điện thoại không đúng định dạng";
		
		return false;
	}else if(address_kh.length > 50||address_kh.length < 10){
		document.getElementById("err_sdt_kh").innerHTML = "";
		document.getElementById("err_address_kh").innerHTML = "Địa chỉ không được nhỏ hơn 10 kí tự hoặc quá 50 kí tự";
		return false;
	}else{
		return true;
	}
}
