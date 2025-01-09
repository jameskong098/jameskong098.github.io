const maxWidth = 1180

let submitted = false;

function formSubmissionHandler() {
  if (submitted) {
    const successMessage = document.getElementById('success-message');
    const form = document.getElementById('gform');
    successMessage.classList.add('show');
    form.reset();
    submitted = false;

    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000); // 1s fade in + 4s display + 1s fade out = 6s total
  }
}
