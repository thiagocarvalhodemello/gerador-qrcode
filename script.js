function qrcode() {
    var input = document.querySelector('input').value;
    if (input.trim() === '') {
        alert('Por favor, insira uma URL ou texto.');
        return;
    }
    var url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + input;
    var img = document.getElementById('qrcode-gerado');
    img.style.display = "block";
    img.src = url;
}