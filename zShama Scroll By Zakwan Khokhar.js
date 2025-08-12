
// For other Websites:

// copy and paste this code between the <head></head> tags on each page of your site.

// For Wordpress:

// Install the Wp-Code extension in wordpress and paste it in the head section.





    <script>
      let scrollInterval = setInterval(function() {
        window.scrollBy(0, 20);
      }, 100); // 100ms interval

      // To stop the scrolling when reaching the end of the page
      let scrollTimeout;
      window.addEventListener("scroll", function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
          }
        }, 100);
      });
    </script>



// Disclaimer:

// The zCode Repository is provided 'as is' without any warranty of any kind, express 
// or implied. In no event shall the authors or copyright holders be liable for any claim, 
// damages, or other liability arising from the use of this repository or any of its contents."
