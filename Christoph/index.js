// -------------------------------------Basic--------------------------------------
// var tempV1 = (start, range) => {
//     let temperature = Math.floor((Math.random() * range) + start);
//     while (temperature > range) {
//         temperature = Math.floor((Math.random() * range) + start);
//     }
//     if(temperature >= -5 && temperature <= 10) {
//         return "The weather is cold. (" + temperature + "°c)";
//     }else {
//         return "The weather is moderate. (" + temperature + "°c)";
//     }
// }
// console.log(tempV1(-5, 30));

// var ex_2 = arr => console.log(Math.max(...arr));
// var arr = [1, 7, -3, 9];
// ex_2(arr);

// var tempV1 = (start, range) => {
//     let temperature = Math.floor((Math.random() * range) + start);
//     while (temperature > range) {
//         temperature = Math.floor((Math.random() * range) + start);
//     }
//     if(temperature >= -5 && temperature <= 10) {
//         document.getElementById("weather").innerHTML = "<img src='img/cold.jpg' alt='cold' height='200px' width='200px'>";
//         return "The weather is cold. (" + temperature + "°c)";
//     }else if(temperature > 10 && temperature <= 25) {
//         document.getElementById("weather").innerHTML = "<img src='img/moderate.jpg' alt='moderate' height='200px' width='200px'>";
//         return "The weather is moderate. (" + temperature + "°c)";
//     }else if(temperature > 25 && temperature <= 31) {
//         document.getElementById("weather").innerHTML = "<img src='img/warm.jpg' alt='warm' height='200px' width='200px'>";
//         return "The weather is warm. (" + temperature + "°c)";
//     }else if(temperature > 31) {
//         document.getElementById("weather").innerHTML = "<img src='img/hot.jpg' alt='hot' height='200px' width='200px'>";
//         return "The weather is hot. (" + temperature + "°c)";
//     }
// }
// document.write(tempV1(-5, 50));
// -------------------------------------Intermediate--------------------------------------
var grade = (points) => {
    switch(points){
        case(points < 60):
            document.getElementById("grade").innerHTML = "F";
            break;
        case(points < 70):
            document.getElementById("grade").innerHTML = "D";
            break;
        case(points < 80):
            document.getElementById("grade").innerHTML = "C";
            break;
        case(points < 90):
            document.getElementById("grade").innerHTML = "B";
            break;
        case(points < 100):
            document.getElementById("grade").innerHTML = "A";
            break;
        default:
            document.getElementById("grade").innerHTML = "Not Found";
            break;
    }
}
grade(10);

// var avgGrade = grades => {
//     let sum = 0;
//     for(i = 0; i < grades.length; i++) {
//         sum += grades[i]; 
//     }
//     return sum / grades.length;
// }
// var grades = [76, 85, 65, 93, 81];
// console.log(avgGrade(grades));

// var fizzBuzz = () => {
//     for(i = 1; i <= 100; i++) {
//         if(i % 3 == 0 && i % 5 == 0) {
//             document.write("FizzBuzz" + "<br>");
//         }else if(i % 3 == 0) {
//             document.write("Fizz" + "<br>");
//         }else if(i % 5 == 0) {
//             document.write("Buzz" + "<br>");
//         }else {
//             document.write(i + "<br>");
//         }
//     }
// }
// fizzBuzz();

var stars = () => {
    for(i = 0; i < 6; i++) {
        p = 0;
        while(p <= i) {
            document.write("*");
            p++;
        }
        document.write("<br><br>");
    }
}
stars();
// -------------------------------------Challenge--------------------------------------

