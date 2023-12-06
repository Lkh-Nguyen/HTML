// function do_something(){
//     alert('Bạn đã click vào nút này!');
// }
// var button = document.getElementById("show-btn");
// button.onclick = function(){
//     alert('Bạn đã click vào nút này!');
// }; 

// var a_click = document.getElementsByClassName("show");
// for(var i=0 ; i < a_click.length;i++){
//     a_click[i].onclick = function(){
//         alert('Bạn đã click vào nút này!');
//         return false;
//     }; 
// }

// function show_result(){
//     var input = document.getElementById("message");
//     var div = document.getElementById("result");
//     div.innerHTML = input.value;
// }

// function show_message(){
//     alert("Bạn đã copy thành công");
// }

// function tinh(){
//     var a = document.getElementById("a");
//     var b = document.getElementById("b");
//     var result = document.getElementById("result");
//     var sum = parseInt(a.value) + parseInt(b.value);
//     if(!isNaN(sum)){
//     result.value = sum;
//     }
// }

// function thongbao(){
//     var a = document.getElementById("dangnhap");
//     var b = document.getElementById("password");
//     var c = document.getElementById("repassword");
//     if(a.value == ""){
//         alert("Mời bạn nhập lại, tài khaorn không thể trống");
//         return false;
//     }
//     if(b.value == ""){
//         alert("Mời bạn nhập lại, mật khẩu không thể trống");
//         return false;
//     }
//     if(b.value != c.value){
//         alert("Mật khẩu phải trùng với mật khẩu nhập lại");
//         return false;
//     }
//     return true;
// }


















    /* <input type="text"  id="text-val" value=""/>
    <div id="result"></div>
    <input type="button" id="btn" value="Click"></input> 

var input = document.getElementById("text-val");
input.addEventListener('keyup',function(){
    document.getElementById('result').innerHTML= input.value;
});

input.addEventListener("keyup",function(){
    if(input.value.length>5){
        alert("Bạn đã nhập hơn 5 kí tự");
    }
});
var button = document.getElementById("btn");
button.addEventListener("click",function(){
    do_something(5,8);
});
function do_something(a,b){
    alert(a+b);
}






    <div id="result"></div>
    <input type="button" value="Random" id="stop_random"></input> *
        var result = document.getElementById("result");
            var button = document.getElementById("stop_random");
            var html = document.getElementsByTagName("html")[0];
            function do_random() {
                var randomString = Math.random();
                result.innerHTML = randomString;
            }
            html.addEventListener("mousemove", do_random);
            button.addEventListener("click", function () {
                html.removeEventListener("mousemove", do_random);
            });


<input type="button" value="click me" id="msgbtn"/>
    <script>
        var input = document.getElementById('msgbtn');
        input.onclick = function(){
            alert('Lần gọi thứ nhất');
        };
        input.onclick = function(){
            alert('Lần gọi thứ hai');
        };
    </script>


<input type="button" id="hvbtn" value="Click me">
    <script>
        var button = document.getElementById("hvbtn");
        cách 1.
         button.onmouseover = function(){
             alert("Bạn đã hover chuột qua thẻ input.");
        }
        button.onmouseout = function(){
            alert("Bạn đã hover chuột ra thẻ input.");
        }
        cách 2.
        button.addEventListener("mouseover",function(){
           alert("Bạn đã hover chuột qua thẻ input1.");
        });
        button.addEventListener("mouseout",function(){
            alert("Bạn đã hover chuột ra thẻ input.");
        })
    </script>









    <div id="color">
        hello
    </div>
    <input type="button" value="Click me" id="btn">
    <script>
        var color = document.getElementById("color");
        color.onmouseout = function(){
            color.style.background= "blue";
        }
        color.onmouseover = function(){
            color.style.background= "yellow";
        }
        color.onclick = function(){
            color.style.background = "red";
        }
        color.addEventListener("dblclick",function(){
            color.style.background = "green";
        })
        
    </script>