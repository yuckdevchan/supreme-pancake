var image = document.getElementById("image");
image.style.width = "100px"; // set the width of the image
image.style.height = "100px"; // set the height of the image

var image = document.getElementById("image2");
image.style.width = "300px"; // set the width of the image
image.style.height = "300px"; // set the height of the image

var dong = new Audio('mao_zedong.mp3');
var pipe = new Audio('pipe.mp3');

var dong_status = false
console.log("mao zedong music not playing")

function do_alert() {
    alert(`Eshang pajang hongya hong tong tonge
Shinjong ditajang she Mao Zedonge
Khali da women de ji pange
Djengi pang shentang ja suo ju ren
Hiyahi zu joh
Jaja zu joah
Djengi pang shentang ja suo ju ren

Jeshang pajang hongya hong tong tonge
Shinjong ditajang she Mao Zedonge
Khali da women pejong tsjieng chinge
Gue ming chiang shai yieïgehonge
Hiyahi zu joh
Jaja zu joah
Gue ming chiang shai yieïgehong
[BREAK]
Huang chin djong die hong tajang
Tchow dewing djangwi kjenhong
Chang paichin di kushenljouw miang
Haylen djang pankumshi peïouw.
Tjihjen tjan qjun
Kwinta hai wando hwihwe shanjang hai
Jenpjin jeni zong ching guntang
Women chi djoei homen da jang

Aaah Mao djoeshi
Woa mamu shenjuäni
Wintentjouw doulouchi tjin shan
Yen doö yen di tchoejeni
Weng shewoe tjawamsha o tja

Jeshang pajang hongya hong tong tonge
Shinjong ditajang she Mao Zedonge
Khali da women de ji pange
Djengi pang shentang ja suo ju ren
Hiyahi zu joh
Jaja zu joah
Djengi pang shentang ja suo ju ren

Jeshang pajang hongya hong tong tonge
Shinjong ditajang she Mao Zedonge
Khali da women pejong tsjieng chinge
Gue ming chiang shai yieïgehonge
Solewa dzoe solewa dzoe
Jiïja jipiè honge!`)
}

function song_button_pressed() {
    if (dong_status == false) {
        pipe.play()
        dong.play()
        document.body.style.backgroundImage = "url('dong2.jpg')";
        document.body.style.backgroundSize = "auto";
        document.getElementById("title").innerHTML = "Supreme Maoist China";
        document.getElementById("dong_button").style.backgroundColor = "red";
        document.title = "Supreme Maoist China | Home"
        document.getElementById("subtitle_text").style.color = "red";
        document.getElementById("image").src = "dong2.jpg";
        document.getElementById("subtitle_text").innerHTML = `Eshang pajang hongya hong tong tonge<br>
Shinjong ditajang she Mao Zedonge<br>
Khali da women de ji pange<br>
Djengi pang shentang ja suo ju ren<br>
Hiyahi zu joh<br>
Jaja zu joah<br>
Djengi pang shentang ja suo ju ren<br>
<br>
Jeshang pajang hongya hong tong tonge<br>
Shinjong ditajang she Mao Zedonge<br>
Khali da women pejong tsjieng chinge<br>
Gue ming chiang shai yieïgehonge<br>
Hiyahi zu joh<br>
Jaja zu joah<br>
Gue ming chiang shai yieïgehong<br><br>
[BREAK]<br><br>
Huang chin djong die hong tajang<br>
Tchow dewing djangwi kjenhong<br>
Chang paichin di kushenljouw miang<br>
Haylen djang pankumshi peïouw.<br>
Tjihjen tjan qjun<br>
Kwinta hai wando hwihwe shanjang hai<br>
Jenpjin jeni zong ching guntang<br>
Women chi djoei homen da jang<br>
<br>
Aaah Mao djoeshi<br>
Woa mamu shenjuäni<br>
Wintentjouw doulouchi tjin shan<br>
Yen doö yen di tchoejeni<br>
Weng shewoe tjawamsha o tja<br>
<br>
Jeshang pajang hongya hong tong tonge<br>
Shinjong ditajang she Mao Zedonge<br>
Khali da women de ji pange<br>
Djengi pang shentang ja suo ju ren<br>
Hiyahi zu joh<br>
Jaja zu joah<br>
Djengi pang shentang ja suo ju ren<br>
<br>
Jeshang pajang hongya hong tong tonge<br>
Shinjong ditajang she Mao Zedonge<br>
Khali da women pejong tsjieng chinge<br>
Gue ming chiang shai yieïgehonge<br>
Solewa dzoe solewa dzoe<br>
Jiïja jipiè honge!`;
        // do_alert()
        dong_status = true;
    } else {
        dong.pause()
        document.body.style.backgroundImage = "url('https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fda85b8444abfb3aa604b8016b204d2c1f1563340')";
        dong_status = false;
        document.body.style.backgroundSize = "cover";
        document.getElementById("title").innerHTML = "Supreme Pancakes";
        document.getElementById("dong_button").style.backgroundColor = "transparent";
        document.getElementById("subtitle_text").style.color = "white";
        document.title = "Supreme Pancakes | Home"
        document.getElementById("subtitle_text").innerHTML = "Pancakes Better Than You Could Imagine.";
    }
}
