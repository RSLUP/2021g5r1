
function pronus (n) 
{
    for(i=0;i< allFruits.length;i++)
    {
        if( n== allFruits[i].id)
        {
            document.getElementById("mysong").src=allFruits[i].source;
            var mysong = document.getElementById("mysong");
            mysong.play();
        }
    }
    
    
}