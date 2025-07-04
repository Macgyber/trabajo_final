 
      window.addEventListener('DOMContentLoaded', function() {
        var audi = document.getElementById('audi');
        if (audi) {
          audi.play().catch(function(){});
        }
      });
    