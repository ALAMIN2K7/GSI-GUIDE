/* GSI-GUIDE — JAVASCRIPT */

document.querySelectorAll('.copy-btn').forEach(function (button) {
  button.addEventListener('click', async function () {
    const text = button.dataset.copy;
    const original = button.textContent;

    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try { document.execCommand('copy'); } catch (e) {}
      textarea.remove();
    }

    button.textContent = 'Copied!';
    button.classList.add('copied');

    setTimeout(function () {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1300);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
