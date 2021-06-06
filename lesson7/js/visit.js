if (typeof Storage !== "undefined") {
    if (localStorage.visitcount) {
      document.getElementById("visit").innerHTML =
        "Welcome back, you've been here " +
        localStorage.visitcount +
        " times before.";
      localStorage.visitcount = Number(localStorage.visitcount) + 1;
    } else {
      localStorage.visitcount = 1;
      document.getElementById("visit").innerHTML =
        "This is your first time here! Welcome.";
    }

} 
  
  console.log("localstorage visit count now: " + localStorage.visitcount);
  
  