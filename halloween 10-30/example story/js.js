//these are the HTML elements you will use to display the halloween storu
let mainSection = document.getElementById("main")
let imageElement = document.getElementById("image")
let textElement = document.getElementById("text")
let button1Element = document.getElementById("action1")
let button2Element = document.getElementById("action2")

// this function is used to edit the HTML content to display the story

// takes in these parameters:
// text for the story
// link to the image to be shown
// the first action the user can choose
// the second action the user can choose

// set the HTML element properties to these parameters
function editHTML(text, imageLink, action1, action2) {

    imageElement.src = imageLink;


    textElement.textContent = text;


    button1Element.textContent = action1;
    button1Element.onclick = () => nextStory(action1);


    button2Element.textContent = action2;
    button2Element.onclick = () => nextStory(action2);

}

// Starting story prompt (runs the moment the website is loaded because it is outside of a function):
editHTML("AMOGNUS",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png",
            "film it",
            "run away"
        )

// this function checks the user's action and edits the html to the appropriate next part of the story
 function nextStory(action) {
    if (action == "film it") {
        editHTML("you filmed it and it did a little dance",
            "https://png.pngtree.com/png-vector/20230804/ourmid/pngtree-dancing-ghost-vector-png-image_6905664.png",
            "post on youtube",
            "dap up the ghost"
        )
    }
    if (action == "run away") {
        editHTML("you ran away and got lost",
            "https://m.media-amazon.com/images/I/612BzN2f6rL._AC_UF894,1000_QL80_.jpg",
            "call for help",
            "camp out"
        )
    }
    if (action == "post on youtube") {
        editHTML("you gain 10000 million subscibers. the end",
            "https://i.ytimg.com/vi/7p_HT5oGsfo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgm200PqsMddOfsT9Lw7g2T_ZE6w",
            "GAME",
            "OVER"
        )
    }
    if (action == "dap up the ghost") {
        editHTML("your hand slips through the ghosts hand and you fall over. you lose 10000 aura. Scary stuff.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLq5x_C6NdyRBDDF5xRHOtzMMKkPJAcY2fEA&s",
            "GAME",
            "GAME"
        )
    }
    if (action == "call for help") {
        editHTML("no one can hear you scream. you hear a rustling from the push just before you get eaten alive by SKINWALKERS!!!!",
            "https://i.ytimg.com/vi/K9nezW916lQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCKfu1utKO-jLeQUd3rogvapWRZhQ",
            "GAME",
            "OVER"
        )
    }
    if (action == "camp out") {
        editHTML("you try to camp out but the ghostly screams haunt you to this day...",
            "https://media.istockphoto.com/id/1051146310/photo/screaming-ghost-faces.jpg?s=612x612&w=0&k=20&c=TseAMASw0PVvyijC4t2zjdWyu06Fsr1cn73lcCN8vPg=",
            "GAME",
            "OVER"
        )
    }
    
 }