function paragraph_1(){
    var inputs = [];
    for (var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("para1_input_box" + i).value);
    };
    document.getElementById("show_paragraph1").innerHTML = inputs.join(".");
}
function paragraph_2(){
    var inputs = [];
    for (var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("para2_input_box" + i).value);
    };
    document.getElementById("show_paragraph2").innerHTML = inputs.join(".");
}