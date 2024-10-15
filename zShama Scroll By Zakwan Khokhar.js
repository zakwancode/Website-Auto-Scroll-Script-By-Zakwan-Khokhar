<html>
  <body>
    <!-- Your page content here -->
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
  </body>
</html>
