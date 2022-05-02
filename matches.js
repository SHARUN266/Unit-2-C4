// write js code here corresponding to matches.html
var box = document.querySelector("tbody");

var mat = JSON.parse(localStorage.getItem("schedule"))

Display(mat)
var fvrList = JSON.parse(localStorage.getItem("favourites")) || [];
document.querySelector("#filterVenue").addEventListener("click", filterV)

function filterV() {
    var filter = document.querySelector("#filterVenue").value;
    console.log(filter)
    var filterList = mat.filter(function (elem) {
        return elem.vanue == filter;
    })
    Display(filterList)
}

function Display(data) {
    box.innerText = "";
    data.forEach(function (elem) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerText = elem.number;
        var td2 = document.createElement("td")
        td2.innerText = elem.teamA;
        var td3 = document.createElement("td")
        td3.innerText = elem.teamB;
        var td4 = document.createElement("td")
        td4.innerText = elem.date;
        var td5 = document.createElement("td")
        td5.innerText = elem.vanue;
        td6 = document.createElement("td")
        td6.innerText = "Add as Favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"

        td6.addEventListener("click", function () {
            myFvrt(elem)
        })


        tr.append(td1, td2, td3, td4, td5, td6)

        box.append(tr)

    })

}


function myFvrt(elem) {
    console.log(elem)
    fvrList.push(elem)
    localStorage.setItem("favourites", JSON.stringify(fvrList))
}