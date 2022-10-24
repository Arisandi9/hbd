let message = document.querySelector('.message-container');
let mail = document.querySelector('.mail-message ');
let container = document.querySelector('.container');
let close = document.querySelector('.close');
let text_message = document.querySelector('.message');
let back_audio = new Audio('music/back-music.mp3');
let counter = document.querySelector('.counter');
const header = document.querySelector('header');
const img = document.querySelectorAll('.img');


mail.addEventListener('click', () => {
    message.style.display = 'block'
    text_message.style.display = 'block';
    text_message.style.overflowY = 'scroll';
    
})

close.addEventListener('click',() => {
    message.style.display = 'none'
    text_message.style.display = 'none';
    text_message.style.overflowY = 'hidden';
  
    
});




function count () {
    let counts = 8;
   
    setInterval(() => {
        if(counts >= 0){
            counter.innerHTML = counts;
            counts--;
            if(counts == 5){
                back_audio.play()
            }
            
    }else {
            clearInterval;
            document.querySelector('header').style.display = 'none';
            container.style.display = 'block';
            
        }
    },1000)
}

function yes () {
    document.querySelector('.user-click').style.display = 'none';
    container.style.display = 'block';
            
    count();
    header.style.display = 'grid';
}







