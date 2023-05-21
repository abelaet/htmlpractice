
// function findmax(){
//   let num1=parseInt(document.getElementById("num1").value );
//   let num2=parseInt(document.getElementById("num2").value );
//   let num3=parseInt(document.getElementById("num3").value );
//   let largest=Math.max(num1,num2,num3);
//   let smallest=Math.min(num1,num2,num3);

//   document.getElementById ("result").innerHTML="largest number is"+largest+ "<br> smallest number  is"+smallest;
// }
function minmax(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let num3=document.getElementById("num3").value;
    let min=num1
    let max=num1
    if(num2>num1 && num2>num3){
        max=num2
    }
    else if(num2<num1 && num3<num1 ){
        max=num1
    }
    else if(num3>num1 && num3>num2 ){
        max=num3
    }
     if (num3<num1 && num3<num2 ){
        min=num3
    }
    else if(num2>num1 && num3>num1){
        min=num1
    }
    else if(num2<num1 && num2<num3)
    min=num2

document.getElementById("result").innerHTML="largest number is"+max+ "<br> smallest number  is"+min;
// }

}
function getToday(){
    let day;
    switch (new Date().getDay()){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday"
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday"
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday"
            break;
        case 6:
            day="Saturday"
            break;          
    }
    document.getElementById("date").innerHTML="the day to day is "+day;
}
