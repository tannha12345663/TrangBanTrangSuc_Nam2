// Lưu toàn bộ người dùng trong localstorage bằng key : userList
var userList=[]
// Tải trang web lên = Kiểm tra xem trong localStorage đã lưu thông tin userList hay chưa
var json = localStorage.getItem('userList')
if(json != null && json !=''){
    userList = JSON.parse(json)
}

function dangky() {
    var fname = document.getElementById('fname').value //Lấy dữ liệu người dùng nhập vào input rồi đưa cho fname
    var email = document.getElementById('email').value  //Lấy dữ liệu người dùng nhập vào input rồi đưa cho email
    var password = document.getElementById('password').value //Lấy dữ liệu người dùng nhập vào input rồi đưa cho passoword
    var confirmPwd = document.getElementById('password-confirmation').value     //Lấy dữ liệu người dùng nhập vào input để xác nhận lại mật khẩu
    var birthday = document.getElementById('birthday').value    //Lấy dữ liệu người dùng nhập vào input rồi đưa cho birthday

    if(password != confirmPwd) {
        alert('Mat khau nhap khong khop!!! Vui long kiem tra lai!!!')
        return false;
    }
    //Đưa tất cả dữ liệu đối tượng (object) vào chung kiểu string user
    var user = {
        'fullname' : fname,
        'email' : email,
        'password' : password,
        'birthday' : birthday
    }
    
    //Tìm kiếm 
    var isFind = false;
    for (var i = 0; i< userList.length;i++){
        if(userList[i].email == email){
            //Cập nhật
            isFind = true
            userList[i] = user
        }
    }
    if (!isFind){
        userList.push(user)
    }
    var json = JSON.stringify(userList)
    localStorage.setItem('userList', json)
    // localStorage.setItem('fullname', fname)
    // localStorage.setItem('email', email)
    // localStorage.setItem('password', password)
    // localStorage.setItem('birthday', birthday)
    alert('Chúc Mừng bạn đã đăng ký thành công !!')    
    return true;
}

function dangnhap(){
    var emaildn = document.getElementById('emaildn').value;
    thongtin=emaildn;
    var pswdn = document.getElementById('pswdn').value;
    for (var i = 0 ; i < userList.length;i++){
        if (userList[i].email == emaildn && userList[i].password==pswdn){
            
            //đăng nhập thành công
            alert('Đăng nhập thành công !!!' )
            alert('Chào mừng ' + userList[i].fullname + ' đã quay trở lại')
            
            window.open('Show.html','_blank')
            return false;
        }
    }
    alert('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin tài khoản bạn vừa nhập !!!')
    return false;
}
    
    function init2() {
        var resultTag = document.getElementById('result')
        for (var i = 0; i < userList.length; i++)
            { 
                /*tr là hàng , td là cột con của td*/
                   resultTag.innerHTML += `<tr>  
                            <td>${i+1}</td> 
                            <td>${userList[i].fullname}</td>
                            <td>${userList[i].email}</td>
                            <td>${userList[i].birthday}</td>
                        </tr>`
            }
        }