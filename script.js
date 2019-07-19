function submitQuiz() {
    let total = 5;
    let score = 0;
    let q1 = document.forms["quiz"]["Q1"].value;
    let q2 = document.forms["quiz"]["Q2"].value;
    let q3 = document.forms["quiz"]["Q3"].value;
    let q4 = document.forms["quiz"]["Q4"].value;
    let q5 = document.forms["quiz"]["Q5"].value;

    //validation

    for(i = 1; i <= total; i++){
        if(q + i == ""){
            alert("You have missed question + " i)s;
            return false;
        }
    
    }

    

}

