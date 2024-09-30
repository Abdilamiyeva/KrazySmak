document.addEventListener('DOMContentLoaded', function() {
    const customSelect = document.querySelector('.single-product__select');
    const optionsContainer = document.querySelector('.single-product__options-container');
    const options = document.querySelectorAll('.option');
    const selectedOption = document.querySelector('.selected-option');

    customSelect.addEventListener('click', function() {
        const isOpen = optionsContainer.style.display === 'block';
        optionsContainer.style.display = isOpen ? 'none' : 'block';
        customSelect.classList.toggle('open', !isOpen);
    });

    options.forEach(option => {
        option.addEventListener('click', function() {
            selectedOption.textContent = this.textContent;
            optionsContainer.style.display = 'none'; 
            customSelect.classList.remove('open'); 
        });
    });

    document.addEventListener('click', function(event) {
        if (!customSelect.contains(event.target)) {
            optionsContainer.style.display = 'none';
            customSelect.classList.remove('open'); 
        }
    });
});
