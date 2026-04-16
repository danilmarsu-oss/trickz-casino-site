const updatedDateElement = document.getElementById("updated-date");

if (updatedDateElement) {
  const today = new Date();
  updatedDateElement.textContent = today.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const faqItems = Array.from(document.querySelectorAll(".faq-item"));

faqItems.forEach((item) => {
  const questionButton = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!questionButton || !answer) return;

  questionButton.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("open");
      const button = faqItem.querySelector(".faq-question");
      const faqAnswer = faqItem.querySelector(".faq-answer");
      if (button) button.setAttribute("aria-expanded", "false");
      if (faqAnswer) faqAnswer.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("open");
      questionButton.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});
