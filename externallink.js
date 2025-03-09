function showExternalLinkWarning(event) {
    const link = event.target;
    const isExternal = link.hostname !== window.location.hostname; //check if link is external
  
    if (link.getAttribute('data-no-warning') === 'true') {
        return;
      }

    if (isExternal) {
      event.preventDefault(); //prevent default behavior (opening link)
      const userConfirmed = confirm("This link will open an external website in a new tab. Do you want to continue?"); //confirmation dialogue
      
      if (userConfirmed) {
        window.open(link.href, "_blank"); //open link
      }
    }
  }
  
  //event listener
  function attachExternalLinkListeners() {
    const links = document.querySelectorAll('a'); //get all links in document
    
    links.forEach(link => {
      link.addEventListener('click', showExternalLinkWarning);
    });
  }
  
  //init functionality on page load
  window.addEventListener('DOMContentLoaded', () => {
    attachExternalLinkListeners();
  });
  