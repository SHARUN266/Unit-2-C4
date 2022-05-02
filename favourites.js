// write js code here corresponding to favourites.html
var box=document.querySelector("tbody");

var arr1=JSON.parse(localStorage.getItem("favourites"));
DisplayFvrt(arr1)

function DisplayFvrt(data){
    data.forEach(function (elem){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerText=elem.number;
        var td2=document.createElement("td")
        td2.innerText=elem.teamA;
        var td3=document.createElement("td")
        td3.innerText=elem.teamB;
        var td4=document.createElement("td")
        td4.innerText=elem.date;
        var td5=document.createElement("td")
        td5.innerText=elem.vanue;
        td6=document.createElement("td")
        td6.innerText="Delete"
        td6.style.color="red"
        td6.style.cursor="pointer"

        td6.addEventListener("click" , function(){
            DltRow(elem)
        })
        

        tr.append(td1,td2,td3,td4,td5,td6)

        box.append(tr)

    })
}

function DltRow(elem){
    arr1.splice(elem,1)
    localStorage.setItem("favourites",JSON.stringify(arr1))
    window.location.reload();

}

