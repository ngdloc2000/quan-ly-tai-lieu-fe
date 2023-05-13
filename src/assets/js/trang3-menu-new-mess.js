const nutBanBe = document.querySelector('.icon-primary');
const newMess = document.querySelector('.icon-secondary');
const danhSachBanBe = document.querySelector('.friends-list');
const newList = document.querySelector('.new-mess');
const cacMucBanBe = document.querySelectorAll('.friend');
const chatBox = document.querySelector('.chat-box');
const chatBoxName = document.querySelector('.chat-box .sender-name');
const chatBoxStatus = document.querySelector('.chat-box .online-status');
const personalTab = document.getElementById('personal-tab');
const groupTab = document.getElementById('group-tab');
const personalContent = document.getElementById('personal-content');
const groupContent = document.getElementById('group-content');

personalTab.addEventListener('click', function() {
    if (!personalTab.classList.contains('active')) {
        personalTab.classList.add('active');
        groupTab.classList.remove('active');
        personalContent.classList.add('active');
        groupContent.classList.remove('active');
    }
});

groupTab.addEventListener('click', function() {
    if (!groupTab.classList.contains('active')) {
        groupTab.classList.add('active');
        personalTab.classList.remove('active');
        groupContent.classList.add('active');
        personalContent.classList.remove('active');
    }
});

nutBanBe.addEventListener('click', function(event) {
    event.stopPropagation();
    if (danhSachBanBe.style.display === '' || danhSachBanBe.style.display === 'none') {
        danhSachBanBe.style.display = 'block';
        newList.style.display = 'none';
    } else {
        danhSachBanBe.style.display = 'none';
    }
});

danhSachBanBe.addEventListener('click', function(event) {
    event.stopPropagation();
});

newMess.addEventListener('click', function(event) {
    event.stopPropagation();
    if (newList.style.display === '' || newList.style.display === 'none') {
        newList.style.display = 'block';
        danhSachBanBe.style.display = 'none';
    } else {
        newList.style.display = 'none';
    }
});
newList.addEventListener('click', function(event) {
    event.stopPropagation();
});


cacMucBanBe.forEach(function(banBe) {
    banBe.addEventListener('click', function() {
        const ten = this.querySelector('.friend-name').textContent;
        const transThai = this.querySelector('.friend-status').classList.contains('online') ? 'online' : 'offline';
        chatBox.style.display = "block";
        chatBoxName.textContent = ten;
        chatBoxStatus.className = transThai;
        chatBoxStatus.textContent = transThai === 'online' ? 'online' : 'offline';
        // Lấy tên và trạng thái của bạn bè được click


        // Xóa trạng thái cũ (nếu có)
        const trangThaiCu = document.querySelector('.chat-header .online, .chat-header .offline');
        if (trangThaiCu) {
            trangThaiCu.remove();
        }

        // Hiển thị trạng thái online hoặc offline dưới tên người dùng
        const trangThaiNguoiNhan = document.createElement('span');
        trangThaiNguoiNhan.textContent = transThai === 'online' ? 'online' : 'offline';
        trangThaiNguoiNhan.className = transThai;
        trangThaiNguoiNhan.style.marginLeft = '5px';
    });
});
const cacNhom = document.querySelectorAll('.group');

cacNhom.forEach(function(nhom) {
    const soThanhVienOnline = nhom.querySelector('.group-info .group-number').dataset.membersOnline;
    const trangThaiNhom = nhom.querySelector('.group-status');

    if (soThanhVienOnline > 0) {
        trangThaiNhom.classList.add('online');
    } else {
        trangThaiNhom.classList.add('offline');
    }
    const tenNhom = this.querySelector('.group-name').textContent;
    chatBox.style.display = 'block';
    chatBoxName.textContent = tenNhom;
    chatBoxStatus.className = '';
    chatBoxStatus.textContent = '';
});
document.addEventListener('click', function() {
    danhSachBanBe.style.display = 'none';
});

const searchInput = document.getElementById("search-input-new");
const friendList = document.getElementById("friend-list-new");

searchInput.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const friends = friendList.querySelectorAll(".friend-new");

    friendList.style.display = searchTerm.length > 0 ? "block" : "none";

    friends.forEach((friend) => {
        const friendName = friend.textContent.toLowerCase();
        friend.style.display = friendName.includes(searchTerm) ? "block" : "none";
    });
});



