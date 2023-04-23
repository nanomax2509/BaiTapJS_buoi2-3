function tinhTong(){
    var soNhap = document.getElementById("bai5KiSo").value;
    console.log(soNhap);


    var ten = Math.floor(soNhap/10);
    var num = soNhap%10;
    console.log(ten,num);

    document.getElementById("bai5HienThi").innerHTML = ten+num;

}

document.getElementById("bai5Tinh").onclick = tinhTong;