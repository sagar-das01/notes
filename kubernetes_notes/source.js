function openConfig(evt, osName){
    var tabcontents, tablinks;

    // Hiding all the elements of the tab with the tabcontents classname
    tabcontents = document.getElementsByClassName("tabcontents");
    for(var i=0; i<tabcontents.length; i++){
        tabcontents[i].style.display = "none";
    }

    
    //capturing all the "tablinks" objects and remove the "active" class [defined in the css file]
    tablinks = document.getElementsByClassName("tablinks");
    for(var i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active",""); 
    }

    //show the current tab and add "active" class to the button opening the tab
    document.getElementById(osName).style.display = "block";
    evt.currentTarget.className+="active";

}

function defaultTabs(){
document.getElementById("defaultTab").click();  // clicking on the defaultTab id object and clicking on it
}