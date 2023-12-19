 //////////////////////////////////////////////////////////
 /////////////////HOME Page///////////////////////////////
 /////////////////////////////////////////////////////////

 //////////////// Reusable Hamburger Menu Navigation Bar function 
 document.querySelector('.menu-toggle').addEventListener('click', function () {
     const navLinks = document.querySelector('.nav-links');
     navLinks.classList.toggle('active');

     // Toggle between hamburger and close icons
     const barsIcon = document.querySelector('.menu-toggle i.fa-bars');
     const timesIcon = document.querySelector('.menu-toggle i.fa-times');
     barsIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
     timesIcon.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
 });

 ////////////Section 4 Count Up Funtionality
 const achievements = document.querySelectorAll('.achievement[data-target]');

 function animateNumbers() {
      achievements.forEach((achievement) => {
           const target = parseFloat(achievement.getAttribute(
                'data-target')); // Parse the target value as float
           const duration = 2000; // Animation duration in milliseconds
           const increment = target / 100; // Increment value for smooth animation

           let currentCount = 0;
           const updateCount = () => {
                const formattedNumber = currentCount >= 1000 ?
                     `${(currentCount / 1000).toFixed(1)}k` : Math.floor(currentCount);
                achievement.querySelector('h2').textContent = formattedNumber;

                if (currentCount < target) {
                     currentCount += increment;
                     requestAnimationFrame(updateCount);
                } else {
                     achievement.querySelector('h2').textContent = target >= 1000 ?
                          `${(target / 1000).toFixed(1)}k` : target;
                }
           };

           updateCount();
      });
 }

 function isAchievementInView(element) {
      const rect = element.getBoundingClientRect();
      return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
 }

 function handleScroll() {
      achievements.forEach((achievement) => {
           if (isAchievementInView(achievement)) {
                animateNumbers();
                window.removeEventListener('scroll', handleScroll); // Remove scroll event listener
           }
      });
 }
 window.addEventListener('scroll', handleScroll);
 handleScroll();


 //////////////////////////////////////////////////////////
 /////////////////Contact Page///////////////////////////////
 /////////////////////////////////////////////////////////

 function clearForm() {
      var form = document.getElementById('contactForm');

      for (var i = 0; i < form.elements.length; i++) {
           var element = form.elements[i];

           if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                element.value = '';
           }
      }
 }

 // Add this script in your existing script.js file or create a new one
 function showPopup() {
      document.getElementById('successPopup').style.display = 'block';
 }

 function closePopup() {
      document.getElementById('successPopup').style.display = 'none';
 }

 // Trigger the popup when the form is submitted successfully
 document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from actually submitting for this example
      showPopup();
 });