window.onload = function (){
    /*
    * 获取dom元素
    * */
    const music = document.querySelector('#music');
    const audio = document.getElementsByTagName('audio')[0];
    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');
    const page3 = document.querySelector('#page3');
    /*
    * 设置音乐自动播放
    * */

    /*
    * 监听音乐播放结束
    * */
    audio.addEventListener('ended', () => {
        music.style.animationPlayState = 'paused';
    },false)
    /*
    * 监听音乐按钮 控制音乐播放
    * */
    music.addEventListener('touchstart',  (event)=> {
       listenMusicPlay();
    },false);

    /*
    * 监听音乐是否未播放
    * true:播放音乐
    * false:暂停音乐
    * */
    const listenMusicPlay = function (){
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
    }

    /*
    * 监听第一页点击事件
    * */
    page1.addEventListener('touchstart',()=>{
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = '100%';

        setTimeout(()=>{
            page2.setAttribute('class','page fadeOut');
            page3.setAttribute('class','page fadeIn');
        },5500)
    },false);
}