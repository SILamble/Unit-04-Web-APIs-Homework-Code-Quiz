// questions stored as an array
// example: 
    // var questions = [
    //     {
    //     title: "Commonly used data types DO NOT include:",
    //     choices: ["strings", "booleans", "alerts", "numbers"],
    //     answer: "alerts"
    //     }

        var questions = [
        {
            title: "What two values does the boolean data type accept?",
            choices: ["up & down", "left & right", "true & false", "light & dark"],
            answer: "true & false"
        },
        {
            title: "Where var x = 50 and var y = 100 what does console.log(x+y) show?",
            choices: ["50 100", "150", "50000", "50 + 100"],
            answer: "150"
        },
        {
            title: "For loops consist of how many components?",
            choices: ["1", "2", "3", "4"],
            answer: "3"
        },
        {
            title: "What is a function?",
            choices: ["A block of code that can be reused", "a matrix of numbers", "a list of strings", "a job"],
            answer: "A block of code that can be reused"
        },
        {
            title: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        }
        ]

        // overall page variables
        var body = document.body;
        //variabes for h1 & h2 headers, buttons
        var h1El = document.createElement("h1");
        var h2El = document.createElement("h2");
        var bTn = document.createElement("button");
        var answer = document.createElement("h3");
        var lIst = document.createElement("li");
        // 1 - start page
            //text for start page
        h1El.textContent = "Coding Quiz Challenge";
        h2El.textContent = "Click start to try your hand at this coding quiz of mine";
        bTn.innerText = "Start";
            //add/append created text to body of page
        body.appendChild(h1El);
        body.appendChild(h2El);
        body.appendChild(bTn);
            //on click for pressing start button
        bTn.addEventListener("click", function buildQuiz(){
            //loop through question objects
            for(var i=0;i<questions.length;i++){
            //display question as the header
            h1El.textContent = questions[i].title;
            body.appendChild(h1El);
            //clear previous h2 element
            h2El.textContent = "";
            body.appendChild(h2El);
            //list possible answers
            lIst.textContent = questions[i].choices;
            body.appendChild(lIst);
                
        }});