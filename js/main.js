// 스크롤 헤더 변화
const header = document.querySelector('.header_in');

window.addEventListener('scroll',function(){
  header.classList.add('on')  
    if(this.window.scrollY == 0) header.classList.remove('on') 
})

//헤더 버튼누르면 해당 section으로 스크롤

const menuItems = document.querySelectorAll('nav > ul > li > a');
let num = 0;

menuItems.forEach(function(item,idx){
    item.onclick = function(e){
      e.preventDefault();

    //let tagetName = item.getAttribute('data-target');
    let tagetName = item.dataset.target;
    document.querySelector(tagetName).scrollIntoView({ 
    behavior:"smooth" })

    menuItems[num].classList.remove('on');
    remoteBtns[num].classList.remove('on');

    num = idx;
    item.classList.add('on');
    remoteBtns[idx].classList.add('on')
    }
})

//remove 버튼

const remoteBtns = document.querySelectorAll('#remote a') ;

remoteBtns.forEach(function(btn,idx){
  btn.onclick = function(e){
    e.preventDefault();
    document.querySelector(`#s${idx+1}`).scrollIntoView({ 
    behavior:"smooth" })

    menuItems[num].classList.remove('on');
    remoteBtns[num].classList.remove('on');
  
    num = idx;
    btn.classList.add('on')
    menuItems[idx].classList.add('on')
  }
})