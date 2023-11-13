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


  // function toggleCardContent(card) {
  //   const cardContent = card.querySelector('.card-one-content');
  //   cardContent.style.display = cardContent.style.display === 'flex' ? 'none' : 'flex';
  // }


  // function openModal(src, title, details) {
  //   document.getElementById('modalIframe').src = src;
  //   document.getElementById('modalDetails').innerHTML = '<h3>' + title + '</h3><p>' + details + '</p>';
  //   document.getElementById('modalOverlay').style.display = 'flex';
  // }

  // function closeModal() {
  //   document.getElementById('modalOverlay').style.display = 'none';
  // }


  function openModal(src, title, details) {
    document.getElementById('modalIframe').src = src;
    document.getElementById('modalDetails').innerHTML = '<h3>' + title + '</h3><p>' + details + '</p>';
    document.getElementById('modalOverlay').style.display = 'flex';
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.body.classList.remove('modal-open');
  }
  
  
  