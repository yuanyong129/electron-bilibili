//获取直播间数据
ajax.get(liveUrl, function (data) {
    var recommendList = JSON.parse(data);
    // console.log(recommendList); 

    var liveCount = document.getElementById("live-count");
    liveCount.textContent = recommendList.data.online_total;

    //console.log(recommendList.data.recommend_room_list);
    
    for (let index = 0; index < 8; index++) {
        createVideoArea(recommendList.data.recommend_room_list[index], document.getElementById("live-container"));

    }

    recommendList = null
});
//获取和刷新动画数据
getData(dougaUrl,"douga-container")
refresh("douga-refresh",dougaUrl,"douga-container")
//获取番剧动态
getData(animeUrl,"anime-container")
refresh("anime-refresh",animeUrl,"anime-container")
//获取国创信息
getData(guochuangUrl,"guochuang-container")
refresh("guochuang-refresh",guochuangUrl,"guochuang-container")
//获取音乐数据
getData(musicUrl,"music-container")
refresh("music-refresh",musicUrl,"music-container")
//获取舞蹈数据
getData(danceUrl,"dance-container")
refresh("dance-refresh",danceUrl,"dance-container")
//获取游戏数据
getData(gameUrl,"game-container")
refresh("game-refresh",gameUrl,"game-container")
//获取知识数据
getData(technologyUrl,"technology-container")
refresh("technology-refresh",technologyUrl,"technology-container")
//获取数码数据
getData(digitalUrl,"digital-container")
refresh("digital-refresh",digitalUrl,"digital-container")
//获取生活数据
getData(lifeUrl,"life-container")
refresh("life-refresh",lifeUrl,"life-container")
//获取鬼畜数据
getData(kichikuUrl,"kichiku-container")
refresh("kichiku-refresh",kichikuUrl,"kichiku-container")
//获取时尚数据
getData(fashionUrl,"fashion-container")
refresh("fashion-refresh",fashionUrl,"fashion-container")
//获取资讯数据
getData(informationUrl,"information-container")
refresh("information-refresh",informationUrl,"information-container")
//获取娱乐数据
getData(entUrl,"ent-container")
refresh("ent-refresh",entUrl,"ent-container")
//获取电影数据
getData(movieUrl,"movie-container")
refresh("movie-refresh",movieUrl,"movie-container")
//获取电视剧数据
getData(teleplayUrl,"teleplay-container")
refresh("teleplay-refresh",teleplayUrl,"teleplay-container")
//获取影视数据
getData(cinephileUrl,"cinephile-container")
refresh("cinephile-refresh",cinephileUrl,"cinephile-container")
//获取记录片数据
getData(documentaryUrl,"documentary-container")
refresh("documentary-refresh",documentaryUrl,"documentary-container")















/**
 * 刷新数据
 * @param {*} id  刷新按钮的id 
 * @param {*} url 数据url
 * @param {*} container 数据的容器
 */
function refresh(id,url,container) {
    var element = document.getElementById(id)
    element.addEventListener("click",function(){
       // document.getElementById(container).style.height = getStyle( document.getElementById(container),"height");
        document.getElementById(container).innerHTML=" "
        getData(url,container)
        document.getElementById(container).style.height=""
    })
}


/**
 * 获取数据
 * @param {*} url  数据的url
 * @param {*} container 存放数据的div
 */
function getData(url,container){
    ajax.get(url,function(data){
        var recommendList = JSON.parse(data)
        //console.log(recommendList.data.archives);
        //console.log(recommendList)     
        for (let index = 0; index < 8; index++) {
            createVideoArea(recommendList.data.archives[index], document.getElementById(container))
    
        }
        recommendList = null
    })
}



/**
 * 用来创建推荐视频的列表
 * @param {*} videoData 视频的数据
 * @param {*} videoContainer  展示视频的容器
 */
function createVideoArea(videoData, videoContainer) {
    //创建视频区域
    var videoArea = document.createElement("div")
    videoArea.classList.add("video-area")
    videoArea.addEventListener("click",function(){
       //document.write("<object src="+"./video.html?aid="+(videoData.aid || videoData.roomid)+"></object>");
       document.location.href = "./video.html?aid="+(videoData.aid || videoData.roomid);
       
    })
    //创建视频封面
    var videoCover = document.createElement("img")
    //console.log(videoData.data.recommend_room_list[i].cover);
    videoCover.src = videoData.cover || videoData.pic
    videoCover.classList.add("video-cover")
    // console.log(videoCover.src);
    //创建视频标题
    var videoTitle = document.createElement("span")
    videoTitle.classList.add("video-title") 
    videoTitle.classList.add("text-overflow")
    videoTitle.textContent = videoData.title

    //创建视频遮罩
    var videoMask = document.createElement("div")
    videoMask.classList.add("video-mask")
    //创建up主区域
    var upArea = document.createElement("div")
    upArea.classList.add("up-area")
    upArea.classList.add("text-overflow")

    //创建up主头像
    var upFace = document.createElement("img")
    upFace.src = videoData.face || videoData.owner.face
    //创建up主名称
    var upName = document.createElement("span")
    upName.classList.add("up-name")   
    upName.textContent = "UP: " + (videoData.uname || videoData.owner.name)

    //给视频区域添加标题和封面
    videoArea.appendChild(videoCover)
    videoArea.appendChild(videoTitle)
    //给视频添加遮罩
    videoArea.appendChild(videoMask)
    //给up主添加到视频遮罩中
    videoMask.appendChild(upArea)
    // 将up头像和up名字添加到up主区域中
    upArea.appendChild(upFace)
    upArea.appendChild(upName)
    //将视频区域添加到容器中
    videoContainer.appendChild(videoArea)


}