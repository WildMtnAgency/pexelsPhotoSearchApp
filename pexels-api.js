var photoFeed = document.getElementById('photo-feed');
var searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(e){
	e.preventDefault();
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			var res = JSON.parse(xhttp.responseText);
			//JSON parses response text from api
			// console.log(res);
			//selects photos object from res and returns each photo | 0-14 | total 15
			var photoData = res.photos.map(function(photo){
				console.log(photo)

				return photo
			});

			//no pixabay photographer name function
			var photographerNameFn = function(name){
				if(name !== 'Pixabay'){
					return name;
				} else if(name === 'Pixabay'){
					var newName = 'Pixabay Photo';
					return newName;
				} else {
					return '';
				}
			};

			//capitalize photographer name function
			// var capitalizeNameFn = function(name){
			// 	var arrName = name.split('');
			// 	console.log(arrName);
			// };

			photoFeed.innerHTML = '';
			photoData.forEach(function(photo) {
				var photoDiv = document.createElement('div');
				var photographer = `${photo.photographer}`;
				photoDiv.classList.add('photo-div');
				photoDiv.innerHTML = `
						<div class="hide">
							<p id="photo-title" alt="Photo description">${photo.alt}</p>
							<a href="${photo.photographer_url}" target="_blank"><ion-icon id="like-icon" name="heart-outline"></ion-icon></a>
							<a href="${photo.photographer_url}" target="_blank"><p id="photographer-name" alt="Photographer name">${photographerNameFn(photographer)}</p></a>
							<a id="photo-link" href="${photo.url}" target="_blank" alt="See more photos from photos"><ion-icon name="open-outline" id="share-icon"></ion-icon></a>
						</div>
						<img class="pSize" src="${photo.src.portrait}">
				`;
				photoFeed.appendChild(photoDiv);
				
				//show photo details
				photoDiv.addEventListener('mouseenter', function(e){
					var target = e.target.childNodes[1];
					// console.log(e);
					// console.log(target);
					target.classList.value = 'show';
				});
				
				//hide photo details | cannot use icon link...
				photoDiv.addEventListener('mouseleave', function(e) {
					var previousTarget = e.target.childNodes[1];
					// console.log(e);
					// console.log(previousTarget);
					previousTarget.classList.value = 'hide';
				});

			});
		}
	};
	var searchQuery = document.querySelector('#search-bar').value;
	xhttp.open("GET", `https://api.pexels.com/v1/search?query=${searchQuery}`, true);
	xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001fee5f61edff643339f6063a86c85c706');
	xhttp.send();
});