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
    document.getElementById('profile').style.display = "none";
    document.getElementById('status').style.display = "none";
}

// Menu drop down

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

// Nav bar and home page courses

const languagesList = [
    "Python",
    "Javascript",
    "Java",
    "Golang",
    "Rust",
    "SQL",
    "Swift",
    "Dart",
    "C",
    "C++",
    "Git",
    "Github"
]

const languagesIcon = [
    "svg/python.svg",
    "svg/js.svg",
    "svg/java.svg",
    "svg/go.svg",
    "svg/rust.svg",
    "svg/sql.svg",
    "svg/swift.svg",
    "svg/dart.svg",
    "svg/c.svg",
    "svg/cpp.svg",
    "svg/git.svg",
    "svg/github.svg"
]

let delaySeconds = 150;

for(let i=0; i<languagesList.length; i++){
    let div = document.createElement('a')
    div.classList.add('topic-cards')
    div.id = `topic-card-${i+1}`
    div.href=`#`;
    div.innerHTML = `
        <i class="fa-regular fa-bookmark bookmarks"></i>
        <img class="lang-icon" src="${languagesIcon[i]}" id="${languagesList[i]}">
        ${languagesList[i]}
    `
    div.style.animationDelay = `${delaySeconds}ms`;
    delaySeconds += 150;
    document.getElementById('topics').appendChild(div);
}

for(let i=0; i<languagesList.length; i++){
    let div = document.createElement('div')
    div.classList.add('trending-topics')
    div.id = `trending-topic${i+1}`
    div.innerText = `${languagesList[i]}`
    document.getElementById('trending').appendChild(div);
}

Array.from(document.getElementsByClassName('bookmarks')).forEach(card=>{
    card.addEventListener('click',()=>{
        card.classList.toggle('fa-regular')
        card.classList.toggle('fa-solid')
    })
})

// Documentation section

