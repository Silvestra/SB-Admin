$(function () {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
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
