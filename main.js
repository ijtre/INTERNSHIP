
document.addEventListener('DOMContentLoaded', (event) => {
  const imageText = document.querySelector('.image-text');
  imageText.classList.add('show');
});
// for main-page
// for interact page
const rescueText = document.querySelector('.restext');
  const vaccinatedText = document.querySelector('.vacitest');
  const sterilizedText = document.querySelector('.stertest');
  const adoptedText = document.querySelector('.adotest');

 
  rescueText.textContent = 'Rescue';
  vaccinatedText.textContent = 'Vaccinated';
  sterilizedText.textContent = 'Sterilized';
  adoptedText.textContent = 'Adopted';


  const rescueSection = document.querySelector('.rescue-section');
  const vaccinatedSection = document.querySelector('.vaccinated-section');
  const sterilizedSection = document.querySelector('.sterilized-section');
  const adoptedSection = document.querySelector('.adopted-section');

  rescueSection.addEventListener('mouseenter', () => {
    rescueText.textContent = '100'; // Update 
  });

  rescueSection.addEventListener('mouseleave', () => {
    rescueText.textContent = 'Rescue';
  });

  vaccinatedSection.addEventListener('mouseenter', () => {
    vaccinatedText.textContent = '200'; // Update 
  });

  vaccinatedSection.addEventListener('mouseleave', () => {
    vaccinatedText.textContent = 'Vaccinated';
  });

  sterilizedSection.addEventListener('mouseenter', () => {
    sterilizedText.textContent = '300'; // Update 
  });

  sterilizedSection.addEventListener('mouseleave', () => {
    sterilizedText.textContent = 'Sterilized';
  });

  adoptedSection.addEventListener('mouseenter', () => {
    adoptedText.textContent = '400'; // Update 
  });

  adoptedSection.addEventListener('mouseleave', () => {
    adoptedText.textContent = 'Adopted';
  });