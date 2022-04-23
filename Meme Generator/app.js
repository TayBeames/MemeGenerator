document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector('form');    
    const memeContainer = document.querySelector('#memePlacement')

    
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const pic = document.querySelector("#url"); //retrieves url
        const top = document.querySelector("#top"); //retrieves top
        const bottom = document.querySelector("#bottom"); //retrieves bottome

        const newMemeDiv = document.createElement('div');// creates new div

        let newPic = document.createElement('#url'); // creates new image
        newPic.innerHTML = document.getElementById('url').value;
        newMemeDiv.appendChild(newPic)

        let newTop = document.createTextNode('#top'); // creates new image
        newPic.innerHTML = document.getElementById('top').value;
        newMemeDiv.appendChild(newTop)

        let newBottom = document.createTextNode('#bottom'); // creates new image
        newBottom.innerHTML = document.getElementById('bottom').value;
        newMemeDiv.appendChild(newBottom)
        
        newMemeDiv.appendChild('')
        memeContainer.append(newMemeDiv); // add new div to memePlacement  
  
        form.reset();
    });

    
    
}
