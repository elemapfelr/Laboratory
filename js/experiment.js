'use strict';

const menubox = document.querySelector('.menubox');
const menuboxUl = document.querySelector('.menubox>ul');
const menuboxLi = document.querySelectorAll('.menubox>ul>li');
const menuboxLiA = document.querySelectorAll('.menubox>ul>li a');
const innercontainer = document.querySelector('.inner-container');
const contentbox = document.querySelector('.contentbox');
const contentboxLi = document.querySelectorAll('.contentbox>ul>li');
const closeBtn = document.querySelector('.contentbox>button');

const contentboxLiOn = key => {
    contentboxLi.forEach((el, idx) => {
        if (idx == key) {
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
};

menuboxUl.addEventListener('click',()=>{
    innercontainer.style.transition="0.5s";
    innercontainer.style.width="100%";
    contentbox.style.opacity="1";
    let _target = event.target;
        menuboxLiA.forEach((el,idx) => {
            if (el == _target) {
                contentboxLiOn(idx);
                el.classList.add('selected')
                el.classList.remove('unselected')
            }else{
                el.classList.remove('selected')
                el.classList.add('unselected')
            }
        })
})

closeBtn.addEventListener('click',()=>{
    innercontainer.style.transition="0.5s";
    innercontainer.style.width="200%";
    contentbox.style.opacity="0";
    menuboxLiA.forEach((el,idx) => {
        el.classList.remove('selected');
        el.classList.remove('unselected');
    })
})