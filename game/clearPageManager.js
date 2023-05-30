function nextStageAddListener() {
    
    let resultString =
        "<br><br>Score : " + currentStage.score + "<br><br><br>Time :" + currentStage.timeLeft;
    currentStage.score += currentStage.timeLeft * 10;
    resultString +=
        "<br><br><br>TotalScore : " +
        currentStage.score +
        " + " +
        currentStage.timeLeft +
        " * 10 = " +
        currentStage.score + "<br><br><br>";
    $("#result").html(resultString);
    // if((stage.currentStage + 2) == 4){
    //     $("#nextButton").on("click", allClear);
    // }
    $("#nextButton").on(
        "click",
        { stageNum: stage.currentStage + 2, score: currentStage.score },
        loadStage
    );
}

function allClear(){
    $("gameClear").fadeOut(2000);
    $("gameAllClear").delay(3000).fadeIn(2000);
}
