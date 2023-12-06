var showall = document.getElementById('showall');
function showAll(){
    var showall = document.getElementById('showall');
    var show = document.getElementById('show');
    if(show.style.display == 'none'){
        showall.innerHTML='SHOW LESS';
        show.style.display='block';
    }else{
        showall.innerHTML='SHOW ALL';
        show.style.display='none';
    }
}
function check(){
    var input = document.getElementsByTagName('input');
    var name=input[0].value;
    var email=input[1].value;
    var password=input[2].value;
    var repassword=input[3].value;
    var submit = input[4];
    var r1 = input[5].checked;
    var r2 = input[6].checked;
    var r3 = input[7].checked;
    if(name =='' || email =='' || password ==''|| repassword==''){
        alert("Hãy điền đầy đủ thông tin")
    }else if(repassword != password){
        alert("Mật khẩu nhập lại không khớp");
    }else if(!r1 && !r2 && !r3){
        alert("Hãy chọn option");
    }else{
        var a = confirm("Cảm ơn bạn đã nhập");
        if(a){
            location.reload();
        }
    }
}