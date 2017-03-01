var s = document.getElementById("svg");

var prevX = -1;
var prevY = -1;

var drawDot = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    s.appendChild(c);
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "25");
    c.setAttribute("fill", "black");    

    if (prevX != -1 && prevY != -1) {	
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	s.appendChild(l);
	l.setAttribute("x1", prevX);
	l.setAttribute("y1", prevY);
	l.setAttribute("x2", x);
	l.setAttribute("y2", y);
	l.setAttribute("style", "stroke:black;stroke-width:2");
    }

    prevX = x;
    prevY = y;
}

s.addEventListener("click", drawDot);
