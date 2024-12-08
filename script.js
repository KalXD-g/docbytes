document.addEventListener('click',()=>{
    if(sessionStorage.getItem('hasAccount')){
        sessionStorage.removeItem('hasAccount')
    } else {
        sessionStorage.setItem('hasAccount', true)
    }
})

if(!sessionStorage.getItem('hasAccount')){
    document.getElementById('profile').style.display = "block";
    showMenu()
    document.getElementById('signup-login').style.display = "none";
    document.getElementById('status').style.display = "flex";
} else {
    document.getElementById('signup-login').style.display = "flex";
    document.getElementById('menu-drop-down').style.display = "none";
    document.getElementById('profile').style.display = "none";
    document.getElementById('status').style.display = "none";
}

function showMenu() {
    let menu = Array.from(document.getElementsByClassName('menu'))[0];
    let menuHolder = document.getElementById('menu-holder')
    document.getElementById('profile').addEventListener('mouseenter',()=>{
        menu.classList.add('menu-drop-down');
        menuHolder.style.display = "block";
    })
    document.getElementById('profile').addEventListener('mouseleave',()=>{
        menu.classList.remove('menu-drop-down');
        menuHolder.style.display = "none";
    })

    menuHolder.addEventListener('mouseenter',()=>{
        menu.classList.add('menu-drop-down');
        menuHolder.style.display = "block";
    })

    menuHolder.addEventListener('mouseleave',()=>{
        menu.classList.remove('menu-drop-down');
        menuHolder.style.display = "none";
    })
}