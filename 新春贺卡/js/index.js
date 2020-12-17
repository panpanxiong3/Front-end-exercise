window.onload = function (){
    const music = document.querySelector('#music');
    const audio = document.getElementsByTagName('audio')[0];

    music.addEventListener('click',(event)=>{
        switch (audio.paused){
            case true:
                audio.play();
                // music.setAttribute('class','play');
                music.style.animationPlayState='running'; //设置动画开始
                break;
            case false:
                audio.pause();
                // music.setAttribute('class','');
                music.style.animationPlayState='paused'; //设置动画结束
                break;
        }
    })


}