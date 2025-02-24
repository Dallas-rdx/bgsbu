document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if(query) {
      const lowerQuery = query.toLowerCase();
      if(lowerQuery.includes("admission")) {
        window.location.href = "admissions.html?q=" + encodeURIComponent(query);
      } else if(lowerQuery.includes("chancellor")) {
        window.location.href = "Chancellor.html?q=" + encodeURIComponent(query);
      } else if(lowerQuery.includes("examination")) {
        window.location.href = "examinations.html?q=" + encodeURIComponent(query);
      } 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      else {
        window.location.href = "resultnotfound.html" + encodeURIComponent(query);
      }
    }
  });