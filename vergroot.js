var inzoom = document.querySelector('.click');
var foto  = document.querySelector('.afbeelding');

inzoom.addEventListener('click', function(){
				console.log('clickhand');
        foto.classList.toggle('vergoot');
});

// bron: Niels Evers voor de href
foto.addEventListener('click', function(){
				console.log('naar aarsmanssite');
    location.href = "https://www.volkskrant.nl/kijkverder/2014/AarsmanCollectie/#190501";
});
