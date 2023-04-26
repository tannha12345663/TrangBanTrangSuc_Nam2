// Lưu toàn bộ thông tin SP trong localstorage bang key : userList
var userListSP=[]
// Tai trang web lên = Kiểm tra xem trong localStorage da luu thong tin userList
var json = localStorage.getItem('userListSP')
if(json != null && json !=''){
    userListSP = JSON.parse(json)
}
function themgiohang() {
    alert('Bạn đã thêm sản phẩm thành công')
    var giacuoicung=0;
    var tensp = document.getElementById('TenSP').innerHTML
    var ttsp = document.getElementById('TTSP').innerHTML
    var giatiensp = document.getElementById('GiaTienSP').innerText.split(' ')
    console.log(giatiensp)
    var giachuyendoi = giatiensp[0].split('.')
    console.log(giachuyendoi)
    for(var i=0;i<giachuyendoi.length;i++){
        giacuoicung += giachuyendoi[i]
    }
    giacuoicung = Math.floor(giacuoicung)
    console.log(giacuoicung)
    var soluongSP = document.getElementById('SoLuongSP').value
    var kichco = document.getElementById('size').value

    //Đưa tất cả dữ liệu đối tượng vào chung kiểu string user
    var user = {
        'TenSanPham' : tensp,
        'ThongtinSP' : ttsp,
        'GiaTien' : giacuoicung,
        'SoLuongSP' : soluongSP,
        'KichCoSP' : kichco
    }
    console.log(user)
    //Tìm kiếm 
    var isFind = false;
    for (var i = 0; i< userListSP.length;i++){
        if(userListSP[i].TenSanPham == tensp){
            //Cập nhật
            isFind = true
            userListSP[i] = user
        }
    }
    if (!isFind){
        userListSP.push(user)
    }
    var json = JSON.stringify(userListSP)
    localStorage.setItem('userListSP', json)

    return true;
}

function init3() {
    var resultTag = document.getElementById('hienthiSP')
    var toncong=0;
    console.log(resultTag);
    for (var i = 0; i < userListSP.length; i++)
        {
               resultTag.innerHTML += `<tr>
                        <td class="text-center" id="STT">${i+1}</td>
                        <td class="text-center" id="tnsp">${userListSP[i].TenSanPham}</td>
                        <td class="text-center">${userListSP[i].ThongtinSP}</td>
                        <td class="text-center">${userListSP[i].KichCoSP}</td>
                        <td class="text-center">${userListSP[i].SoLuongSP} </td>
                        <td class="text-center">${userListSP[i].GiaTien.toLocaleString('de-DE')} VNĐ </td>
                        <th class="text-center">
                            <button class="btn btn-danger" onclick="xoaSP(${i})" type="button">Xóa</button>
                        </th>
                    </tr>`
        }
        thanhtoan()
    
}
function xoaSP(id){
    let dsSP= localStorage.getItem('userListSP') ? JSON.parse(localStorage.getItem('userListSP')) : [] // dsSP là bản nháp đưa dữ liệu value userlist
    dsSP.splice(id,1) //Bản nháp thực hiện xóa sản phẩm theo id đã gán từ trước 
    localStorage.setItem('userListSP', JSON.stringify(dsSP)); //Cập nhật lại Key UserlistSP 
    location.reload(); //Tiến hành làm mới lại trang
}
function thanhtoan(){
    var tongcong=0
    let DSSP= localStorage.getItem('userListSP') ? JSON.parse(localStorage.getItem('userListSP')) : [] //DSSP là bản nháp đưa dữ liệu value userlistSP để xử lý tính toán
    for (var i = 0;i<DSSP.length;i++){ /* Bước này tiến hành gom từng sản phẩm ứng với số lưởng rồi tính tổng từng SP  */
        inputValue = DSSP[i].SoLuongSP
        inputGia = DSSP[i].GiaTien
        totalA = inputValue*inputGia
        tongcong= tongcong+totalA
    }
    let xuattong = document.getElementById('ThanhToan') // Khai báo hàm xuất tổng
    xuattong.innerHTML = tongcong.toLocaleString('de-DE') //Xuất tổng tiền ra trang web 
}
function THANHtoan(){
    var checktt= localStorage.getItem('userListSP')
    console.log(checktt)
    if(checktt !=null){
        alert('Cảm ơn bạn đã mua hàng của chúng tôi || Đơn hàng sẽ sớm được giao')
        localStorage.removeItem('userListSP')  //Xóa toàn bộ value dữ liệu có trong userListSP
        location.reload()
    }
    else{
        alert('Bạn chưa có sản phẩm trong giỏ hàng')
    }
    
}
