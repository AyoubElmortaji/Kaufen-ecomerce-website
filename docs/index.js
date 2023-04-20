// js file for projet kaufen !!
// made by elmortaji ayoub !!
// js for menu

var MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight="0px";

function menutoggle(){
	if(MenuItems.style.maxHeight=="0px"){
		MenuItems.style.maxHeight="200px";
		
	}

	else{
		MenuItems.style.maxHeight="0px";
	}
}

window.addEventListener("load",() => {
const loader = document.querySelector(".loader");
loader.classList.add("loader-hidden");
loader.addEventListener("transitionend", () =>{
	document.body.removeChild("loader");
})
}
)




