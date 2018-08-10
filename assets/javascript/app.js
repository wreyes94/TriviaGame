
function countDown() {
    var count = 30;
    var interval = setInterval(function () {
            document.getElementById('count').innerHTML = ("Time remaining: ") + count;
            count--;
            if (count === 0) {
                clearInterval(interval);
                document.getElementById('count').innerHTML = 'Done';
                count = 0;
                submitQuiz();
            }
    }, 1000);
    }

function nextPage() {
    var first = document.getElementById("front-page");
    var second = document.getElementById("second-page");
    if (first.style.display === "none") {
        first.style.display = "block";
    } else {
        first.style.display = "none";
        second.style.display = "block";
    }
    countDown();
}
function submitQuiz() {
    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);
        for (var i = 0, length = radiosNo.length; i < length; i++) {
            if (radiosNo[i].checked) {
                var answerValue = Number(radiosNo[i].value);
            }
        }
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')
        + answerScore('q5') + answerScore('q6'));
    var questionCountArray = document.getElementsByClassName('question');
    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    var showScore = "Your Score: " + calcScore +"/" + questionCounter;
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp;<strong>Perfect Score!</strong>"
    }
    document.getElementById('userScore').innerHTML = showScore;
}
$(document).ready(function() {
    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });
});