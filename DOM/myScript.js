

function button1() {
    document.getElementById("animate").style.opacity = 100;
    document.getElementById("carButton").style.opacity = 100;
    document.getElementById("test").innerHTML = "Indianapolis is home to the largest sporting venue in the world. Indianapolis Motor Speedway (IMS) holds 257,325 people in its grandstands.";
   }

function button2() {
    document.getElementById("test").innerHTML = "Indiana is dubbed <q>The Hoosier State</q>, even though no one knows what the word <q> Hoosier</q> means";
   }

function button3() {
    document.getElementById("test").innerHTML = "Indiana is not proud of the fact that it has to be a border state with Kentucky";
   }

 function button4() {
    document.getElementById("test").innerHTML = "Indiana is Jared's most favorite boring state!";
   }


   function guessingGame() {
    var x, text;
  
    // Get the value of the input field with id="guess"
    x = document.getElementById("guess").value;
  
   
    if ( x > 27 ) {
      text = "Too High!";
    }
    else if(x < 27)
    {
        text = "Too Low!"
    }
    
    else {
      text = "Correct!";
    }
    // put the text output in the innerHTML 
    document.getElementById("demo").innerHTML = text;
  }

//   Accordian

function accordionFunc() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
}

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 2);
  function frame() {
    if (pos >= 6000) {
      clearInterval(id);
    } else {
      pos = pos + 20; 
      elem.style.paddingLeft = pos + "px";
      
    }
  }
}

function playAudio() { 
  var x = document.getElementById("myAudio"); 
  x.play(); 
} 

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}