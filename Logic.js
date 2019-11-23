// JS functions
    // 1 - start page
        // on click
            // start timer
            // clear screen
            // load first question
    // 2 - questions
        // on click
            // display correct - wrong
            // calculate score
            // store score
            // load next question
    // 3 - results
        // in put initial
            // on click save initials & score, client side
    // 4 - highscore
        // on click
            // clear scores from client side
            // start again

// ------------------------------//
// variables
    var start = document.getElementById("start");
    var startPage = document.getElementById("start-page");
    var qPage = document.getElementById("questions");
    var qTextel = document.getElementById("question-title");
    var choicesTextel = document.getElementById("choices");
// Start Page:
    //On clicking start quiz  
    start.addEventListener("click", function (){
        //hide start page
        startPage.style.display="none";
        //todo - start timer!!!!!!!!!!!!!
        //invoke function to show questions
        showQs();
    })

//Questions page
    //function to display questions
    function showQs(){
    qPage.style.display="visible";
    for(var i=0; i<questions.length;i++){
    qTextel.textContent = questions.title;
    //title undefined??
    console.log("the question is " + questions.title);

    
    
    }
    }