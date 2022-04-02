window.addEventListener("load",init)

function init(){
    console.log("haho")
     var pElem=document.querySelectorAll("footer p")[0].innerHTML="Dávid Balázs";//html elem
     pElem.innerHTML="Dávid Balázs"; //tartalom megváltoztatása
     //pElem.style.textAlign ="center";
     //pElem.style.fontSize="20px"

     var kepek=document.querySelectorAll("#bal>p>img");
    console.log(kepek)

    for (let index = 0; index < kepek.length; index++) {
        kepek[index].addEventListener("click",kattint);  
        kepek[index].addEventListener("mouseover",kiemel);
        kepek[index].addEventListener("mouseout",leemel);
    }
}

var tomb = [];

function kattint(){
    console.log(event.target.src); //kiváltó elem
    tomb.push(event.target.src);
    console.log(tomb);
//amelyik elemre kattintottam, leveszem az eseménykezelőt.
    event.target.style.display="none";
    var kep = "<img src='"+event.target.src+"' alt='' >";
    document.querySelectorAll("#csonak")[0].innerHTML+=kep;
    for (let index = 0; index < document.querySelectorAll("#csonak").length; index++) {
        document.querySelectorAll("#csonak img")[index].addEventListener("mouseover",kiemel);
        document.querySelectorAll("#csonak img")[index].addEventListener("mouseout",leemel);
    }
}
function kiemel(){
    event.target.className="kiemel";
}
function leemel(){
    event.target.className="";
}