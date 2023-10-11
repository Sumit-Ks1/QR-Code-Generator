let username;
     document.getElementById("buttons").onclick=function changeScr(){
        username=document.getElementById("qin").value;
        
        document.getElementById("qimg").src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+username;
}