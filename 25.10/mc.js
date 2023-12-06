// var student = {
//     data : [],
//     viewStudent : function(){
//         for(var i=0;i<this.data.length;i++){
//             document.write("<div>"+this.data[i].id +"|"+this.data[i].name+"|"+this.data[i].email+"</div>")
//         }
//     },
//     addStudent : function(id,name,email){
//         var objectStudent = {
//             id:id,
//             name:name, 
//             email:email
//         }
//         this.data.push(objectStudent);
//     },
//     removeStudent:function(id){
//         for(var i=0;i<this.data.length;i++){
//             if(this.data[i].data===id){
//                 this.data.splice(i,1);
//             }
//         }
//     },
//     editStudent : function(id,name,email){
//         for(var i=0;i<this.data.length;i++){
//             if(this.data[i].data===id){
//                 this.data[i].name=name;
//                 this.data[i].email=email;
//             }
//         }
//     }
// }
// student.addStudent(1,"2","ggg");
// student.viewStudent();


var Student = {
    data: [],
    viewStudent: function () {
      var listStudent = this.data;
      for (var i = 0; i < listStudent.length; i++) {
        document.write(
          "<div>" +
            listStudent[i].id +
            "|" +
            listStudent[i].name +
            "|" +
            listStudent[i].email +
            "</div>"
        );
      }
    },
    addStudent: function (id, name, email) {
      var item = {
        id: id,
        name: name,
        email: email
      };
      this.data.push(item);
    },
    removeStudent: function (id) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].id === id) {
          this.data.splice(i, 1);
        }
      }
    },
    editStudent: function (id, name, email) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].id === id) {
          this.data[i].name = name;
          this.data[i].email = email;
        }
      }
    }
  };
  document.write("<h4>Danh sách sinh viên ban đầu</h4>");
  Student.viewStudent();
  
  document.write("<h4>Danh sách sinh viên sau khi thêm ba sinh viên</h4>");
  Student.addStudent("sv001", "a", "a@gmail.com");
  Student.addStudent("sv002", "n", "n@gmail.com");
  Student.addStudent("sv003", "c", "c@gmail.com");
  Student.viewStudent();
  
  document.write("<h4>Danh sách sinh viên sau khi xóa một sinh viên</h4>");
  Student.removeStudent("sv001");
  Student.viewStudent();
  
  document.write("<h4>Danh sách sinh viên sau khi sửa thông tin</h4>");
  Student.editStudent("sv002", "abc", "abc@gmail.com");
  Student.viewStudent();