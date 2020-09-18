jQuery(document).ready(function($) {

    // Menu settings
    $('#menuToggle, .menu-close').on('click', function() {
        $('#menuToggle').toggleClass('active');
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
    });

    // Smooth scroll for the menu and links with .scrollto classes
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500, 'easeInOutExpo');
            }
        }
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
    });

    // Init Fancybox
    jQuery(".fancybox").fancybox();

    // Init Stellar
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });

    //Menu 表示非表示切り替え
    $(function() {
        $('.section').hide();

        $('.secList').on('click', function() {
            // クリックした要素の ID と違うクラス名のセクションを非表示
            $('.section').not($('.' + $(this).attr('id'))).hide();
            // クリックした要素の ID と同じクラスのセクションを表示
            // $('.'+$(this).attr('id')).show();

            // toggle にすると、同じボタンを 2 回押すと非表示になる
            $('.' + $(this).attr('id')).toggle();
        });
    });

});