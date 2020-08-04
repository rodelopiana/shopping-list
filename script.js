var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var del = ul.getElementsByTagName("button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var btn = li.appendChild(document.createElement("button"));

	ul.appendChild(li);

	li.addEventListener("click",markDone);
	btn.addEventListener("click",deleteItem);
	btn.innerHTML = "x";
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



function markDone(e){
	e.target.classList.toggle("done");
}

function deleteItem(e){
	e.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(var i = 0; i < items.length; i++){
	items[i].addEventListener("click",markDone);
	items[i].appendChild(document.createElement("button"));
	del[i].addEventListener("click",deleteItem);
	del[i].innerHTML = "x";
}
