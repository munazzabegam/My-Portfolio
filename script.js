document.addEventListener('DOMContentLoaded', () => {
    const skillProgressBars = document.querySelectorAll('.skill-progress-bar');
  
    skillProgressBars.forEach(progressBar => {
      const targetWidth = progressBar.getAttribute('data-percent') + '%';
      progressBar.style.width = targetWidth;
  
      // Animate the skill progress bar width
      setTimeout(() => {
        progressBar.style.width = targetWidth;
      }, 100);
    });
  
    // Update the progress label with the actual percentage
    skillProgressBars.forEach(progressBar => {
      const targetWidth = progressBar.getAttribute('data-percent');
      let currentWidth = 0;
      const increment = targetWidth / 100;
  
      const interval = setInterval(() => {
        if (currentWidth >= targetWidth) {
          clearInterval(interval);
          return;
        }
  
        currentWidth += increment;
        progressBar.style.width = currentWidth + '%';
        progressBar.nextElementSibling.innerText = Math.round(currentWidth) + '%';
      }, 10);
    });
  });

   
  
  