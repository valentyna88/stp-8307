document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#cookieModal');
  const acceptBtn = document.getElementById('acceptBtn');
  const declineBtn = document.getElementById('declineBtn');
  const body = document.body;

  const cookiePreference = localStorage.getItem('cookieConsent');

  if (!cookiePreference || cookiePreference === 'declined') {
    modal.classList.add('shown');
    body.classList.add('overflow-hidden');
  } else if (cookiePreference === 'accepted') {
    return;
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    modal.classList.remove('shown');
    body.classList.remove('overflow-hidden');
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    modal.classList.remove('shown');
    body.classList.remove('overflow-hidden');
  });
});
