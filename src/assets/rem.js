var oHtml = document.getElementsByTagName("html")[0];
var iWidth = document.documentElement.clientWidth;
iWidth = iWidth > 640 ? 640 : iWidth;
oHtml.style.fontSize = iWidth / 16 + "px";
