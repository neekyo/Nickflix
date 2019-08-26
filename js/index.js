jQuery(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

let movieName = 'gangs of new york'

axios.get(`http://www.omdbapi.com/?apikey=cb06939&s=${movieName}`).then((result) => {
    console.log(result)

    axios.get(`http://www.omdbapi.com/?apikey=cb06939&i=${result.data.Search[0].imdbID}`).then(result2=>{
        console.log(result2)
    }).catch((err) => {console.log(err)});
}).catch((err) => {console.log(err)});



document.querySelector("#navbarSupportedContent > form > input").unclick