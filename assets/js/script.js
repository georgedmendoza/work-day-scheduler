var index = 9;

//var for todays date
var todaysDate = moment().toDate()
//select element from index file and append date
$("#currentDay").append(todaysDate);

var timeHour = moment().format('HH');
console.log(timeHour);
console.log(typeof timeHour);
//convert time from str to int/number
var newTime = parseInt(timeHour)
console.log(newTime);
console.log(typeof newTime);

var timeSet = $("#timeSet").text().trim();
console.log(timeSet);

// for(var i=0; i<9; i++){
//     // console.log(index)
//     // console.log(typeof index)
//     if(newTime<index){
//         $("#comment").addClass("past")
        
//     };
//     if(newTime>index){
//         $("#comment").addClass("future")
        
//     };
//     index++;

// }