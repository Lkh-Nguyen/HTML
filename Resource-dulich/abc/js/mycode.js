var booktour =document.getElementById("booktour");
var TourId = document.getElementById("TourId");
var mm = document.getElementById("mm");
mm.innerHTML = `${TourId.value}$/Person`;


function updatePrice(){
    mm.innerHTML = `${TourId.value}$/Person`;
}
var numberPP = document.getElementById("numberPP");
var booktour =document.getElementById("booktour");
var total =document.getElementById("total");
var price = document.getElementById("price");
booktour.onclick=function(){
    var money = Number(TourId.value * numberPP.value);
    price.innerText=`${money}$`;
    total.style.display="block";
}