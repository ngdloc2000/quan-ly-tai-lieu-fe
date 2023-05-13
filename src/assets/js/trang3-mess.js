
const iconMess = document.querySelector('.mess');
const iconNotic = document.querySelector('.notification');
const menuMess = document.getElementById('message-list');
const menuNotification = document.getElementById('notification-list');

iconMess.addEventListener('click', function(event) {
    event.stopPropagation();
    if (menuMess.style.display === '' || menuMess.style.display === 'none') {
        menuMess.style.display = 'block';
        menuNotification.style.display = 'none';
    } else {
        menuMess.style.display = 'none';
    }
});
iconNotic.addEventListener('click', function(event) {
    event.stopPropagation();
    if (menuNotification.style.display === '' || menuNotification.style.display === 'none') {
        menuNotification.style.display = 'block';
        menuMess.style.display = 'none';
    } else {
        menuNotification.style.display = 'none';
    }
});
/*Đếm số lượng tin nhắn chưa đọc hoặc chưa xem*/
function updateUnreadCounts() {
    // Thêm đoạn mã sau để chắc chắn rằng phần tử HTML đã được tải đầy đủ trước khi thực hiện đếm
    setTimeout(() => {
        var messageUnreadCount = document.querySelectorAll("#message-list .message-item.unread").length;
        var notificationUnreadCount = document.querySelectorAll("#notification-list .notification-item.unread").length;

        updateBadge("mess", messageUnreadCount);
        updateBadge("notification", notificationUnreadCount);

        // Gọi hàm sortUnreadMessages() sau khi cập nhật số lượng tin nhắn chưa đọc
        sortUnreadMessages();
    }, 100);
}
function updateBadge(iconClass, count) {
    var icon = document.querySelector("." + iconClass);
    var notificationBadge = icon.querySelector(".notification-badge");

    if (count > 0) {
        if (!notificationBadge) {
            notificationBadge = document.createElement("span");
            notificationBadge.className = "notification-badge";
            icon.appendChild(notificationBadge);
        }
        notificationBadge.textContent = count > 5 ? "5+" : count;
        notificationBadge.style.display = "block"; // Thêm dòng này để hiển thị hình tròn đỏ khi có tin nhắn chưa đọc
    } else if (notificationBadge) {
        notificationBadge.style.display = "none"; // Thêm dòng này để ẩn hình tròn đỏ khi không còn tin nhắn chưa đọc
    }

}
// Gọi hàm updateUnreadCounts() để cập nhật số lượng chưa đọc ban đầu
updateUnreadCounts();

// Khi hover outside thì bảng tự ẩn
document.addEventListener("click", function (event) {
    var messageIcon = document.querySelector(".mess");
    var notificationIcon = document.querySelector(".notification");
    var messageList = document.getElementById("message-list");
    var notificationList = document.getElementById("notification-list");

    if (
        !messageIcon.contains(event.target) &&
        !notificationIcon.contains(event.target) &&
        !messageList.contains(event.target) &&
        !notificationList.contains(event.target)
    ) {
        messageList.style.display = 'none';
        notificationList.style.display = 'none';
    }
});
document.querySelector('.close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none';
});
function getCurrentTimeString() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Lưu ý: getMonth() trả về giá trị từ 0 (tháng 1) đến 11 (tháng 12)
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Thêm số 0 phía trước nếu ngày, tháng, giờ hoặc phút chỉ có một chữ số
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
}
function sendMessage(chatBox) {
    var messageInput = chatBox.querySelector(".chat-input");
    var message = messageInput.value;

    if (message.trim() !== "") {
        // Tạo một tin nhắn mới
        var newMessage = document.createElement("div");
        newMessage.classList.add("chat-message", "my-message");

        var messageText = document.createElement("div");
        messageText.classList.add("message-text");
        messageText.textContent = message;
        newMessage.appendChild(messageText);

        var messageTime = document.createElement("div");
        messageTime.classList.add("message-time");
        messageTime.textContent = getCurrentTimeString(); // Sử dụng thời gian thực khi gửi tin nhắn
        newMessage.appendChild(messageTime);

        // Thêm tin nhắn mới vào chat-body
        var chatBody = chatBox.querySelector("#chat-body");
        chatBody.appendChild(newMessage);

        // Xóa nội dung trong input
        messageInput.value = "";
    }
}
function handleEnter(event) {
    const chatBox = document.querySelector('.chat-box'); // Thêm dòng này để định nghĩa lại biến chatBox
    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        sendMessage(chatBox);
    }
}

// Hàm cập nhật trạng thái của tin nhắn khi ấn vào
function markAsRead(messageItem) {
    messageItem.classList.remove("unread");
    // Chờ một chút để cập nhật trạng thái của tin nhắn trước khi cập nhật số lượng tin nhắn chưa đọc
    setTimeout(() => {
        updateUnreadCounts();
    }, 100);
}
document.addEventListener("DOMContentLoaded", function () {
    let openChatBoxes = [];
    const chatBoxTemplate = document.getElementById("chat-box");
    const messageList = document.getElementById("message-list");
    const messageItems = messageList.querySelectorAll(".message-item");
    let hiddenChatBoxes = [];
    chatBoxTemplate.style.display = "none";

    function calculateChatBoxPosition(index) {
        const chatBoxSpacing = 35;
        return `${(index + 1) * chatBoxSpacing}vh`;
    }

    function updateChatBoxPositions() {
        openChatBoxes.forEach((box, index) => {
            const chatBox = document.getElementById(`chat-box-${box}`);
            chatBox.style.right = calculateChatBoxPosition(index);
        });
    }
    function hideFirstOpenChatBox() {
        if (openChatBoxes.length > 0) {
            hideChatBox(openChatBoxes[0]);
            openChatBoxes.shift();
            updateChatBoxPositions();
        }
    }
    function hideChatBox(username) {
        const chatBox = document.getElementById(`chat-box-${username}`);
        chatBox.style.display = 'none';

        // Xóa bảng chat đã ẩn khỏi danh sách các bảng chat mở
        openChatBoxes = openChatBoxes.filter(box => box !== username);

        // Kiểm tra nếu có bảng chat ẩn được chuyển thành nút avatar-button
        if (hiddenChatBoxes.length > 0) {
            const chatBoxToShow = document.getElementById(`chat-box-${hiddenChatBoxes[0]}`);
            chatBoxToShow.style.display = "flex";
            openChatBoxes.push(hiddenChatBoxes[0]);
            hiddenChatBoxes.shift();
            updateChatBoxPositions();
        }

        // Nếu không có bảng chat ẩn, hiển thị nút avatar-button
        if (openChatBoxes.length <= 3 && hiddenChatBoxes.length === 0) {
            const avatarButton = createAvatarButton(username);
            document.body.appendChild(avatarButton);
            avatarButton.classList.remove("hidden");
            updateAvatarButtonPositions();
        }
    }
    function showHiddenChatBox() {
        if (hiddenChatBoxes.length > 0) {
            const chatBoxToShow = document.getElementById(`chat-box-${hiddenChatBoxes[0]}`);
            chatBoxToShow.style.display = "flex";
            openChatBoxes.push(hiddenChatBoxes[0]);
            hiddenChatBoxes.shift();
            updateChatBoxPositions();
            // Ẩn nút avatar-button nếu không còn bảng chat nào bị ẩn
            if (hiddenChatBoxes.length === 0) {
                const avatarButton = document.querySelector(".avatar-button:not(.hidden)");
                avatarButton.classList.add("hidden");
            }
        }
    }
    function createAvatarButton(username) {
        const button = document.createElement('button');
        button.className = 'avatar-button';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = 9999;

        const avatar = document.createElement('img');
        avatar.src = 'anh3/Logo%20Cty%20(Chuan)%20-%20none%20background%201.png'; // Thay đổi đường dẫn này thành đường dẫn đến ảnh đại diện của người dùng
        avatar.style.width = '100%';
        avatar.style.height = '100%';
        avatar.style.borderRadius = '50%';

        const closeButton = document.createElement('span');
        closeButton.className = 'close-avatar-button';
        closeButton.innerHTML = '<i class="fas fa-times"></i>';

        closeButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Ngăn chặn sự kiện click xuyên suốt
            document.body.removeChild(button);
        });

        button.appendChild(avatar);
        button.appendChild(closeButton);

        button.addEventListener('click', () => {
            const chatBox = document.getElementById(`chat-box-${username}`);
            chatBox.style.display = 'block';
            document.body.removeChild(button);
            openChatBoxes.push(username);
            if (openChatBoxes.length > 3) {
                hideFirstOpenChatBox();
            }
            updateChatBoxPositions();
        });

        return button;
    }
    messageItems.forEach((item) => {
        if (item.classList.contains("message-item")) {
            item.addEventListener("click", function () {

                // Cập nhật trạng thái tin nhắn khi ấn vào
                markAsRead(this);

                const username = this.dataset.username;
                const avatar = this.dataset.avatar;
                messageList.style.display = 'none';
                menuMess.style.display = 'none';
                let chatBox = document.getElementById(`chat-box-${username}`);
                if (!chatBox) {
                    chatBox = chatBoxTemplate.cloneNode(true);
                    chatBox.id = `chat-box-${username}`;
                    chatBox.dataset.position = openChatBoxes.length + 1; // Thêm thuộc tính 'data-position' cho mỗi bảng chat
                    chatBox.querySelector(".sender-name").textContent = username;
                    chatBox.querySelector(".avatar").src = avatar;
                    const closeChat = chatBox.querySelector(".close-chat");
                    updateOnlineStatus(username, chatBox);
                    closeChat.addEventListener("click", function () {
                        chatBox.style.display = "none";
                        openChatBoxes = openChatBoxes.filter(box => box !== username);
                        showHiddenChatBox();
                        updateChatBoxPositions();
                    });
                    document.body.appendChild(chatBox);
                    const minimizeButton = chatBox.querySelector('.minimize-button');
                    minimizeButton.addEventListener('click', () => {
                        hideChatBox(username);
                    });

                }
                updateOnlineStatus(username, chatBox);

                if (!openChatBoxes.includes(username)) {
                    if (openChatBoxes.length >= 3) {
                        hideFirstOpenChatBox();
                    }
                    openChatBoxes.push(username);
                    chatBox.style.display = "flex";
                }
                if (openChatBoxes.length > 3) {
                    if (hiddenChatBoxes.includes(username)) {
                        hiddenChatBoxes = hiddenChatBoxes.filter(box => box !== username);
                    } else {
                        hiddenChatBoxes.push(openChatBoxes.shift());
                    }
                } else {
                    // Nếu bảng chat hiện tại không thuộc danh sách bảng chat bị ẩn, thì xóa nó khỏi danh sách
                    if (hiddenChatBoxes.includes(username)) {
                        hiddenChatBoxes = hiddenChatBoxes.filter(box => box !== username);
                    }
                }
                updateChatBoxPositions();
            });
        }
    });

});
function sortUnreadMessages() {
    const messageList = document.getElementById("message-list");
    const messageItems = Array.from(messageList.querySelectorAll(".message-item"));

    messageItems.sort((a, b) => {
        if (a.classList.contains("unread") && !b.classList.contains("unread")) {
            return -1;
        }
        if (!a.classList.contains("unread") && b.classList.contains("unread")) {
            return 1;
        }
        return 0;
    });

    messageItems.forEach(item => {
        messageList.appendChild(item);
    });
}
function updateOnlineStatus(username, chatBox) {
    const messageItem = document.querySelector(`.message-item[data-username="${username}"]`);
    const onlineStatus = messageItem.querySelector(".online-status");
    const chatBoxOnlineStatus = chatBox.querySelector(".online-status");

    if (onlineStatus) {
        chatBoxOnlineStatus.classList.add("online");
        chatBoxOnlineStatus.innerHTML = '<span class="online-text">Online</span>';
    } else {
        chatBoxOnlineStatus.classList.remove("online");
        chatBoxOnlineStatus.classList.add("offline");
    }
}
function updateAvatarButtonPositions() {
    const avatarButtons = document.querySelectorAll('.avatar-button:not(.hidden)');
    const avatarButtonHeight = 50; // Chiều cao của avatar-button, bạn có thể thay đổi giá trị này
    const avatarButtonSpacing = 16; // Khoảng cách giữa các avatar-button, bạn có thể thay đổi giá trị này

    avatarButtons.forEach((avatarButton, index) => {
        const offset = (index + 1) * (avatarButtonHeight + avatarButtonSpacing);
        avatarButton.style.bottom = `${offset}px`;
    });
}



