//goal: on photo-div hover display photographer name, photo title, and icon for external link to pexels
	//individually identify each photo to implement hover feature

//conflicts
	//photo-div is a classname = not individually identified. 
		//create a unique photo id using array from res json parsed object (0-14)
		//add to photo-div a unique id
		//for each photo div add data-photoId="#" to individually identify each photo-div

//next challenge
	//now that i can uniquely identify each photo-div by id
	//add an event listener to each photo-div 
		//when uniqueId === mouse hover, then show photo features

//hover feature
//create an event listener on photo-div with a mouseover event
	//starting point add an opacity of 0.85 on mouseover event


	//keep hide class hidden until mouse hover over each photo div
		//use the photo-div unique id to identify a truthy when mouse hovers over photo div
		//on truthy (mouseover & unique id), show hide class

//to do later
	//1. hide or do not show photographer === 'Pixabay' -- DONE
		// combine functions for capitalize and no pixabay name using large if statements in one single function
	//2. capitalize photographer name 
