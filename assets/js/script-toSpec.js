let sendDataApple = document.getElementById("sendDataApple");
let sendDataMeta = document.getElementById("sendDataMeta");
let sendDataLenovo = document.getElementById("sendDataLenovo");

sendDataApple.addEventListener("click", function() {
    localStorage.setItem('key', '0')
})
sendDataMeta.addEventListener("click", function() {
    localStorage.setItem('key', '2')
})
sendDataLenovo.addEventListener("click", function() {
    localStorage.setItem('key', '1')
})