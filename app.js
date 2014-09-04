/*var answer = {
	question: ["Who won the world cup in 2002", "Where was the world cup held in 1998"]
	answers: ["Germany", ]
	answer: []

}

*/



function Quiz(question, a, b, c, d){
	this.question = question;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
}

var q2 = new Quiz("Where was world cup held in 1998?", "Munich", "Madrid", "Tokyo", "Paris");

var q3 = new Quiz("Who won Golden Ball in 2006?", "Zinedine Zidane", "Ronaldo", "Ronaldhino", "Maradona");

var q4 = new Quiz("Who is the top scorer of World Cup 2014?", "Neymar", "Muller", "Klose", "Messi");

var q5 = new Quiz("Who is the best footballer of all time", "Zinedine Zidane", "Pele", "Messi", "Maradona");

var array = [q2, q3, q4, q5]

function Nextq(){
		var qnumber = + $('#qnum').text();
		$("#question").html(array[qnumber -1].question);
		$("label[for=r1]").html(array[qnumber -1].a);
		$("#A").val(array[qnumber -1].a);
		$("label[for=r2]").html(array[qnumber -1].b);
		$("#B").val(array[qnumber -1].a);
		$("label[for=r3]").html(array[qnumber -1].c);
		$("#C").val(array[qnumber -1].a);
		$("label[for=r4]").html(array[qnumber -1].d);
		$("#D").val(array[qnumber -1].a);
		$('#qnum').text(qnumber + 1);
		$('#next').hide();
		
}

var answers = ["Germany", q2.a, q3.a, q4.b, q5.d]

function Submit() {
	var qnumber = + $('#qnum').text();
	var addscore = + $('.correctscore').text();
	var wrongscore = + $('.wrongscore').text();
	if ($('input[name="radios"]:checked').val() == answers[qnumber -1]) {
		$('.flag').text("Correct");
		$('.correctscore').text(addscore + 1);
	}
	else {
		$('.flag').text("Wrong!");
		$('.wrongscore').text(wrongscore + 1);
	}
	$('#next').show();
	if (qnumber == 5) {
		$('.flag').text('Your score is ' + addscore);
	}
	
}

$(document).ready(function(){
	
	$('.submit').click(function(){
		Submit();
	});

	$('#next').click(function(){
		Nextq();
	});



})