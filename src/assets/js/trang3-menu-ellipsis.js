document.addEventListener('DOMContentLoaded', function () {
    var ellipsisMenus = document.querySelectorAll('.m-t-3');

    ellipsisMenus.forEach(function (ellipsisMenu) {
        var ellipsisBtn = ellipsisMenu.querySelector('.ellipsis-btn');
        var menu = ellipsisMenu.querySelector('.menu-ellipsis1');
        var menuItems = ellipsisMenu.querySelectorAll('.menu-item-ell');

        ellipsisBtn.addEventListener('click', function () {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        menuItems.forEach(function (menuItem) {
            menuItem.addEventListener('click', function () {
                menu.style.display = 'none';
                // Thực hiện chức năng tương ứng với từng lựa chọn ở đây
            });
        });
    });

    document.addEventListener('click', function (event) {
        var openMenu = document.querySelector('.menu[style="display: block;"]');
        if (openMenu && !event.target.closest('.ellipsis-menu')) {
            openMenu.style.display = 'none';
        }
    });
});

/*---------------------------------------------Ellipsis-nav----------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    var ellipsisMenusNav = document.querySelectorAll('.side-menu');

    ellipsisMenusNav.forEach(function (ellipsisMenu) {
        var ellipsisBtnNav = ellipsisMenu.querySelector('.ellipsis-btn-nav');
        var menu = ellipsisMenu.querySelector('.menu-ellipsis1-nav');
        var menuItems = ellipsisMenu.querySelectorAll('.menu-item-ell-nav');

        ellipsisBtnNav.addEventListener('click', function () {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        menuItems.forEach(function (menuItem) {
            menuItem.addEventListener('click', function () {
                menu.style.display = 'none';
                // Thực hiện chức năng tương ứng với từng lựa chọn ở đây
            });
        });
    });

    document.addEventListener('click', function (event) {
        var openMenu = document.querySelector('.menu[style="display: block;"]');
        if (openMenu && !event.target.closest('.ellipsis-menu')) {
            openMenu.style.display = 'none';
        }
    });
});
