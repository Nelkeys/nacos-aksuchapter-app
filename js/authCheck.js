// Check authentication state
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in, allow access to other pages
    } else {
      // User is not signed in, redirect to login page
      window.location.replace("../index.html");
    }
  });
  