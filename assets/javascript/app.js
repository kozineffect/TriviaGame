var quiz = [
	{

		question:"What is Undertaker's real name?",
		answers: ["Mark Callaway", "John Paul Levesque", "Mick Foley", "Phil Brooks"],
		correct_index: 0,

	},


	{
		question:"Dude Love, Mankind, and Cactus Jack are all alter egos of which wrestler?",
		answers: ["Stone Cold Steve Austin", "Stevie Richards", "Al Snow", "Mick Foley"],
		correct_index: 3,

	},

	{
		question:"What does the CM in CM Punk stand for?",
		answers: ["Cur Mudgeon", "Chick Magnet", "Crazy Madman", "Crow More"],
		correct_index: 1,	
	},

	{
		question:"Triple H, Shawn Michaels, and Chyna are the founding members of which faction?",
		answers: ["DeGeneration-X", "New World Order", "Evolution", "Nation of Domination"],
		correct_index: 0,
	}];

	var capture, i=0, number=25, intervalId, right=0, wrong=0;


window.onload = function() {

		load_text(i);
		
  		$("#button1, #button2, #button3, #button4").click(function(){

       	capture = $(this).val();
       	stop();

    	if (capture==quiz[i].correct_index) 
    		{
    			alert("Correct!");
    			i++;
    			right++;
    			$("#question").empty();
    			$("#ans_1, #ans_2, #ans_3, #ans_4").empty();
    			load_text(i);
    		}
    	
    	else{
    			alert("Wrong!");
    			i++;
    			wrong++;
    			$("#question").empty();
    			$("#ans_1, #ans_2, #ans_3, #ans_4").empty();
				load_text(i);    		
			}
    	});



};

function load_text(i)
{	
	if(i===4)
  	{
  		alert("You got " + right + " correct, and " + wrong + " wrong!");
  		stop();
  	}
	$("#question").html(quiz[i].question);
  	$("#ans_1").html(quiz[i].answers[0]);
  	$("#ans_2").html(quiz[i].answers[1]);
  	$("#ans_3").html(quiz[i].answers[2]);
  	$("#ans_4").html(quiz[i].answers[3]);
  	run();
}
  		
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#time").html(number);

      if (number === 0) {
      	alert("Time has run out!");
      	wrong++;
      	i++;
      	$("#question").empty();
    	$("#ans_1, #ans_2, #ans_3, #ans_4").empty();
      	load_text(i);
        stop();
      }
    }

    function stop() {
      clearInterval(intervalId);
      number=25;
    }
