/*before clicked buttons,text are hidden*/
document.getElementById('lesson1Text').style.display = "none";   //first lesson
document.getElementById('lesson2Text').style.display = "none";   //second lesson
document.getElementById('lesson3Text').style.display = "none";  //third lesson
document.getElementById('lesson4Text').style.display = "none";  //fourth lesson
document.getElementById('lesson5Text').style.display = "none";  //five lesson

/*function for hide and show when clicked the button*/
function showText(clickedBtnId){
    var lesson1Text = document.getElementById('lesson1Text');
    var lesson2Text = document.getElementById('lesson2Text');
    var lesson3Text = document.getElementById('lesson3Text');
    var lesson4Text = document.getElementById('lesson4Text');
    var lesson5Text = document.getElementById('lesson5Text');
    
    switch(clickedBtnId){
        case "1":
            if(lesson1Text.style.display === 'none') {
                lesson1Text.style.display = 'inline';
                document.getElementById(clickedBtnId).innerHTML = "-";

        } 
            else {
                lesson1Text.style.display = 'none';
                document.getElementById(clickedBtnId).innerHTML = "+";
        }
            break;

        case "2":    
            if(lesson2Text.style.display === 'none') {
                lesson2Text.style.display = 'inline';
                document.getElementById(clickedBtnId).innerHTML = "-";
            } 
            else {
                lesson2Text.style.display = 'none';
                document.getElementById(clickedBtnId).innerHTML = "+";
            }
            break;
        case "3":    
            if(lesson3Text.style.display === 'none') {
                lesson3Text.style.display = 'inline';
                document.getElementById(clickedBtnId).innerHTML = "-";
            } 
            else {
                lesson3Text.style.display = 'none';
                document.getElementById(clickedBtnId).innerHTML = "+";
            }
            break;
        case "4":    
            if(lesson4Text.style.display === 'none') {
                lesson4Text.style.display = 'inline';
                document.getElementById(clickedBtnId).innerHTML = "-";
            } 
            else {
                lesson4Text.style.display = 'none';
                document.getElementById(clickedBtnId).innerHTML = "+";
            }
            break;
        case "5":    
            if(lesson5Text.style.display === 'none') {
                lesson5Text.style.display = 'inline';
                document.getElementById(clickedBtnId).innerHTML = "-";
            } 
            else {
                lesson5Text.style.display = 'none';
                document.getElementById(clickedBtnId).innerHTML = "+";
            }
            break;
        default:
            console.log(error);
    }



}

