

function mealstracx(){
  location.href="meals/mealstracx.html"
}



var timerAudio = new Audio('alarm.mp3');

var classNames = ["play button", "pause button", "reset button", "check button", "delete button"];
var sources = ["https://img.icons8.com/material-sharp/24/000000/circled-play.png", "https://img.icons8.com/material-sharp/24/000000/circled-pause.png", "https://img.icons8.com/fluent-systems-filled/24/000000/replay.png", "https://img.icons8.com/metro/26/000000/checkmark.png", "https://img.icons8.com/metro/26/000000/trash.png"];


function timer(displayHours, displayMinutes, displaySeconds){
		if(displayHours.value=='0' && displayMinutes.value=='0' && displaySeconds.value=='0'){
			displayHours.value=0;
			displayMinutes.value=0;
			displaySeconds.value=0;
			timerAudio.play();
		}
		else if(displaySeconds.value!='0'){
		displaySeconds.value--;
		} else if(displayMinutes.value!='0' && displaySeconds.value=='0'){
			displaySeconds.value=59;
			displayMinutes.value--;
		} else if(displayHours.value!='0' && displayMinutes.value=='0' && displaySeconds.value=='0'){
			displaySeconds.value=59;
			displayMinutes.value=59;
			displayHours.value--;
		}
}
function disableAllButtons(play,pause,restart,complete){
	for(var i=0;i<play.length;i++){
		play[i].disabled=true;
		pause[i].disabled=true;
		restart[i].disabled=true;
		complete[i].disabled=true;
		play[i].style.opacity="0.4";
		pause[i].style.opacity="0.4";
		restart[i].style.opacity="0.4";
		complete[i].style.opacity="0.4";
	}
}
function undisableAllButtons(play,pause,restart,complete, taskElements){
	for(var i=0;i<play.length;i++){
		if(taskElements[i].className!="task cross"){
			play[i].disabled=false;
			pause[i].disabled=false;
			restart[i].disabled=false;
			complete[i].disabled=false;
			play[i].style.opacity="1";
			pause[i].style.opacity="1";
			restart[i].style.opacity="1";
			complete[i].style.opacity="1";
		} else{
			complete[i].disabled=false;
			complete[i].style.opacity="1";
		}
	}
}
function disableElementButtons(buttons){
	for(var i=0;i<buttons.length-1;i++){
		buttons[i].disabled=true;
		buttons[i].style.opacity="0.4";
	}
}
function isAudioPlaying(audio){
	if(audio.paused===false){
		return true;
	}
	else{
		return false;
	}
}

function addTask(){
	var hours = document.getElementById("hours").value;
	var minutes = document.getElementById("minutes").value;
	var name = document.getElementById("name").value;

	if(!name){
		alert("Please enter a name for the task");
	}
	else{

		if(hours=='0' && minutes=='0'){
		alert("Please enter the time you want to spend on this task.");
		}
		else{
	var btnContainer = document.createElement("div");
	var buttonArray = [];
	var iconArray = [];
	var test="if";
	var testArray = [test];
	for(var i=0;i<5;i++){
		iconArray[i] = document.createElement("IMG");
		iconArray[i].setAttribute("src", sources[i]);
		iconArray[i].setAttribute("width", "30px");
		buttonArray[i] = document.createElement("button");
		buttonArray[i].className=classNames[i];
		buttonArray[i].appendChild(iconArray[i]);
		btnContainer.appendChild(buttonArray[i]);
	}

	var name_txt=document.createTextNode(name);
	var name_P=document.createElement("p");
	name_P.appendChild(name_txt);

	var time_txt=document.createTextNode(hours + " hours " + minutes + " minutes");
	var time_P=document.createElement("p");
	time_P.appendChild(time_txt);

	var infoContainer = document.createElement("div");
	infoContainer.className="task-info";
	infoContainer.appendChild(name_P);
	infoContainer.appendChild(time_P);

	var new_task = document.createElement("div");
	new_task.className="task";
	new_task.style.opacity="1";
	new_task.appendChild(infoContainer);
	new_task.appendChild(btnContainer);

			var displayHours=document.getElementById("display_hours");
			var displayMinutes=document.getElementById("display_minutes");
			var displaySeconds=document.getElementById("display_seconds");
			var startTimer = null;
		if(displayHours.value=='0' && displayMinutes.value=='0' && displaySeconds.value=='0'){
    			if(isAudioPlaying(timerAudio)){
    				disableElementButtons(buttonArray);
    			}
    			else{
    				buttonArray[0].disabled=false;

    			}
    		}else{
    			disableElementButtons(buttonArray);
    		}

	document.getElementById("print").appendChild(new_task);

	document.getElementById("hours").value="0";
	document.getElementById("minutes").value="0";
	document.getElementById("name").value="";

var playBtns = document.getElementsByClassName("play button");
var pauseBtns = document.getElementsByClassName("pause button");
var restartBtns = document.getElementsByClassName("reset button");
var checkBtns = document.getElementsByClassName("check button");
var taskElements = document.getElementsByClassName("task");

	buttonArray[3].addEventListener('click', function(){
		if (new_task.style.opacity=="1"){
		new_task.style.opacity="0.4";
		new_task.className+=" cross";
		undisableAllButtons(playBtns, pauseBtns, restartBtns, checkBtns, taskElements);
			for(var i=0;i<=2;i++){
				buttonArray[i].disabled=true;
				buttonArray[i].style.opacity="0.4";
			}
		} else{
			new_task.style.opacity="1";
			new_task.className="task";
			for(var i=0;i<=2;i++){
				buttonArray[i].disabled=false;
				buttonArray[i].style.opacity="1";
			}
		}
			displayHours.value='0';
			displayMinutes.value='0';
			displaySeconds.value='0';
			clearInterval(startTimer);

			timerAudio.pause();
	});
	buttonArray[4].addEventListener('click', function(){
					if(displaySeconds.value!='0' || displayMinutes.value!='0' || displayHours.value!='0'){
						if(buttonArray[1].disabled===false){
							displaySeconds.value='0';
							displayMinutes.value='0';
							displayHours.value='0';
								new_task.style.display="none";
							undisableAllButtons(playBtns, pauseBtns, restartBtns, checkBtns, taskElements);
							clearInterval(startTimer);
							timerAudio.pause();

						} else{
							new_task.style.display="none";
						}

					}
					else{
					undisableAllButtons(playBtns, pauseBtns, restartBtns, checkBtns, taskElements);
							clearInterval(startTimer);
							timerAudio.pause();
						new_task.style.display="none";
					}
	});




	buttonArray[0].addEventListener('click', function(){
		if(displayHours.value=='0' && displayMinutes.value=='0' && displaySeconds.value=='0'){
				displayHours.value=hours;
				displayMinutes.value=minutes;
				displaySeconds.value='0';
			}

		function startInterval(){

			startTimer = setInterval(function(){
				timer(displayHours, displayMinutes, displaySeconds);
			}, 1000);
		}
		startInterval();


		disableAllButtons(playBtns, pauseBtns, restartBtns, checkBtns);

		for(var i=1;i<=3;i++){
			buttonArray[i].disabled=false;
			buttonArray[i].style.opacity="1";
		}

	});


	buttonArray[1].addEventListener('click', function(){
		clearInterval(startTimer);
		timerAudio.pause();

		buttonArray[0].disabled=false;
		buttonArray[0].style.opacity="1";
	});


	buttonArray[2].addEventListener('click', function(){

		undisableAllButtons(playBtns, pauseBtns, restartBtns, checkBtns, taskElements);


		displayHours.value='0';
		displayMinutes.value='0';
		displaySeconds.value='0';
		clearInterval(startTimer);
		timerAudio.pause();
	});

		}

	}
}
