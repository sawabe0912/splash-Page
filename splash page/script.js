const changeBtns = document.querySelectorAll(".change");
const {body} = document;

function changebackground1(){
	body.className = "";
	document.body.classList.add("backG1");
}

function changebackground2(){
	body.className = "";
    document.body.classList.add("backG2");
}


function changebackground3(){
	body.className = "";
    document.body.classList.add("backG3");
}


//addEventListener

changeBtns.forEach((changeBtn) => {
	if(changeBtn.classList.contains("change1")){
		changeBtn.addEventListener("click", () => changebackground1());
	}else if(changeBtn.classList.contains("change2")){
		changeBtn.addEventListener("click", () => changebackground2());
	}else if(changeBtn.classList.contains("change3")){
		changeBtn.addEventListener("click", () => changebackground3());
	}
});



 
  	
 
  