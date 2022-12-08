const root = document.documentElement;
 
document.addEventListener('mousemove', evt => {
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-y', y);
});
function Login(){
    location.replace("/navbar/navbar.html")
}