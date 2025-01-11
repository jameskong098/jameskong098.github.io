const maxWidth = 1180;

function formSubmissionHandler(event) {
  event.preventDefault();

  const form = document.getElementById('gform');
  const formData = new FormData(form);
  const statusMessage = document.getElementById('status-message');

  statusMessage.classList.remove('show');

  fetch(form.action, {
    method: 'POST',
    body: formData,
    mode: 'no-cors' // 'no-cors' mode to avoid CORS issues
  })
  .then(response => {
    // Check if the response was successful
    if (response.type === 'opaque') {
      statusMessage.classList.add('show');
      statusMessage.style.color = '#28a745'; 
      statusMessage.style.backgroundColor = '#d4edda'; 
      statusMessage.style.border = '1px solid #c3e6cb'; 
      statusMessage.textContent = 'Your message has been sent!';
      form.reset();
    } else {
      statusMessage.classList.add('show');
      statusMessage.style.color = '#dc3545'; 
      statusMessage.style.backgroundColor = '#f8d7da'; 
      statusMessage.style.border = '1px solid #f5c6cb'; 
      statusMessage.textContent = 'Something went wrong. Please try again later.';
    }
  })
  .catch(error => {
    statusMessage.classList.add('show');
    statusMessage.style.color = '#dc3545'; 
    statusMessage.style.backgroundColor = '#f8d7da'; 
    statusMessage.style.border = '1px solid #f5c6cb';
    statusMessage.textContent = 'Form submission failed. Please check your internet connection and try again.';
  });
  
  setTimeout(() => {
    statusMessage.classList.remove('show');
  }, 5000); // 1s fade in + 4s display + 1s fade out = 6s total
}