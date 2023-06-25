/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    (function() {
    // Perform the API GET request
    fetch(`${document.location.origin}/counter`)
      .then(response => response.json())
      .then(data => {
        // Display the response

        let counter = DOMPurify.sanitize(JSON.stringify(data["data"]));
        counter = counter.replace(/['"]+/g, '');

        const ordinalRules = new Intl.PluralRules("en", {type: "ordinal"});
          const suffixes = {
            one: "st",
            two: "nd",
            few: "rd",
            other: "th"
        };
        const suffix = suffixes[ordinalRules.select(number)];
        const value = number + suffix;

        var outputElement = document.getElementById('counter-output');
        outputElement.textContent = `Welcome to my page! You are the ${value} visitor.`;
        console.log(JSON.stringify(data)["data"]);
      })
      .catch(error => {
        console.error("Error:", error);
        // alert("An error occurred. Please try again.");
      });
  })();

});
