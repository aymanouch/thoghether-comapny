var myLink = document.getElementById("go-link");
function checkLang(parm, lang) {
    if (lang !== parm.value) {
        window.location.href =  parm.value.toLowerCase();
    }
            
  
}