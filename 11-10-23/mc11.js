//Bai 1
var button = document.getElementsByTagName("input");
for(var i=0;i<button.length;i++){
    button[i].onclick=function(){
        var parent = this.parentElement.parentElement;
        console.log(parent);
        parent.remove();
    }
}

<h1>Xóa thẻ HTML</h1>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <td>1</td>
                <td>Tiêu đề thứ nhất</td>
                <td>
                    <input type="button" value="Delete"/>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Tiêu đề thứ hai</td>
                <td>
                    <input type="button" value="Delete"/>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Tiêu đề thứ ba</td>
                <td>
                    <input type="button" value="Delete"/>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Tiêu đề thứ tư</td>
                <td>
                    <input type="button" value="Delete"/>
                </td>
            </tr>
        </table>







////////////////////////////////////////////////////////