let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")


let page1Button = document.getElementById("page1Button")
let page2Button = document.getElementById("page2Button")
let page3Button = document.getElementById("page3Button")

page1.style.display = "inline"
page2.style.display = "none"
page3.style.display = "none"

page1Button.onclick = function() {
    page1.style.display = "inline"
    page2.style.display = "none"
    page3.style.display = "none"
}

page2Button.onclick =  function() {
    page1.style.display = "none"
    page2.style.display = "inline"
    page3.style.display = "none"
}

page3Button.onclick =  function() {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "inline"
}