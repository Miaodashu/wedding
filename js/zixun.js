window.onload = function () {
    let lunbo = document.querySelectorAll('.lunbo');
    let bos = document.querySelector('.in > .left');
    let index = 0;
    let m = setInterval(move,2000);
    function move() {
        index ++;
        if (index==lunbo.length){
            index = 0
        } ;
        lunbo.forEach(function (element){
            element.style.opacity='0';
        })
        lunbo[index].style.opacity = '1';
    }
    bos.onmouseenter=function () {
        clearInterval(m)
    };
    bos.onmouseleave=function () {
        setInterval(move,2000);
    };


}