window.onload= function () {
    let bos = document.querySelector('header > .min > .left');
    let imgs = document.querySelectorAll('header > .min > .left > .lunbo')
    let btn=document.querySelectorAll('.btn>li')
    let lbtn=document.getElementsByClassName('lbtn')[0];
    let rbtn=document.getElementsByClassName('rbtn')[0];
    let index = 0 ;
    let current = 0,next =0;
    let width = parseInt(getComputedStyle(imgs[0],null).width)
    //点击按钮跳转
    btn.forEach(function (element,index) {
        element.onclick= function () {
            if(index==current){
                return
            }if(current<index){
                imgs[index].style.left=width+'px'
                animate(imgs[current],{left:-width});
                animate(imgs[index],{left:0});
                btn[current].classList.remove('hot');
                btn[index].classList.add('hot')
            }else if(current>index){
                imgs[index].style.left=width+'px'
                animate(imgs[current],{left:width});
                animate(imgs[index],{left:0});
                btn[current].classList.remove('hot');
                btn[index].classList.add('hot')
            }
            current=next  = index
        }

    })
//循环
    let b = setInterval(move,2000);

    function move(){
        next++;
        if(next===imgs.length){
            next=0;
        }
        imgs[next].style.left=width+'px'
        animate(imgs[current],{left:-width});
        animate(imgs[next],{left:0});
        btn[current].classList.remove('hot');
        btn[next].classList.add('hot')
        current=next;
    }
    //悬停
    bos.onmouseenter=function(){
        clearInterval(b)
    }
    bos.onmouseleave=function(){
        b= setInterval(move,2000);
    }
    //you
    rbtn.onclick= function () {
        move1()
    }
    //zuo
    lbtn.onclick= function () {
        move()
    }
    function move1(){
        next--;
        if(next<0){
            next=imgs.length-1
        }
        imgs[next].style.left=-width+'px'
        animate(imgs[current],{left:width});
        animate(imgs[next],{left:0});
        btn[next].classList.add('hot');
        btn[current].classList.remove('hot')
        current=next
    }

    let btL=document.getElementsByTagName('button')[0];
    let btR=document.getElementsByTagName('button')[1];
    let tu = document.querySelector('.boxx >.right>.tu')
    let tp = document.querySelectorAll('.boxx >.right>.tu>li')
    let Right = document.querySelector('.boxx >.right')
    let lw = Right.offsetWidth;
    console.log(tu);
    let MaxD=tp.length/1;
    let times=0
    console.log(MaxD);
    btR.onclick=function () {
        if(++times===MaxD){
            times= MaxD-1
        }
        console.log(times);
        tu.style.transform=`translateX(${-times*lw}px)`
    }
    btL.onclick=function () {
        if(--times<0){
            times = 0
        }
        tu.style.transform=`translateX(${-times*lw}px)`
    }
}