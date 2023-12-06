var input = document.getElementsByTagName("input");

var orderMenu = document.getElementById("orderMenu");
orderMenu.onclick = function orderMenu123(){
    if(!input[0].checked && !input[1].checked && !input[2].checked && !input[3].checked){
        alert("Bạn chưa tick vào menu");
    }else{
        var menu = document.getElementsByClassName("menu");
        var label = document.getElementsByTagName("label");
        var price = 0;
        menu[1].innerHTML="";
        for(var i=0;i<input.length;i++){

            if(input[i].checked){
                price += Number(input[i].value);
                menu[1].innerHTML += 
                `<div class="menulist">
                    <div class="hello">
                        <label>${label[i].innerText}</label>
                    </div>
                    <span class="price">${input[i].value}$</span>
                </div> `;
            }
        }
        var priceMoney = document.getElementById("price");
        priceMoney.innerText= `${price}$`
        total.style.display="block";
    }
};
