const navItems = [
    {
        name: "Items 1",
    },
    {
        name: "Items 2",
    },
    {
        name: "Items 3",
    },
    {
        name: "Items 4",
    },
    {
        name: "Items 5",
    },
]

// function chuye(){
//     document.getElementsByClassName("")
// }

window.onload = function(){
    for( let a of navItems ) {
        document.getElementsByClassName("menu")[0].innerHTML+=`<span>
            
        `
         + a.name+
        `
        </span>`
        
    }
}