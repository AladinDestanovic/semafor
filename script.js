let turnOnRedTimeout;
function turnOnRed() {
    document.getElementById("crveno").style.backgroundColor = "red";
    document.getElementById("zuto").style.backgroundColor = "transparent";
    document.getElementById("zeleno").style.backgroundColor = "transparent";
    turnOnRedTimeout = setTimeout(function () {
      turnOnYellowAndRed();
    }, 5 * 1000);

function turnOnYellowAndRed(){
    document.getElementById("crveno").style.backgroundColor = "red";
    document.getElementById("zuto").style.backgroundColor = "yellow";
    document.getElementById("zeleno").style.backgroundColor = "transparent";
    setTimeout(function () {
     turnOnYellow ();
    },  1000);

}
function turnOnYellow (){
    document.getElementById("crveno").style.backgroundColor = "transparent";
    document.getElementById("zuto").style.backgroundColor = "yellow";
    document.getElementById("zeleno").style.backgroundColor = "transparent";
    setTimeout(function () {
      turnOnGreen();
    }, 2 * 1000);
}

function turnOnGreen(){
    document.getElementById("crveno").style.backgroundColor = "transparent";
    document.getElementById("zuto").style.backgroundColor = "transparent";
    document.getElementById("zeleno").style.backgroundColor = "green";
    setTimeout(function () {
      turnOnRed();
    }, 5 * 1000);

}
  } turnOnRed()

  document.getElementById("break").addEventListener('click', function stops (){
    clearTimeout(turnOnRedTimeout)
       ukljuciPlavo()
}

)

    function ukljuciPlavo(){
        document.getElementById("crveno").style.backgroundColor = "blue";
        document.getElementById("zuto").style.backgroundColor = "transparent";
        document.getElementById("zeleno").style.backgroundColor = "transparent";
        setTimeout(function () {
          ukljuciCrveno();
        },   1000);
    
        function ukljuciCrveno(){

            document.getElementById("crveno").style.backgroundColor = "transparent";
            document.getElementById("zuto").style.backgroundColor = "red";
            document.getElementById("zeleno").style.backgroundColor = "transparent";
            setTimeout(function () {
              ukljuciZuto();
            },  1000);
        }

        function ukljuciZuto(){

            document.getElementById("crveno").style.backgroundColor = "transparent";
            document.getElementById("zuto").style.backgroundColor = "transparent";
            document.getElementById("zeleno").style.backgroundColor = "yellow";
            setTimeout(function () {
              ukljuciPlavo();
            },  1000);
        }


    } 


    function getFormatted(num) {
        if (num < 10) {
          return "0" + num;
        } else {
          return num;
        }
      }
      
      function showDateAndTime() {
        const date = new Date();
        const dateToShow =
          getFormatted(date.getDate()) +
          "/" +
          getFormatted(date.getMonth() + 1) +
          "/" +
          date.getFullYear();
        const timeToShow =
          getFormatted(date.getHours()) +
          ":" +
          getFormatted(date.getMinutes()) +
          ":" +
          getFormatted(date.getSeconds());
        document.getElementById("time").textContent = timeToShow;
        document.getElementById("date").textContent = dateToShow;
      }
      
      showDateAndTime();
      setInterval(showDateAndTime, 1000);