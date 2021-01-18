// document.body.style.background = 'yellow';
// $('body').css("background","orange");

// var selectorClass = ".kvgmc6g5";
var posts = $('[role="article"]');
var facebookNameElement = $('div.j83agx80 h1.gmql0nx0');   var facebookNameElementHtml = facebookNameElement.html();
var displayIndividualPostsScore = true;


function addScoreButton() {
	
	
	// addScoreButton escapted
	
	var addScoreButton_Escaped = "var totalScore = 0;var posts = document.querySelectorAll('[role=\'article\']');";
	

	var head = $('head');
	head.innerHTML += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' id='secondJquery'></script>"
		
	var count = 0;
	var checkExist = setInterval(function() {
		console.log("JD: checking for element: " + (++count));
	   if ($('div.j83agx80 h1.gmql0nx0').length) {
		 console.log("JD: sentimental-instructions-link=" +  JSON.stringify($('#addScoreButton'),null,4));
		if( !$('#addScoreButton') || JSON.stringify($('#addScoreButton'),null,4) == "{}") {
			 var facebookNameElement = $('div.j83agx80 h1.gmql0nx0');   var facebookNameElementHtml = facebookNameElement.html();   
			console.log("JD: putting Score Button");
			var scoreMeButton =  "<span class='sentimental-instructions-link' id='addScoreButton'><a href='javascript:void(0)' onClick='" + addScoreButton_Escaped + "'>(get positivity score)</a></span>";;
			facebookNameElementHtml += scoreMeButton;
			facebookNameElement.html(facebookNameElementHtml); 
			console.log("JD: facebookNameElementHtml="+facebookNameElementHtml);
			
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';    
			document.getElementsByTagName('head')[0].appendChild(script);
		}
		
		clearInterval(checkExist);
	   }
	}, 500); // check every 100ms


}


function scorePostWithoutJquery() {
	cleanupPreviousMarkings();
	var totalScore = 0;
	var posts = document.querySelectorAll('[role=\'article\']');	
	posts.forEach((post) =>  {
		console.log('JD: analyzing post with post: ' + post);
		//var postsElement = button;
		var postText = post.textContent || post.innerText;
		var score = analyze(postText).score;
		totalScore += score;
		var postsHtml = post.innerHTML;
		var postsColor = getColor(score);
		score = getPlusMinus(score);    

		if(displayIndividualPostsScore){
			//if(!button.closest('.postsScore') && !button.closest('.postsScore').length) {
			if(!post.closest('.postsScore')) {	
				  var postsScoreDivHTML= "<div id='sentimentalId_postsScore' class='sentimentalScore' style='font-weight: bold; color:" + postsColor  + "'>" + score + "</div>";
				  var postsScoreDiv = document.createElement("div");
				  postsScoreDiv.innerHTML = postsScoreDivHTML;
				  console.log("JD: postsScoreDiv="+postsScoreDiv);
				  postsHtml += postsScoreDiv;
				  post.innerHTML = postsHtml;
				 post.prepend(postsScoreDiv);		  
			}
		}
	  });

	  // OVERALL SCORE

	var facebookNameElement2 = document.querySelectorAll("span.d2edcug0 h1.gmql0nx0");   
	console.log("JD: AAAA facebookNameElement2=" + JSON.stringify(facebookNameElement2[0].innerHTML, null, 4));

	  var totalScoreColor = getColor(totalScore);
	  totalScore = getPlusMinus(totalScore);
	  var existinTotalScoreDiv = document.getElementById("totalSentimentalScore");
	  console.log("JD: existinTotalScoreDiv=" + existinTotalScoreDiv);
	if(!existinTotalScoreDiv) {
		  var facebookNameScoreDivHTML = "<div id='totalSentimentalScore' class=\"sentimentalScore sentimentalTotalScore\" style='color:" + totalScoreColor  + "'>" + totalScore + "</div>"; 
		  var facebookNameScoreDiv = document.createElement("div");
		  facebookNameScoreDiv.innerHTML += facebookNameScoreDivHTML;
		  facebookNameElement2[0].append(facebookNameScoreDiv);
		  
	  }
}




function scorePosts() {
		console.log("JD: in scorePosts new");
		cleanupPreviousMarkings();
		addScoreButton();
		var facebookNameElement = $('div.j83agx80 h1.gmql0nx0');   var facebookNameElementHtml = facebookNameElement.html();
		console.log("JD facebookNameElement in scorePosts = " + facebookNameElementHtml);
	  // var posts = $('[data-testid="post_message"]');
	  
	  var totalScore = 0;

	  posts.each(function( index ) {
		console.log("JD: analyzing post with index: " + index);
		var postsElement = $( this );
		var score = analyze($( this ).text()).score;
		totalScore += score;
		var postsHtml = $( this ).html();
		var postsColor = getColor(score);
		score = getPlusMinus(score);    

		if(displayIndividualPostsScore){
			if(!postsElement.closest('.postsScore').length) {
			  var postsScoreDiv = "<div id='sentimentalId_postsScore' class='sentimentalScore' style='font-weight: bold; color:" + postsColor  + "'>" + score + "</div>";
			  // postsHtml += postsScoreDiv;
			  // postsElement.html(postsHtml);
			  postsElement.prepend(postsScoreDiv);		  
			}
		}
	  });

	  // OVERALL SCORE

	  var totalScoreColor = getColor(totalScore);
	  totalScore = getPlusMinus(totalScore);
	  var existinTotalScoreDiv = $('.totalSentimentalScore');
	  facebookNameScoreDiv = "<div id='totalSentimentalScore' class=\"sentimentalScore sentimentalTotalScore\" style='color:" + totalScoreColor  + "'>" + totalScore + "</div>";  
	  var facebookShareLink = '<a href="https://facebook.com/sharer.php?display=page&u=' + encodeURI('https://chrome.google.com/webstore/detail/positivity-analysis-for-f/fhmimomehgblpoecngfkcpbnmnfmpmpd') + '" target="_blank" class="sentimental-share-link">share</a>';
	  var instructionsLink = "<span class='sentimental-instructions-link'><a href='https://chrome.google.com/webstore/detail/positivity-analysis-for-f/fhmimomehgblpoecngfkcpbnmnfmpmpd' target='_blank'>(positivity score)</a></span>";
	  facebookNameElementHtml += facebookNameScoreDiv  + instructionsLink; 
	  facebookNameElement.html(facebookNameElementHtml);
	  
	// // FACEBOOK MARKINGS ADD
	// var ogMetaTag = '<meta property="og:type" content="website"><meta property="og:title" content="WHAT IS YOUR POSITIVITY SCORE?" />';
	// $('head').prepend(ogMetaTag);
	// facebookNameElementHtml += ogMetaTag;
	// facebookNameElement.html(facebookNameElementHtml);
	//
	// // FACEBOOK SHARE button
	// var url = encodeURI("https://www.facebook.com/ducky.duck.3597");
	// var facebookShareButton = '<a href="https://facebook.com/sharer.php?display=page&u=' + url + '" target="_blank"><button class="sentimental-facebook-share">Share this positivity</button></a>';
	// facebookNameElementHtml += facebookShareButton;
	// facebookNameElement.html(facebookNameElementHtml);


}

function getColor(score) {
  var color = "black";
  if(score > 0) {
    color = "green";
  } else if (score < 0) {
    color = "red";
  }
  return color;
}

function getPlusMinus(score) {
  if(score > 0) {
    score = "+" + score;
  }
  return score;
}

function cleanupPreviousMarkings() {
	var previousSentimentalScore =   $('.sentimentalScore');
	if(previousSentimentalScore) {
		previousSentimentalScore.remove();
	}
	/* var previousinstructionsLink =   $('.sentimental-instructions-link');
	if(previousinstructionsLink) {
		previousinstructionsLink.remove();
	} */
//	$('.sentimental-facebook-share').remove();
	console.log("JD: done cleanupPreviousMarkings()"); 
}
// var x = analyze("Hey you worthless scumbag");
// alert("JD: " + x.score);


// // script injection example
// var actualCode = "chrome.browserAction.onClicked.addListener(function(tab) {alert('working?');});";
// var script = document.createElement('script');
// script.textContent = actualCode;
// (document.head||document.documentElement).appendChild(script);
// script.parentNode.removeChild(script);

// // icon clicked example
// chrome.browserAction.onClicked.addListener(function(tab) {
//     alert('working?');
// });
