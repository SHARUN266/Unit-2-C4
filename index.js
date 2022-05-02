// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction)

var arr= JSON.parse(localStorage.getItem("schedule"))||[];

function myfunction(){
    event.preventDefault()
    console.log("someone")
    var data={
        number:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        vanue:masaiForm.venue.value,
 }
    console.log(arr)
    arr.push(data)
    localStorage.setItem("schedule",JSON.stringify(arr))
}
