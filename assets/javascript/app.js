// need to create a start button for the user to hit and then the page will reveal the timer and the questions


//  Variable that will hold our interval ID when we execute
    //  the "run" function
var intervalId;
var clockRunning = false;
var time = 30;

$(".clock-display").text("00:00");

window.onload = function(){
    $("#start-button").on("click",startGame);
    $('#start-button').on("click",startTimer);
    return hideQuestions();
    
}
function showQuestions(){
    $('.question').show();
    $('.clock-display').show();
}
function hideQuestions(){
    $('.question').hide();
    $('.clock-display').hide();
}
function startGame() {
    $('#start-container').hide();
    console.log("timer has been started and game has been started")
    return showQuestions();
 
}

//when start button is clicked it will call the start timer fucntion


function startTimer(){
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
      }
    console.log("i have been clicked and running this fucntiion");
    return decrement();

    
}

function decrement(){
    time--;
    $(".clock-display").text("Seconds Left: " + time);
}

//create where when you start game it starts the timer and need to creat a fucntion that will run the timer

// create a timer when the page loads so the user knows how much time he has left to answer the questions given



//need to create logic when the timer ends that the user is alerted that the time is up and that its time to check the answers


//need to make sure this is a way that the user only gets to answere one option


// when the timer ends the page will need to transition to a new window or section or some hidden content that will only show when the timer ends and will show the user how many answers hes gotten correct or incorrect