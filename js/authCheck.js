// Check authentication state
function checkUserSession(){
  let userSession = sessionStorage.getItem("userSession")
  if (userSession) {
    //Validate session with any remote session storage here in the future
    return
  }

  window.location.replace("/");
}

checkUserSession()