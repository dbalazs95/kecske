window.addEventListener("load",init)

tomb = []
var tomb2 = [1,2,3,4,5,6,7,8,9]

function init(){

    var szoveg = ujjfugveny();
    console.log(szoveg); //string, mert string az fv visszatérési értéke

    var fuggveny2= function (nev){
        return "halihó "+nev;
    }
    console.log(fuggveny2);  //függvény
    console.log(fuggveny2("béla"))
    
    var kepek=document.querySelectorAll("#bal>p>img");
    //névtelen függvény
    //callBack - nem azonnal fut le, hanem akkor amikor vmilyen esemény megtörténik
    kepek[0].addEventListener("click",()=>{
        console.log(event.target.src);
        tomb.push(event.target.src);
    });
   

    //nyílfüggvények
    var fuggveny3= (nev)=>{
        return "halihó "+nev;
    }
    console.log(fuggveny3("Jakab"))
}


function ujjfugveny(){
    return "hello";
}

function kattint(){
    console.log(event.target.src); //kiváltó elem
    tomb.push(event.target.src);
}

for (let index = 0; index < tomb2.length; index++) {
    console.log(tomb2[index])
}
tomb2.forEach(function(elem,index){
    console.log(elem+": "+index);
}
);



