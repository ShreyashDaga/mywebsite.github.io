
    document.addEventListener("DOMContentLoaded", function() {
      
ScrollReveal().reveal('.hero-section', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  reset: true
});

ScrollReveal().reveal('.welcome-section', {
  duration: 1000,
  origin: 'left',
  distance: '50px',
  delay: 300,
  reset: true 
});

ScrollReveal().reveal('.counters-section', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  delay: 300,
  reset: true // Reset the animation each time the element enters the viewport
});

ScrollReveal().reveal('.services', {
  duration: 1500,
  origin: 'bottom',
  distance: '50px',
  delay: 300,
  reset: true // Reset the animation each time the element enters the viewport
});

ScrollReveal().reveal('.contact', {
  duration: 1000,
  origin: 'top',
  distance: '50px',
  delay: 300,
  reset: true 
  // Reset the animation each time the element enters the viewport
});
ScrollReveal().reveal('.map', {
  duration: 1500,
  origin: 'bottom',
  distance: '50px',
  delay: 300,
  reset: true // Reset the animation each time the element enters the viewport
});

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 500;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
                
            };
            updateCount();
           
        });
        
    });
    { const slider = document.querySelector('.services-slider');
    const items = document.querySelectorAll('.service-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
    const totalItems = items.length;
  
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    function showNext() {
      currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first item
      updateSliderPosition();
    }
  
    function showPrevious() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last item
      updateSliderPosition();
    }
  
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrevious);
  
    // Optional: Auto-slide every 3 seconds
    setInterval(showNext, 3000);}
    