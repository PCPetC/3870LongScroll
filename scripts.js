//timer
console.time();


var canvas = document.getElementById("canvas");
var beams = document.getElementById("beams");
var y = window.pageYOffset;

var whoah = document.getElementById("whoah");
whoah.style.cssText = 'display:none;position:absolute;top:300px;left:0px;z-index:1;';

window.onscroll = function(){


  var y = window.pageYOffset;

  if(y - 4300>0)
	{
		whoah.style.display = "block";
	}
	else
	{
		whoah.style.display = "none";
	}

  console.log;

	whoah.style.left = y - 4300 + 'px';
	whoah.style.top = (y + 300) + 'px';
//
//   beam1.style.top = 1000 + y * -2 + "px";
//   beam2.style.top = 2000 + y * -1.5 + "px";
//   beam3.style.top = 3000 + y * -1.5 + "px";
//   beam4.style.top = 4000 + y * -1.5 + "px";
//   beam5.style.top = 5000 + y * -1 + "px";
//   beam6.style.top = 6500 + y * -1.5 + "px";
//   beam7.style.top = 7000 + y * -.5 + "px";
//   beam8.style.top = 8000 + y * -.5 + "px";
//   beam9.style.top = 10000 + y * -.5 + "px";
//   beam10.style.top = 10500 + y * -.5 + "px";
//   beam11.style.top = 11000 + y * -1 + "px";
//
};

// random beam gen
// function moveBeam() {
//   var $spans = $(".beam");
//
//   $spans.each(function(){
//     var _this = $(this);
//
//     _this.fadeOut(500, function() {
//       var maxLeft = $(window).width() - _this.width() - 10;
//       var maxTop = $(window).height() - _this.height() - 10;
//       var leftPos = Math.floor(Math.random() * (maxLeft + 10))
//       var topPos = Math.floor(Math.random() * (maxTop + 10))
//
//       _this.css({ left: leftPos, top: topPos }).fadeIn(100);
//       console.log(leftPos,topPos);
//     });
//   });
// };
//
// moveBeam();
// setInterval(moveBeam, 1000);

setInterval(myFunction, 1000);
	function myFunction() {
		var beam = document.createElement("img");
		var dist = Math.floor((Math.random() * 50) + 1);
		beam.style.cssText = 'position:absolute;top:-300px;left:0px;z-index:-1;';
		// beam.style.filter = "brightness(" + (dist+50) + "%)";
		beam.style.filter = "opacity(" + (dist+50) + "%)";
		beam.setAttribute("height", dist*6);
		beam.setAttribute("src", "img/beam_scale.svg");
		beam.setAttribute("width", dist);
		var Xpos = Math.floor((Math.random() * document.documentElement.clientWidth) - 19) + "px";
		beam.style.left = Xpos;
		document.body.appendChild(beam);
		var pos = -300;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos >= document.documentElement.clientHeight ||
				Xpos > document.documentElement.clientWidth) {
				beam.remove();
			} else {
				pos++;
				beam.style.top = (pos*10) + 'px';
			}
		}
		setTimeout(function(){ beam.remove(); }, 60000);
	}
