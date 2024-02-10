// Check authentication state
function checkUserSession(){
  let userSession = sessionStorage.getItem("user-info");
  if (userSession) {
    // You can add additional validation here if needed
    return true; // User session is valid
  } else {
    // Redirect the user to the login page if there is no user session
    window.location.replace("/"); 
    return false; // User session is not valid
  }
}

checkUserSession();
