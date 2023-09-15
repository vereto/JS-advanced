function toggle() {
   let buttonEl = document.getElementsByClassName('button')[0];
   let textExample = document.getElementById('extra');

   if(buttonEl.textContent == 'More'){
    buttonEl.textContent = 'Less';
    textExample.style.display = 'block'
   }else{
    buttonEl.textContent = 'More';
    textExample.style.display = 'none'
   }
}