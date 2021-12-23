// JavaScript Document
function ngaythangnam(){
	var d=new Date();
	var thu=d.getDay();/* lấy th trong tuần 0-6ứ*/
	if(thu==0){ thu="Chúa Nhật,"}
	if(thu==1){ thu="Thứ hai, "}
	if(thu==2){ thu="Thứ ba, "}
	if(thu==3){ thu="Thứ tư, "}
	if(thu==4){ thu="Thứ năm, "}
	if(thu==5){ thu="Thứ sáu, "}
	if(thu==6){ thu="Thứ bảy, "}
	var ngay=d.getDate()	/* lấy ngày*/
	var thang=d.getMonth()+1	/*lấy tháng*/
	var nam=d.getFullYear()  /*lấy năm*/
	document.getElementById("xuat").innerHTML=thu + ngay+"/" + thang+"/"+nam
	}
function dongho(){
	var d=new Date()
	var gio=d.getHours()
	var phut=d.getMinutes()
	var giay=d.getSeconds()
	if(gio<10){ gio="0" +gio}
	if(phut<10){ phut="0"+phut}
	if(giay<10){ giay="0"+giay}
	document.getElementById("gio").innerHTML=gio+":"+phut+":"+giay
	var t=setTimeout(dongho,800)
}