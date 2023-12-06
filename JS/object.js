// var username -> khai báo biến
// let username -> khai báo hằng
// const username = "hello" -> khai báo hằng phải truyền biến vào

// var domain = " ao ma canada ";

// var subdomain = "sizuka" + domain + "lazada.";
// var number = 20 + 10;
//document.write(subdomain)
//console.log(domain)
//document.write(number)
//confirm("Do you like me?"); // hiển thị popup
// var t = prompt("Nhập tên của bạn vào: ", '');
// alert(t);
// var a = 20;
// var b = 10;
// document.write(a == b)
// console.log(a == b)
// var t = parseInt(prompt("Nhập tên của bạn vào: "));
// var mod = t % 2;
// document.write(mod)
// console.log(t)
// switch(mod){
//     case 1:
//         document.write("Số chẵn");
//         break;
//     case 0:
//         document.write("Số lẻ");
//         break;
//     default:
//         document.write("No");
// }
    // var code = prompt('Nhập mã trái cây');
    // var mes = '';
    // switch(code){
    //     case '1':
    //         mes = "trái mận";
    //         break;
    //     case '2':
    //         mes = "trái mận 123112";
    //         break;
    //     case '3':
    //         mes = "trái mận bcd";
    //         break;
    //     default:
    //         mes = "Kh tìm thấy";  
    //     }
    //     document.write(mes);
    // var date = new Date();
    // var current_day = date.getDay();
    // document.write(current_day);


// function check_number(number){
//     if(number % 2 == 0 ){
//         document.write("Số chẵn");
//     }else{
//         document.write("Số lẻ");
//     }
// }
// check_number(1);
// check_number(2);
// check_number(3);
// check_number(4);


// function sum(a,b){
//     return a+b;
// }
// var a = 5;
// var b = 10;
// var ketqua = sum(a,b);
// document.write(ketqua);

// function showMess(message){
//     message = message || 'Không có tin nhắn <br/>';
//     document.write(message);
// }
// showMess();
// showMess("Hello ae");

// function name_of_function(number){
//     if(number %3 == 0  ){
//         return true;
//     }
//     return false;
// }
// var name_of_function = (number) => {
//         if(number %3 == 0  ){
//         return true;
//     }
//     return false;
// }
    // var check_nam_nhuan = (year) => {
    //     if((year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0){
    //         document.write("Năm nhuận")
    //     }else{
    //         document.write("Năm không nhuận")
    //     }
    // }
    // check_nam_nhuan(1200);

    // for(var i = 0; i <= 100; i++){
    //     if(i % 3 === 0){
    //         document.write('['+ i +'] </br>');
    //     }
    // }
    // var value = null;
    // while(value < 0 || value > 10){
    //     value = prompt("Nhập số từ 1 -> 10: ");
    // }
    // document.write("số vừa nhập = "+ value);
//     var Car = {
//     type : "Lexus",
//     model : "500",
//     color: "White",
//     "rank" : "SUV",
//     "-12.0" : "hello",
// };
// let rank = "rank";
// console.log(Car[rank]);
// console.log(Car.model);
// console.log(Car.type);
// console.log(Car.color);
// console.log(Car["rank"]);
// console.log("type" in Car) // kiểm tra thuộc tính type có trong Car không ?
// for(let prop in Car){
//     console.log(prop, ":", Car[prop]);
// }


// //cách 1
var Car={
    type : "",
    model : "",
    color : "",
    addCar : function{
        console.log("Hello 500 ae");
    }
}
// //cach 2:
// var Car = new Object();
// Car.model = "";
// Car.color = "";
// Car.type = "";
// Car.addCar = function(){
//     console.log("Hello 500 ae");
// }
// Car.deleteCar = function(){
//     console.log("Delete success.");
// }
//tổng hợp 2 thằng trên
// var car = {};
// Car.model = "";
// Car.color = "";
// Car.type = "";
// Car.addCar = function(){
//     console.log("Hello 500 ae");
// }
// nên dùng cách 1



var Car = {
    type : "Lexus",
    mode : "500",
    color: "White",
    "rank" : "SUV",
}
console.log(Car.model)
console.log(Car.type)
console.log(Car.color)
console.log(Car["Rank"])




//bt
var point = {
    x : 2,
    y : 3,
    ["z-index"] : 1000,
    sum : 0,
}
let zindex = "z-index";
point.sum = point.x + point.y + point[zindex];
console.log(point.x );
point.x = 1;
console.log(point.x );
console.log(point.y);
console.log(point[zindex]);
console.log(point.sum);
delete point.y
let x = {};
let y = x;
let z = {};
console.log(Object.is(x,y));
console.log(Object.is(x,z));


// baitap
function isPointEqual(p1,p2){
    for(let prop in p1){
        if(p1[prop] !== p2[prop]) return false;
    }
    for(let prop in p2){
        if(p2[prop] !== p1[prop]) return false;
    }   
    return true;
}
let point1 ={
    x : 1,
    y : 2,
}
let point2 ={
    x : 1,
    y : 2,
}
let point3 ={
    x : 2,
    y : 3,
}
console.log(isPointEqual(point2,point3));
console.log(isPointEqual(point1,point2));






//bài 1
var Dog = {
    name : "",
    chân : 0,
    color : "",
    age : 0,
    sua : function() { 
        console.log("Gâu gâu")
    },
}
console.log(Dog);
Dog.name = "Ki Ki";
Dog.chân = 4;
Dog.color = "red and yellow";
Dog.age = 5;
console.log("Name: "+ Dog.name +",Chân: "+ Dog.chân+",Color: "+ Dog.color+",Age: "+Dog.age);
Dog.sua();

Dog.Bree = "5";
console.log(Dog.Bree);


//bài 2

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
// Object.values(users).filter(users => users.isLoggedIn).length
// Object.values(users).filter(users => users.points >= 50).length
// Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
let count = 0
let login = 0
for(user in users)
{
    if(users[user].isLoggedIn)
    {
        login++
    }
    if(users[user].points >= 50)
    {
        count++;
    }
    const skills = users[user].skills
    if (skills.includes("MongoDB", "Express", "React", "Node") ) {
        console.log(`${user} have MERN STACK`)
    }
}
console.log(`${count} users have greater than equal to 50 points`)
console.log(`${login} users logged in`)





let p1 = {
    x : 1,
    y : 2,
    hello : {
        type : "hello1",
    }
};
// let p2 = {};
// Object.assign(p2,p1);
let p2 = { ...p1 }
    console.log(p2.hello.type)