// $(function () {
//     let geli = $('.geLi')
//     let mask = $('a > .mask')
//     let img = $('a > img')
//     console.log(geli);
//     geli.mouseover(function () {
//         mask.animate({left:0,top:0})
//         img.css({transform:'scale(1.2)'})
//     })
//     geli.mouseout(function () {
//         mask.animate({left:0,top:4+'rem'})
//         img.css({transform:'scale(1)'})
//     })
// })
window.onload=function () {
    let pepo = document.querySelector('.pepo');
    pepo.onmouseenter = function (e) {
        let ele = e.target;
        if(ele.classList.contains('mask')){
            ele.style.opacity =1
        }
        // if(ele.nodeName == 'A'){
        //     console.log(ele);
        //     // ele.children('.mask').style.top =4+'rem';
        //     console.log(ele.children('.mask'));
        //     // ele.children('img').style.background = 'red'
        //     // ele.children('img').style.transform =  'scale(1.2)'
        // }
    }
}