function tinhTrungBinh(){
    var num1 = Number(document.getElementById("bai2Num1").value);
    var num2 = Number(document.getElementById("bai2Num2").value);
    var num3 = Number(document.getElementById("bai2Num3").value);
    var num4 = Number(document.getElementById("bai2Num4").value);
    var num5 = Number(document.getElementById("bai2Num5").value);
    console.log(num1,num2,num3,num4,num5);

    var tong= num1 + num2 + num3+ num4 + num5;
    console.log(tong)
    var trungBinh = tong/5;
    console.log(trungBinh);

    document.getElementById("bai2HienThi").innerHTML = trungBinh;
}

document.getElementById("bai2Tinh").onclick = tinhTrungBinh;