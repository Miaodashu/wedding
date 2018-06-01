$(function () {
    let img = $('.two > .img ');
    let datu = $('.two >.datu');
    let btR = $('.datu > .btR');
    let btL = $('.datu > .btL');
    let icon = $('.anniu');
    let tou = $('.tou')
    let lei = $('.lei');
    console.log(lei);

    icon.mouseover(function () {
        lei.slideDown();
        lei.finish();
    })
    tou.mouseout(function () {
        lei.slideUp();
        lei.finish();
    })
    // icon.(function () {
    //     lei.slideToggle();
    //     lei.animate({
    //         left: 50, opacity: 1
    //     }, 500);
    // })
    let index = 0;
    img.click(function () {
        datu.removeClass('hh')
        let src = $(this).children('img').attr('src');
        console.log(src);
        datu.children('img').attr('src',src)
    })
    datu.click(function () {
        datu.addClass('hh')
    })
    btR.click(function (e) {
        e.stopPropagation();
        index++;
        if(index==img.length){
            index = 0
        }
        let src = $(img[index]).children('img').attr('src');
        datu.children('img').attr('src',src)
    })
    btL.click(function (e) {
        e.stopPropagation();
        index--;
        if(index<0){
            index = img.length-1
        }
        let src = $(img[index]).children('img').attr('src');
        datu.children('img').attr('src',src)
    })
})