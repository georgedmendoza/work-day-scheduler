//index to start count at the beggining of the time block
var hourText = 9;
var containerEl = document.getElementById("cont");
//todays date
var todaysDate = moment().toDate()
//select element from index file and append date
$("#currentDay").append(todaysDate);

//get the hour at this exact moment
var timeHour = moment().format('HH');
//convert time from str to int/number
timeHour = parseInt(timeHour)

//select all textareas
var timeSet = $(".description")

//for .each .description do something
$(".container").find(timeSet).each(function(){
    //conditional statement to change and add classes 
    if(hourText<timeHour){
        $(this).removeClass("future")  
        $(this).removeClass("present")  
        $(this).addClass("past")  
    };
    if(hourText>timeHour){
        $(this).removeClass("present")  
        $(this).removeClass("past")  
        $(this).addClass("future")  
    };
    if(hourText === timeHour) {
        $(this).removeClass("future")
        $(this).removeClass("past")
        $(this).addClass("present")
    };
//increase count until it no longer satisfies condiditional statements
hourText++;
// console.log($(this));
});

//function to save tasks to localStorage
var saveTasks = function(textValue) {
    //verify different properties of textValue
    console.log(textValue);
    console.log(textValue.value);
    console.log(textValue.id);
    //store right properties into localStorage
    localStorage.setItem(textValue.id, textValue.value);
};

//function to load the tasks saved
var loadTasks = function() {
/*save and load each task/comment.textContent its designated location by using unique Ids
    document.getElementById("9").textContent = localStorage.getItem("9");
    document.getElementById("10").textContent = localStorage.getItem("10");
    document.getElementById("11").textContent = localStorage.getItem("11");
    document.getElementById("12").textContent = localStorage.getItem("12");
    document.getElementById("13").textContent = localStorage.getItem("13");
    document.getElementById("14").textContent = localStorage.getItem("14");
    document.getElementById("15").textContent = localStorage.getItem("15");
    document.getElementById("16").textContent = localStorage.getItem("16");
    document.getElementById("17").textContent = localStorage.getItem("17");
*/
//refactor code above to change id by incrementing id using index i starting at value 9
    for (var i=9; i<18; i++) {
        document.getElementById(i).textContent = localStorage.getItem(i);
    };
};

//click event for each save button
$(".saveBtn").click(function(){
    //verify that 'this' exact button is being clicked
    console.log(this);
    //use previousEmentSibling to select text area
    console.log(this.previousElementSibling);
    //pass argument to select the text area
     saveTasks(this.previousElementSibling);
});
//run function
loadTasks();
