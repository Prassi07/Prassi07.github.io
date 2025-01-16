document.addEventListener('DOMContentLoaded', function() {
    // Get all BibTeX buttons
    const bibtexButtons = document.querySelectorAll('.show-bibtex');
  
    // Get all abstract buttons
    const abstractButtons = document.querySelectorAll('.show-abstract');
  
    // Add click event to each BibTeX button
    bibtexButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Find the associated bibtex-code using data attributes
        const bibtexCodeId = button.dataset.bibtexTarget;
        const bibtexCode = document.getElementById(bibtexCodeId);
  
        // Check if bibtexCode is not null before accessing style
        if (bibtexCode) {
          if (bibtexCode.style.display === 'none') {
            bibtexCode.style.display = 'block';
            button.textContent = 'Hide BibTeX';
          } else {
            bibtexCode.style.display = 'none';
            button.textContent = 'Show BibTeX';
          }
        } else {
          console.error("Could not find .bibtex-code element with ID:", bibtexCodeId);
        }
      });
    });
  
    // Add click event to each abstract button
    abstractButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Find the associated abstract-text using data attributes
        const abstractTextId = button.dataset.abstractTarget;
        const abstractText = document.getElementById(abstractTextId);
  
        // Check if abstractText is not null before accessing style
        if (abstractText) {
          if (abstractText.style.display === 'none') {
            abstractText.style.display = 'block';
            button.textContent = 'Hide Abstract';
          } else {
            abstractText.style.display = 'none';
            button.textContent = 'Show Abstract';
          }
        } else {
          console.error("Could not find .abstract-text element with ID:", abstractTextId);
        }
      });
    });
  });