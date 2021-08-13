//hiển thị form thông tin khách mua
document.getElementById("btn_buy").addEventListener("click",click_buy);
		function click_buy() {
			var buy = document.getElementById("thongtinkhachhang");
			buy.style.display = "block";
		}
document.getElementById("form_close_buy").addEventListener("click",click_close_buy);
		function click_close_buy() {
			var buy = document.getElementById("thongtinkhachhang");
			buy.style.display = "none";
		}
