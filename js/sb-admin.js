$(function () {
    $(window).bind("load resize", function () {
        var $width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if ($width < 768) {
            $('div.sidebar-collapse').addClass('collapse')
        } else {
            $('div.sidebar-collapse').removeClass('collapse')
        }
    });


    var $adminMenu = $('#side-menu');
    var setAdminActiveMenu = function () {
        var $path = window.location.pathname;
        $path = $path.replace(/\/$/, "");
        $path = decodeURIComponent($path);

        if ($path) {
            $('#side-menu > li').each(function () {
                var $href = $(this).find('a[href$="' + $path + '"]:first');
                if ($href.length) {
                    $(this).addClass('active');
                    $(this).find('ul:first').addClass('in');
                    $href.addClass('active');

                    return true;
                }
            });
        }
    };

    if ($adminMenu.length) {
        $adminMenu.metisMenu();
        setAdminActiveMenu();
    }
});
