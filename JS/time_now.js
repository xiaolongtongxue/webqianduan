function time_now(){
    var myDate=new Date();
    var y = myDate.getFullYear();
    var M = myDate.getMonth()+1;     //获取当前月份(0-11,0代表1月)
    var d = myDate.getDate();        //获取当前日(1-31)
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    var s = myDate.getSeconds();     //获取当前秒数(0-59)
    // 检查是否小于10
    M=check(M);
    d=check(d);
    h=check(h);
    m=check(m);
    s=check(s);
    var timestr =  y+"-"+M+"-"+d+" "+h+":"+m+":"+s;
    document.getElementById("timenow").innerHTML=
        "当前时间：" + timestr;
}
//时间数字小于10，则在之前加个“0”补位。
function check(i){
    var num = (i<10)?("0"+i) : i;
    return num;
}