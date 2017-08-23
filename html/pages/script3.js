
/*Creating an array to hold the images*/

var imgslide = new Array();
	imgslide[0] = new Image();
	imgslide[0].src = "images/img4.jpg";
	imgslide[1] = new Image();
	imgslide[1].src = "images/img5.jpg";
	imgslide[2] = new Image();
	imgslide[2].src = "images/img6.jpg";

	
/*Creating a variable i set to 0 to start the slide*/
var i = 0;


/*Creating a function called Slide*/
function Slide()

{

/*Creating a function called Slide*/

/*Creating a variable called img which is set to get the element by Id slide*/
	var img = document.getElementById("slide");
	
/*Setting img.src to the array imgslide numbered by the variable i*/
	img.src = imgslide[i].src;

	
	
/*Creating an if statement to move the slider*/

/*if i (the count) is less than 2 increase it by 1*/
	if(i < 2)
	{
		i++;
	}
	
/*otherwise set i(the count) to 0*/
	else
	{
		i = 0;
	}

/*setting Timeout to fade every 4 seconds*/	
	setTimeout("Fade()", 4000);
	
/*setting Timeout to change the picture every 4 seconds*/	
	setTimeout("Slide()", 6000);
	
/*Resetting the slider*/
	Reset();
}


/*Creating a function called Reset*/
function Reset()
{
	var img = document.getElementById("slide");
	var imgstyle = img.style;
	imgstyle.visibility = "visible";
 	imgstyle.opacity = "1";
}


/*Creating a function called Fade*/
function Fade()
{
	var img = document.getElementById("slide");
	var imgstyle = img.style;
	
	imgstyle.visibility= "hidden";
	imgstyle.opacity = "0";
	imgstyle.transition = "visibility 0s 2s, opacity 2s linear";
}

Slide()
