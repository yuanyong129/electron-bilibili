//获取浏览器宽度
var globalWidth;

//封装Ajax
var ajax = {
    getXhr : function(){
        return new XMLHttpRequest();
    },
    get : function( url, callback, sync = true ){
        var xhr = this.getXhr(); 
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
               callback(xhr.responseText);              
            }  else{
                console.log("");
                   
            } 
        }
        xhr.open("GET" , url , sync);
        xhr.send();
    } ,
    post : function(url, post_data,callback, sync = true ){
        var xhr = this.getXhr(); 
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                callback(xhr.responseText);  
            }else{
                return false;
            }
        }
        xhr.open("POST" , url ,sync);
        xhr.send(post_data);

    }
}

//数字格式化
function numberFormat(number) {
    if (number < 10000) {
        return number
    } else if (number>=10000 && number <100000000) {
        return (number/10000).toFixed(1)+"万"
    } else {
        return (number/1000000000).toFixed(1)+"亿"
    }
}

//获取style样式的css属性,考虑兼容;ie,火狐/谷歌;
function getStyle(parm1, parm2) {
    return parm1.currentStyle ? parm1.currentStyle[parm2] : getComputedStyle(parm1)[parm2];  //parm1,要改变的元素代替名;parm2,要改变的属性名
}
