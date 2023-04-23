function tinhLuong(){
    var luong = document.getElementById("bai1Luong").value;
    var ngay = document.getElementById("bai1NgayLam").value;

    var tongLuong = luong * ngay;

    console.log(luong,ngay,tongLuong);

    document.getElementById("bai1HienThi").innerHTML = tongLuong;
}

document.getElementById("bai1TinhLuong").onclick = tinhLuong;