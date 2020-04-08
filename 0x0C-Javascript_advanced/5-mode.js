function changeMode(size, weight, transform, background, color) {
	return function() {
      		document.body.style.fontSize = size;
			document.body.style.fontWeight = weight;
			document.body.style.textTransform = transform;
			document.body.style.background = background;
			document.body.style.color = color;
    }

};

function main(){
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    var body = document.body;
    var newP = document.createElement("p"); 
    var newContent = document.createTextNode("Welcome Holberton!"); 
    newP.appendChild(newContent);
    document.body.appendChild(newP);


    var btnSpooky = document.createElement("BUTTON");
    btnSpooky.setAttribute("class", "spooky");
    btnSpooky.innerHTML = "Spooky";
    document.body.appendChild(btnSpooky);

    var btnDark = document.createElement("BUTTON");
    btnDark.setAttribute("class", "dark");
    btnDark.innerHTML = "Dark mode";
    document.body.appendChild(btnDark);

    var btnScream = document.createElement("BUTTON");
    btnScream.setAttribute("class", "scream");
    btnScream.innerHTML = "Scream mode";
    document.body.appendChild(btnScream);

    document.addEventListener('click', function (event) {

        if (event.target.matches('.spooky')) {
            spooky();
        }
        else if(event.target.matches('.dark')) {
            darkMode();
        }
        else if(event.target.matches('.scream')) {
            screamMode();
        }


    }, false);
}

main();