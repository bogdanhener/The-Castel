window.onload = function(){
   // Hide the banner with text over Video
    $(window).on('click', () => {
       $('#video-text').hide();
       $('body').addClass('change-color',2000); // add class to the body on click
    });

    // onepage nav on scroll 
    $('#menu').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
      
   });

  // About Section of the page
   let imageBx = document.querySelectorAll('.imageBx');
   let contentBx = document.querySelectorAll('.contentBx');

    for(let i = 0; i < imageBx.length; i++){
      imageBx[i].addEventListener('mouseover', () => {
            for (let i = 0; i < contentBx.length;i++){
                  contentBx[i].className = 'contentBx';
            }
          document.getElementById(imageBx[i].dataset.id).className = 'contentBx active';
            for (let i = 0; i < imageBx.length;i++){
                 imageBx[i].className = 'imageBx';
            }
        imageBx[i].className = 'imageBx active';
      })
    };
   // Scroll in effect on About Page
    const scrollEffect = () => {
        let wrapper = document.querySelector('.wrapper-about');
        let introPosition = wrapper.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.5;

       if(introPosition < screenPosition){
          wrapper.classList.add('effect');
       }
    };
   window.addEventListener('scroll', scrollEffect);


    // WeatherApp on Navbar
    $.get('https://api.openweathermap.org/data/2.5/weather?q=Hunedoara&units=metric&APPID=19badfd866d42c91f3be8356564fbb15', (response)=> {
      let deg = Math.floor(response.main.temp);
      let weather = `
      <p><img id='img-weather' src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png"> ${response.weather[0].description}
      / ${deg} °C</p>
      `
     $('.weatherApp').html(weather);
    });


    // Social Media Bounce every 10s
     const bounceIcons = () =>  $('#socialIcons').toggleClass('wobble');
     setInterval(bounceIcons, 10000);

    // Carousel options on Gallery Page
    $('.carousel').carousel({
       interval: 5000,
    });

    //Rotator Start
   let text = document.getElementById('rotator');
   let word = text.getElementsByTagName('span');
   let i = 0;
   const rotator = () => {
       word[i].style.display = 'none';
       i =(i + 1) % word.length; 
       word[i].style.display = 'initial';
   }
   setInterval(rotator, 1000);
  // Rotator End
    
}; // Window.onload tag










