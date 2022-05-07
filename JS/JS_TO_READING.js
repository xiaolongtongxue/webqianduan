function choose(b,cha,a,C_Name){
    var request=null;
    if(window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        request=new ActiveXObject("Microsoft.XMLHTTP"/*"Scripting.FileSystemObject"*/);
    }
    title="";
    if(request){
        if(a!=='end'){
            title+=C_Name+' '+cha;
            request.open("GET","../../reading_book/"+b+"/txt/"+a,true);
            request.onreadystatechange=function(){
                if(request.readyState===4){
                    if (request.status === 200 || request.status === 0){
                        var inner="";
                        inner='<h1>'+cha+'</h1>' +
                            '&nbsp;&nbsp;&nbsp;&nbsp;'
                            +request.responseText+
                            '<br>' +
                            '<p style="text-align: right;font-weight: bold;">'+
                                cha+'  end' +
                            '</p>' +
                            '<hr style="height: 5px;color: darkblue">'+
                            '<div class="back_top">' +
                                '<a href="#back_top">' +
                                    '回到顶部' +
                                '</a>' +
                            '</div>' +
                            '';
                        document.getElementById("read").innerHTML= inner;
                    }
                }
            }
        }
        else {
            title+=C_Name+" Ending";
            document.getElementById("read").innerHTML=
                '<br><p style="text-align: right;font-weight: bold;">'+b+'</p>'+
                '<h1>Ending</h1>';
        }
        document.getElementsByTagName("title")[0].innerText = title;
        request.send(null);
    }else {
        alert("error");
    }
}