var minheight = 0;
var maxheight = 550;
var time = 500;
var timer = null;
var toggled = false;
var inside = false;
var clic = false;

window.onload = function() {
	var controler = document.getElementById("slide");
    var controler_second = document;
    var slider = document.getElementById("slider");
    slider.style.display = "none";
    slider.style.height = minheight + "px";
    
	slider.onclick = function () {
		console.log("slider");
		clic = true;
		return false;
	}
    controler.onclick = function() {
		if (!(inside)){
			if (slider.style.display == "none")
				slider.style.display = "block";
			console.log("cic");
			clearInterval(timer);
			var instanceheight = parseInt(slider.style.height);
			var init = (new Date()).getTime();
			var height = (toggled = !toggled) ? maxheight: minheight;
			var disp = height - parseInt(slider.style.height);
			timer = setInterval(function() {
				
				var instance = (new Date()).getTime() - init;
				
				if(instance <= time ) {
					var pos = instanceheight + Math.floor(disp * instance / time);
					slider.style.height =  pos + "px";
				}
				else {
					slider.style.height = height + "px";
					if (height == minheight)
						slider.style.display = "none";
					clearInterval(timer);
				}
				inside = true;
			},1);
		}
		
    };
	controler_second.onclick = function() {
		console.log(inside+" "+clic);
		if ((!clic) && (inside)){
			slider.style.display = "block";
			console.log("ici");
		clearInterval(timer);
			var instanceheight = parseInt(slider.style.height);
			var init = (new Date()).getTime();
			var height = (toggled = !toggled) ? maxheight: minheight;
			var disp = height - parseInt(slider.style.height);
			timer = setInterval(function() {
				
				var instance = (new Date()).getTime() - init;
				
				if(instance <= time ) {
					var pos = instanceheight + Math.floor(disp * instance / time);
					slider.style.height =  pos + "px";
				}
					slider.style.height = height + "px";
					if (height == minheight)
						slider.style.display = "none";
					clearInterval(timer);
					inside = false;
			},1);
		}
	clic = false;
	};
}