const videoLinks = document.querySelectorAll('.content-video a');
const videoLinks = Array.from(document.querySelectorAll('.content-video a'));

videoLinks.forEach(videoLink =>
	videoLinkArray.addEventListener('click', function() {
    console.log(event.target);
		event.preventDefault();
	})
);

function selectVideo() {
	removeActiveClass(); // NEW
	event.target.classList.add('active'); // NEW
	const videoToPlay = event.target.getAttribute('href');
	iFrame.setAttribute('src', videoToPlay);
	event.preventDefault();
}

// NEW
function removeActiveClass() {
	videoLinks.forEach(videoLink => videoLink.classList.remove('active'));
}

document.addEventListener('click', clickHandlers)

var nyt = 'https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=OuQiMDj0xtgzO80mtbAa4phGCAJW7GKa'

function clickHandlers(){
  if (event.target.matches('#pull')){
    document.querySelector('body').classList.toggle('show-nav');
    event.preventDefault();
  }
  if (event.target.matches('.content-video a')){
    const iFrame = document.querySelector('iframe');
    const videoLinks = document.querySelectorAll('.content-video a');
    videoLinks.forEach(videoLink => videoLink.classList.remove('active'));
    event.target.classList.add('active');
    const videoToPlay = event.target.getAttribute('href');
    iFrame.setAttribute('src', videoToPlay);
    event.preventDefault();
  }
}

var addContent = function(data){

  var looped = ''

  for(i=0; i<data.results.length; i++){
    looped += `
      <div class="item">
        <h3>${data.results[i].title}</h3>
        <p>${data.results[i].abstract}</p>
      </div>
      `
  }
  document.querySelector('.content div').innerHTML = looped
}

var getData = function () {
	fetch(nyt)
  .then(response => response.json())
  .then(json => addContent(json))
}

getData();