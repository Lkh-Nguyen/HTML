function show() {
    var showmore = document.getElementById("showmore");
    var team = document.getElementById('team');
    var myform = document.getElementById('myform');
    if(team.style.display == 'none' ){
        showmore.innerHTML = 'SHOW LESS';
        team.style.display = 'block';
        myform.style.display='block';
    }else{
        showmore.innerText = 'SHOW MORE';
        team.style.display = 'none';
        myform.style.display='none';
    }
}
function check(){
    var myform = document.getElementById('myform');
    var input = document.getElementsByTagName('input');
    var email = input[0].value;
    var USA = input[1].checked;
    var UK = input[2].checked;
    var captcha = input[3].value;
    if(email ==''){
        alert("Mời bạn nhập email");
    }else if(!USA && !UK){
        alert("Mời bạn nhập lại option");
    }else if(captcha != "cVr12TY"){
        alert("Mời bạn nhập captcha vì nó sai hoặc chưa nhập");
    }else{
        var a = confirm("Cảm ơn bạn đã nhập");
        if(a){
            location.reload();
        }
    }
}