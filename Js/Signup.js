const ListUsers = "ListUsers"
var d = document.getElementById("button")
tam1 = 0;
d.addEventListener("click", function () {
    if (a.value === '') {
        tam = tam + 1;
    }
    if (b.value === '') {
        tam = tam + 1;
    }
    if (c.value === '') {
        tam = tam + 1;
    }
    if (e.value === '') {
        tam = tam + 1;
    }
});
d.addEventListener("click", function () {
    if (tam < 1) {
        var Email = document.getElementById("Email");
        var Password = document.getElementById("Password");// Lấy Dữ Liệu Từ Form
        var UserName = document.getElementById("UserName");
        var Phone = document.getElementById("Phone");

        let data = JSON.parse(localStorage.getItem(ListUsers));
        if (data == null) {
            const User = {
                id: 1,
                UserName: UserName.value,
                email: Email.value,
                Password: Password.value,
                PhoneNumber: Phone.value
            }
            data = [User]
            localStorage.setItem(ListUsers, JSON.stringify(data));
        }
        else {
            const User = {
                id: ListUsers[length].id + 1,
                UserName: UserName.value,
                email: Email.value,
                Password: Password.value,
                PhoneNumber: Phone.value
            }
            for (let i = 0; i < ListUsers.length; i++) {
                if (User.UserName == ListUsers[i].UserName) {
                    tam1 = tam1 + 1
                }
            }
            if (tam1 < 1) {
                data.push(User)
                localStorage.setItem(ListUsers, JSON.stringify(data));
                alert("Đăng Kí Thành Công")
            }
            else{
                console.log(User[UserName.value])
                alert("Tên Người Dùng Đã Tồn Tài")
            }
        }

        
    } else { alert("Đăng Kí Không Thành Công") }
    console.log(tam)
})
