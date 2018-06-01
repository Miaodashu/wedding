/*
* @Author: Administrator
* @Date:   2018-05-05 17:26:06
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-07 13:48:43
*/
window.onload = function() {
    let hh = document.getElementsByClassName("syi");
    let butt = document.getElementsByClassName('butt');
    console.log(hh);
    let hezi = document.querySelector('.in .left');
    let left = document.querySelector('.jian');
    let right = document.querySelector('.jian1');
    for (let i = 0; i < butt.length; i++) {
        butt[i].onclick = function () {
            for (let j = 0; j < butt.length; j++) {
                butt[j].classList.remove("but1")
                hh[j].style.zIndex = 0
            }
            butt[i].classList.add('but1')
            hh[i].style.zIndex = 66;
            cureent = i;
        }
    }
        let tu = document.querySelectorAll('.lunbo');
        let p = setInterval(move, 2000);
        let index = 0

        function move() {
            index++
            if (index === tu.length) {
                index = 0
            }
            tu.forEach(function (value) {
                value.style.opacity = "0"
            });
            tu[index].style.opacity = "1"
        }

        hezi.onmouseenter = function () {
            clearInterval(p)
        }
        hezi.onmouseleave = function () {
            p = setInterval(move, 2000);
        }

        function move1() {
            indexx--;
            if (index < 0) {
                index = tu.length
            }
            tu.forEach(function (value) {
                value.style.opacity = "0"
            });
            tu[index].style.opacity = "1"
        }

    let showp = document.querySelectorAll('.show-product > .show-p');
    let btt = document.querySelectorAll('.next > .but');
    let box0 = document.querySelectorAll('.show-product > .show-p > .look > .box')
    for(let i = 0;i < btt.length;i++){
        btt[i].onclick=function(){
            showp.forEach(function (element) {
                element.style.zIndex=0;
            })
            btt.forEach(function (element) {
                element.classList.remove('but1')
            })
            btt[i].classList.add('but1');
            showp[i].style.zIndex=88;
        }
    }

}