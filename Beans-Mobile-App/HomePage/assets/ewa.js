document.getEventListener("DOMContentLoaded", ()=> {
    let user;
    try {
        user = localStorage.getItem("ewaser")
        console.log(JSON.parse(user))
      }
    catch (err){}  
})