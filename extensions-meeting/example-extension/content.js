allDivs = document.querySelectorAll('*'); // get every element on page

for (e of Array.from(allDivs)) { // loop throuhg the list of every element, where each element is "e"
    e.style.backgroundColor = "#161616" // change background color to almost black
    e.style.color = "white" // change text color to white to keep it visible
}
