function submitQuiz() {
    let total = 5;
    let score = 0;
    let q1 = document.forms["quiz"]["Q1"].value;
    let q2 = document.forms["quiz"]["Q2"].value;
    let q3 = document.forms["quiz"]["Q3"].value;
    let q4 = document.forms["quiz"]["Q4"].value;
    let q5 = document.forms["quiz"]["Q5"].value;

    //validation

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == "") {
            alert('You missesd Question' + " " + i);
            return false;
        }

    }

    // Correct Answers
    let answers = ["p", "hyper-text", "mozilla", "h1", "br"];

    // Check Answers
    for(i = 1; i <= total; i++){
       for(j = 0; j < total; j++){
        if(eval('q'+ i ) == answers[j]){
            score++;
        }
       }
    }

alert(' you scored ' + score + ' out of ' + total);

}
