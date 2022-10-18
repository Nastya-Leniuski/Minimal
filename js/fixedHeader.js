$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function() {
        if ($(this).scrollTop() > 110) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
            })
        }
        let  intElemScrollTop = $('body').scrollTop;
        console.log(intElemScrollTop);

        if ($(this).scrollTop() > 110) {
            header.css({
                'padding': '1px 0',
                'transition': '.3s'
            });
        } else {
            header.css({
                'padding': '0.00001px 0',
                'transition': '.3s '
            });
        }
    });
});