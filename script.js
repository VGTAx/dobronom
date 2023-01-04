
document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  let openbtn = document.querySelector('.openbtn');
  let modal = document.querySelector('.modal_main_nav');
  
  if(modal.style.transform == 'translateX(-8em)')
  {
    openbtn.style.transform = 'rotateY(180deg)';    
  }
  else {
    openbtn.style.transform = 'rotateY(0deg)';    
  }

  document.querySelector('.openbtn').addEventListener('click',function(){
  if(openbtn.style.transform == 'rotateY(180deg)')  {
    modal.style.transform = 'translateX(-8em)';
    openbtn.style.transform = 'rotateY(0deg)';     
  }
  else {
    openbtn.style.transform = 'rotateY(180deg)';
    modal.style.transform = 'translateX(0em)';    
  }
  }); 

});
document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});
