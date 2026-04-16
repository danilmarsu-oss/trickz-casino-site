const faqButtons = document.querySelectorAll('.faq-question');
const updatedDate = document.getElementById('updated-date');

if (updatedDate) {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('nb-NO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  updatedDate.textContent = formattedDate;
  updatedDate.dateTime = now.toISOString().slice(0, 10);
}

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    faqButtons.forEach((otherButton) => {
      otherButton.setAttribute('aria-expanded', 'false');
      const otherAnswer = otherButton.nextElementSibling;
      otherAnswer.style.maxHeight = null;
    });

    if (!isOpen) {
      button.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});
