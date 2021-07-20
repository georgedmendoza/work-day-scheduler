//index to start count at the beggining of the time block
var hourText = 9;

//var for todays date
var todaysDate = moment().toDate()
//select element from index file and append date
$("#currentDay").append(todaysDate);

var timeHour = moment().format('HH');
//convert time from str to int/number
var newTime = parseInt(timeHour)
console.log(newTime);
console.log(typeof newTime);

var time = $("#timeSet");
var timeSet = $(".description")

//for .each it has to be a class that is selected 
$(timeSet).each(function(){

    //conditional statement to change and add classes 
    if(hourText<newTime){
        $(this).removeClass("future")  
        $(this).removeClass("present")  
        $(this).addClass("past")  
    };
    if(hourText>newTime){
        $(this).removeClass("present")  
        $(this).removeClass("past")  
        $(this).addClass("future")  
    };
    if(hourText === newTime) {
        $(this).removeClass("future")
        $(this).removeClass("past")
        $(this).addClass("present")
    };
    

hourText++;
console.log($(this));

});
