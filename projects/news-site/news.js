let butx = document.querySelector('.but-x')
let btn=document.querySelector('.btn');
let menu =document.querySelector(".wor-menu");
btn.addEventListener('click', clicklak)
btn.addEventListener('clickx', clicklak)
function clicklak(e){
	document.querySelector(".but-x").style.display = "flex";
	menu.classList.toggle("show");
	document.querySelector('.btn')
	btn.classList.toggle("hoverr");
	e.stopPropagation()
}

// document.addEventListener("click", function(){
// 	menu.classList.remove('show');
// 	document.querySelector(".but-x").style.display = "none";
// })

// document.addEventListener("clickx", function(){
// 	menu.classList.remove('show');
// 	document.querySelector(".but-x").style.display = "none";
// })
document.querySelector('.wor-menu').addEventListener('mouseover',function(){
        document.querySelector('.show').style.display = 'flex';
    });
document.querySelector('.wor-menu').addEventListener("mouseout", function(){
	menu.classList.remove("show");
	document.querySelector(".but-x").style.display = "none";
	btn.classList.toggle("hoverr");
})
