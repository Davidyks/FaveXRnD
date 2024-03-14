const toggleButtons = document.querySelectorAll('.toggle-visibility');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const targetElement = document.querySelector(`.${target}-amount`);
        const placeholderElement = document.querySelector(`.${target}-amount-placeholder`);

        if (targetElement.style.display === 'none') {
            targetElement.style.display = 'block';
            placeholderElement.style.display = 'none';
            // Mengubah bullet menjadi angka
            const bulletSpans = placeholderElement.querySelectorAll('.bullet');
            let value = targetElement.textContent;
            for (let i = 0; i < bulletSpans.length; i++) {
                bulletSpans[i].textContent = value[i];
            }
        } else {
            targetElement.style.display = 'none';
            placeholderElement.style.display = 'block';
            // Mengubah angka menjadi bullet kembali
            const bulletSpans = placeholderElement.querySelectorAll('.bullet');
            for (let i = 0; i < bulletSpans.length; i++) {
                bulletSpans[i].textContent = '•';
            }
        }
    });
});    