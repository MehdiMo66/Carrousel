const Img = document.querySelector(".banner-img")




const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



function GetImageFromRight (){
	console.log(`ClickDroit`) ;
	index++ ;
	if (index===4){
		index=0
	}
	DisplayIndex()
}

let index=0


function DisplayIndex () {
	Img.setAttribute('src', `./assets/images/slideshow/${slides[index].image}`)
	console.log(slides[index].image)
}

function GetImageFromLeft(){
	console.log(`ClickGauche`)
	index--; 
	if (index===-1){
		index=3
	}
	DisplayIndex()
}

let flecheGauche = document.querySelector('#banner .arrow_left')
flecheGauche.addEventListener('click', (event) => {
	GetImageFromLeft()

})

let flecheDroite = document.querySelector('#banner .arrow_right')
flecheDroite.addEventListener('click', (event) => {
	GetImageFromRight()
})


