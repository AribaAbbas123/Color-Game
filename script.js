
// hexa
function ColorHexa() {
    var hex_num = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var color = "#";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random()*16)
       color += hex_num[index] 
       
       
    }
    document.getElementsByTagName("body")[0].style.background = color;
    document.getElementById("hex-code").innerHTML=color
}
// rgba
function ColorChange() {
    const num1 = Math.floor(Math.random()*255);
    const num2 = Math.floor(Math.random()*255);
    const num3 = Math.floor(Math.random()*255);
    
    const color = ("rgb(" + num1 + "," + num2 + "," + num3 + ")");
    console.log("rgb(" + num1 + "," + num2 + "," + num3 + ")");
    
    document.getElementsByTagName("body")[0].style.background = color;
    document.getElementById("rgba-code").innerHTML = color
}