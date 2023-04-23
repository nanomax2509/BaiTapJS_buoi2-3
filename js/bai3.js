function quyDoi(){
    var money = document.getElementById("bai4Tien").value;
    

    money = money*23500;
    var formattedNumber = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money);
    document.getElementById("bai3HienThi").innerHTML = formattedNumber;
}
document.getElementById("bai3QuyDoi").onclick = quyDoi;