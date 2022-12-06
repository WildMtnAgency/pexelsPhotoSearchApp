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
			console.log(res);
			//selects photos object from res and returns each photo | 0-14 | total 15
			var photoData = res.photos.map(function(photo){
				return photo
			});
			console.log(photoData.length - 1)

			photoFeed.innerHTML = '';
			photoData.forEach(function(photo) {
				var photoDiv = document.createElement('div');
				photoDiv.classList.add('photo-div');
				photoDiv.innerHTML = `
					<img class="pSize" src="${photo.src.portrait}">
					<div class="hide">
						<p id="photo-title">${photo.alt}</p>
						<p id="photographer-name">${photo.photographer}</p>
						<a id="photo-link" href="${photo.url}" target="_blank"><ion-icon name="open-outline"></ion-icon></a>
					</div>
				`;
				photoFeed.appendChild(photoDiv)
			});
		}
	};
	var searchQuery = document.querySelector('#search-bar').value;
	xhttp.open("GET", `https://api.pexels.com/v1/search?query=${searchQuery}`, true);
	xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001fee5f61edff643339f6063a86c85c706');
	xhttp.send();
});