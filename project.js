function timing(){
    //continuously, the code below should be run then only time will continuously change in output 
    //this is the reason why we put it in the function
const timer = document.getElementById("root");
const now = new Date();
const NepaliTime = now.toLocaleTimeString();
timer.innerHTML = NepaliTime; //we want the time to update in innerHTML to show it in our browser's tab
}

//syntax: setInterval(callbackfunction, timing(in ms)) 
setInterval(timing,1000);

//timer that we created has scope in above function only. so, we need to bring that out for working 
//with it. 
const timer = document.getElementById("root");
timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.height = "100vh"
timer.style.justifyContent = "center";
timer.style.alignItems = "center";



