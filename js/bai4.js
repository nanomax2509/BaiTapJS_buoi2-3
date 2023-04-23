function chuViDienTich(){
    var chieuDai = document.getElementById("bai4Dai").value;
    var chieuRong = document.getElementById("bai4Rong").value;
    console.log(chieuDai,chieuRong);

    var dienTich = chieuDai * chieuRong;
    console.log(chieuDai * chieuRong);

    var chuVi = (Number(chieuDai)+Number(chieuRong))*2;
    console.log(chuVi);


    document.getElementById("bai4HienThi").innerHTML = "Diện tích: " + dienTich + "; " + "Chu vi: " + chuVi;
}

document.getElementById("bai4Tinh").onclick = chuViDienTich;