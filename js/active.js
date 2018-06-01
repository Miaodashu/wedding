window.onload = function () {
    //轮播
    let lunbo = document.querySelectorAll('.lunbo');
    let bos = document.querySelector('.in > .left');
    let btR = document.querySelector('.but > .right');
    let btL = document.querySelector('.but > .left');
    let txt = document.querySelectorAll(' .text > .txt')
    let index = 0;
    let tt = 0;
    console.log(btL);
    btR.onclick = function () {
        tt++;
        if (tt == txt.length){
            tt = txt.length-1
        }
        txt.forEach(function (ele) {
            ele.style.zIndex = 0;
        })
        txt[tt].style.zIndex= 88;
    }
    btL.onclick = function () {
        tt--;
        if (tt < 0){
            tt = 0
        }
        txt.forEach(function (ele) {
            ele.style.zIndex = 0;
        })
        txt[tt].style.zIndex= 88;
    }
    //轮播
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



    //留言板
    let input =document.querySelector('.message > input');
    let text = document.querySelector('textarea');
    let btn = document.querySelector('.message > .btn');
    let span = document.querySelector('.message > .info > span');
    let say = document.querySelector('.say');
    onkeyup = function () {
        let zi = text.value;
        span.innerText = zi.length;
    }
    btn.onclick = function () {
        let inputN = input.value;
        let textN = text.value;
        input.value = '';
        text.value = '';
        span.innerText = 0;
        let str = `<div class="box">
					<div class="top">
						<i class="iconfont icon-laba"></i>
						
						<p>${inputN}</p>
					</div>
					<div class="bottom">
						<p>${textN}</p>
					</div>
					<div class="tou"></div>
				</div>`
        say.innerHTML += str
    }
}