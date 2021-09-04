let questions = document.querySelectorAll(".name"),
  i;
function pronus (n) 
{
    for(i=0;i< allFruits.length;i++)
    {
        if( n== allFruits[i].id)
        {
            document.getElementById("mysong").src=allFruits[i].source;
            var mysong = document.getElementById("mysong");
            mysong.play();
           // document.getElementById("name").innerHTML=allFruits[i].name;
            questions[i].innerHTML = allFruits[i].name;
        }
    }
    
    
}