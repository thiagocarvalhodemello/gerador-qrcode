const qrcode = document.getElementById("qrcode-gerado");

qrcode.addEventListener("click",function(){
    qrcode.classList.add("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=www.teste.com");
});

