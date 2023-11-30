window.onload = function(){
  const elm = document.querySelectorAll('.section');
  const elmCount = elm.length;
  elm.forEach(function(item, index){
    item.addEventListener('mousewheel', function(event){
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
      } 
      else if (event.detail)
          delta = -event.detail / 3;

      let elmSelector = elm[index];

      if (delta < 0){
        if (elmSelector !== elmCount-1){
          try{
            window.scrollY = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }

      else{
        if (elmSelector !== 0){
          try{
            window.scrollY = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      window.scrollTo({top:window.scrollY, left:0, behavior:'smooth'});
    });
  });
}