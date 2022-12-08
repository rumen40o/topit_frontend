const buttonHightlight = document.getElementById('buttonHighlight');
let selected;
if(window.location.href.endsWith("/home/home.html")){   
    selected = document.getElementById('button-1');
    buttonHightlight.classList = 'highlight on-1';
}else if(window.location.href.endsWith("/employees/employee.html")) {
    selected = document.getElementById('button-2');
    buttonHightlight.classList = 'highlight on-2';
}else if(window.location.href.endsWith("/task/task.html")){
    selected = document.getElementById('button-3');
    buttonHightlight.classList = 'highlight on-3';
}else if(window.location.href.endsWith("/event/event.html")){
    selected = document.getElementById('button-4');
    buttonHightlight.classList = 'highlight on-4';
}else if(window.location.href.endsWith("/account/account.html")){
    selected = document.getElementById('button-5');
    buttonHightlight.classList = 'highlight on-5';
}

selected.classList.add("selected");

function moveHightlight(targetId) {
    const button = document.getElementById(`button-${targetId}`);
    if(button == selected)
        return;
    button.classList.add('selected');
    if(selected != null)
        selected.classList.remove('selected');
    selected = button;

    buttonHightlight.classList = `highlight on-${targetId}`;
    window.location.reload()
    
}

function Home(){
    location.replace("/home/home.html");
}
function Employees(){
    location.replace("/employees/employee.html");
}
function Tasks(){
    location.replace("/task/task.html");
}
function Event(){
    location.replace("/event/event.html");
}
function Account(){
    location.replace("/account/account.html");
}
function HomeButton(){
    moveHightlight(1);
    Home();
}
function EmployeeButton(){
    moveHightlight(2);
    Employees();
}
function TaskButton(){
    moveHightlight(3);
    Tasks();
}
function EventButton(){
    moveHightlight(4);
    Event();
}
function AccountButton(){
    moveHightlight(5);
    Account();
}