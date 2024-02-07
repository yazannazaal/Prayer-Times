const opened = document.querySelector('.btn');
const closed = document.querySelector('.close');
let transition = gsap.timeline({defaults:{duration:1,ease:'expo.inOut'}});

opened.addEventListener('click',()=>{
    if(transition.reversed()){
        transition.play()
    }else{
         transition.to('nav',{right:0})
               .to('nav',{height:'100vh'},'-=.1')
               .to('nav ul li a',{opacity:1,PointerEvents:'all',stagger:.2},'-=.8')
               .to('.close',{opacity:1,PointerEvents:'all'},'-=.8')
               .to('nav h2',{opacity:1},'-=1') 

    }
   
});

closed.addEventListener('click',()=>{
    transition.reverse()
});