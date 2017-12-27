function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

function checkCookie()
{
    username=getCookie('username')
    if (username!=null && username!="")
    {alert('Welcome again '+username+'!')}
    else
    {
        username=prompt('Please enter your name:',"")
        if (username!=null && username!="")
        {
            setCookie('username',username,365)
        }
    }
}

var td = new Array(),  //保存每个格子的地鼠,array
    playing = false,  //游戏是否开始
    score = 0, //分数
    beat = 0, //鼠标点击次数
    success = 0, //命中率
    knock = 0, //鼠标点中老鼠图片的次数
    countDown = 30, //倒计时
    interId = null, //指定 setInterval()的变量,空值
    timeId = null; //指定 setTimeout()的变量
//游戏结束
function GameOver(){
    timeStop();
    playing = false;
    clearMouse();
    alert("Game over！\n Your score："+score+"\n Hit rate："+success);
    success = 0;
    score = 0;
    knock = 0;
    beat = 0;
    countDown = 30;
}
//显示当前倒计时所剩时间
function timeShow(){
    document.form1.remtime.value = countDown;
    if(countDown == 0){
        GameOver();
        return;
    }else{
        countDown = countDown-1;
        timeId = setTimeout("timeShow()",1000);
    }
}
//主动停止所有计时
function timeStop() {
    clearInterval(interId);
    clearTimeout(timeId);
}
//随机循环显示老鼠图片
function show(){
    if(playing){
        var current = Math.floor(Math.random()*25);
        document.getElementById("td["+current+"]").innerHTML = '<img src="out.jpg">';
        setTimeout("document.getElementById('td["+current+"]').innerHtml=''",3000); //使用 setTimeout()实现3秒后隐藏老鼠图片
    }
}
//清除所有老鼠图片
function clearMouse(){
    for(var i=0;i<25;i++){
        document.getElementById("td["+i+"]").innerHTML="";
    }
}
//点击事件函数，判断是否点中老鼠
function hit(id){
    if(playing == false){
        alert("click to start!");
        return;
    }else{
        beat += 1;
        if(document.getElementById("td["+id+"]").innerHTML != ""){
            score += 1;
            knock += 1;
            success = knock/beat;
            document.form1.success.value = success;
            document.form1.score.value = score;
            document.getElementById("td["+id+"]").innerHTML = "";
        }else{
            score += -1;
            success = knock/beat;
            document.form1.success.value = success;
            document.form1.score.value = score;
        }
    }
}
//游戏开始
function GameStart(){
    playing = true;
    interId = setInterval("show()",1000);
    document.form1.score.value = score;
    document.form1.success.value = success;
    timeShow();
}
<!--按照指定的周期（以毫秒计）来调用函数或计算表达式.Call a function or an expression according to a specified period (in milliseconds)-->

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

function checkCookie()
{
    username=getCookie('username')
    if (username!=null && username!="")
    {alert('Welcome again '+username+'!')}
    else
    {
        username=prompt('Please enter your name:',"")
        if (username!=null && username!="")
        {
            setCookie('username',username,365)
        }
    }
}