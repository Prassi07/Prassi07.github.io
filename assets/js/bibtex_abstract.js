document.addEventListener('DOMContentLoaded', function() {
    // Get all BibTeX buttons
    const bibtexButtons = document.querySelectorAll('.show-bibtex');
  
    // Get all abstract buttons
    const abstractButtons = document.querySelectorAll('.show-abstract');

    // Helper function to get the icon HTML and the text node from a button
    function getButtonParts(button) {
      const iconElement = button.querySelector('i');
      const iconHTML = iconElement ? iconElement.outerHTML : '';
      // Get text content, excluding the icon's text if any (though icons usually don't have text)
      // A simple way is to clone the button, remove the icon, then get textContent
      const tempButton = button.cloneNode(true);
      const tempIcon = tempButton.querySelector('i');
      if (tempIcon) {
        tempIcon.remove();
      }
      const text = tempButton.textContent.trim();
      return { iconHTML, text };
    }
  
    // Add click event to each BibTeX button
    bibtexButtons.forEach(button => {
      const { iconHTML } = getButtonParts(button); // Get original icon HTML

      button.addEventListener('click', function() {
        // Find the associated bibtex-code using data attributes
        const bibtexCodeId = button.dataset.bibtexTarget;
        const bibtexCode = document.getElementById(bibtexCodeId);
  
        if (bibtexCode) {
          if (bibtexCode.style.display === 'none' || bibtexCode.style.display === '') {
            bibtexCode.style.display = 'block';
            button.innerHTML = iconHTML + ' Hide BibTeX'; // Preserve icon
          } else {
            bibtexCode.style.display = 'none';
            button.innerHTML = iconHTML + ' Show BibTeX'; // Preserve icon
          }
        } else {
          console.error("Could not find .bibtex-code element with ID:", bibtexCodeId);
        }
      });
    });

    // Add click event to each abstract button
    abstractButtons.forEach(button => {
      const { iconHTML } = getButtonParts(button); // Get original icon HTML

      button.addEventListener('click', function() {
        // Find the associated abstract-text using data attributes
        const abstractTextId = button.dataset.abstractTarget;
        const abstractText = document.getElementById(abstractTextId);
  
        if (abstractText) {
          if (abstractText.style.display === 'none' || abstractText.style.display === '') {
            abstractText.style.display = 'block';
            button.innerHTML = iconHTML + ' Hide Abstract'; // Preserve icon
          } else {
            abstractText.style.display = 'none';
            button.innerHTML = iconHTML + ' Show Abstract'; // Preserve icon
          }
        } else {
          console.error("Could not find .abstract-text element with ID:", abstractTextId);
        }
      });
    });
  });