var about = document.querySelector('.about');
var skills = document.querySelector('.skills');
var experience = document.querySelector('.experience');
var my_fav_video = document.querySelector('.my_fav_video');
var my_fav_music = document.querySelector('.my_fav_music');
var left_arrow = document.querySelector(".fa-caret-square-left");
var right_arrow = document.querySelector(".fa-caret-square-right");
var allSections = document.querySelectorAll(".about, .skills, .experience");

//本来想着动态加载的，但是最后动画十分卡顿，所以放弃了
//var spotify_music_iframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4L49kKEqUUBd6pAW9kLG3g?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'


//加载youtube的api
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//控制youtue视频,new出来的对象是我的div块，api会自动替换其为iframe框架
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('my_fav_video', {
        height: '400',
        width: '94%',
        videoId: 'yZwlW5INhgk'
    });
}

//播放
function playVideo() {
    try {
        player.playVideo();
    } catch (error) {
        //如果加载不了，那么可能是api没有导入成，也就是说网络问题，那么直接报错
        document.getElementById('my_fav_video').innerText = "抱歉，YouTube视频加载失败，可能是网络原因哦";
        document.getElementById('my_fav_video').style.textAlign = "center"
    }
}

//暂停
function stopVideo() {
    try {
        player.pauseVideo();
    } catch (error) {

    }
}
//控制spotify的超时
var iframeContainer = document.getElementById('my_fav_music');
var myIframe = document.getElementById('iframe_spotify');

// 设置超时时间（以毫秒为单位）
var timeoutMilliseconds = 5000; // 5秒

// 设置一个定时器，在超时时间后检查 iframe 是否加载完成
var timeoutTimer = setTimeout(function () {
    handleTimeout();
}, timeoutMilliseconds);

// 监听 iframe 加载完成事件
myIframe.addEventListener('load', function () {
    // 清除超时定时器
    clearTimeout(timeoutTimer);
});

// 处理加载超时的函数
function handleTimeout() {
    // 在原来的 div 中写入"加载异常"的内容
    iframeContainer.innerHTML = '抱歉，Spotif音乐加载失败，可能是网络原因哦';
}

// 设置超时定时器
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), timeoutMilliseconds);


function showPopup() {
    document.getElementById("popup").style.transform = "scale(1)";
}

function hidePopup() {
    document.getElementById("popup").style.transform = "scale(0)";
}

/*向前翻页*/
function pre() {
    if (skills.classList.contains("active")) {
        toggleActiveClass(skills, about);
    } else if (experience.classList.contains("active")) {
        toggleActiveClass(experience, skills);
    } else if (my_fav_music.classList.contains("active")) {
        toggleActiveClass(my_fav_music, experience);
    } else if (my_fav_video.classList.contains("active")) {
        stopVideo();
        toggleActiveClass(my_fav_video, my_fav_music);
    }
}
/*向后翻页*/
function next() {
    if (about.classList.contains("active")) {
        toggleActiveClass(about, skills);
    } else if (skills.classList.contains("active")) {
        toggleActiveClass(skills, experience);
    } else if (experience.classList.contains("active")) {
        toggleActiveClass(experience, my_fav_music);
    } else if (my_fav_music.classList.contains("active")) {
        playVideo();
        toggleActiveClass(my_fav_music, my_fav_video);
    }
}

left_arrow.addEventListener("click", pre);
document.addEventListener("keydown", function (event) {
    if (event.key === 'a' || event.key === "ArrowLeft") {
        pre();
    }
})

left_arrow.addEventListener("mousemove", function () {
    if (about.classList.contains("active")) {
        left_arrow.style.color = "gray";
    } else {
        left_arrow.style.color = "darkorange";
    }
})

left_arrow.addEventListener("mouseout", function () {
    left_arrow.style.color = "unset";
})

right_arrow.addEventListener("click", next);
document.addEventListener("keydown", function (event) {
    if (event.key === 'd' || event.key === "ArrowRight") {
        next();
    }
})

right_arrow.addEventListener("mousemove", function () {
    if (my_fav_video.classList.contains("active")) {
        right_arrow.style.color = "gray";
    } else {
        right_arrow.style.color = "darkorange";
    }
})

right_arrow.addEventListener("mouseout", function () {
    right_arrow.style.color = "unset";
})

/*切换active类的位置*/
function toggleActiveClass(elementToRemove, elementToAdd) {
    elementToRemove.classList.remove("active");
    elementToRemove.style.zIndex = -1;
    elementToAdd.classList.add("active");
    elementToAdd.style.zIndex = 100;
}