var numberOfFaces = 5,
    numRounds = 0,
    theLeftSide = document.getElementById("leftSide"),
    theRightSide = document.getElementById("rightSide"),
    theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
    var image, topPos, leftPos, leftSideImages;
    for (var i = 0; i < numberOfFaces; i++) {
        image = document.createElement("img");
        image.src = "https://www.dropbox.com/s/9v2t6j824xsgz44/smile.png?raw=1";
        topPos = Math.floor(Math.random() * 401);
        leftPos = Math.floor(Math.random() * 401);
        image.style.top = topPos + "px";
        image.style.left = leftPos + "px";
        theLeftSide.appendChild(image);
    }

    // Clone div#leftSide, delete last img node, add to div#rightSide
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastElementChild);
    theRightSide.appendChild(leftSideImages);

    // Add event handler to lastChild img node to add 5 faces
    theLeftSide.lastChild.onclick =
        function addImages(event) {
            event.stopPropagation();
            numRounds += 1;
            numberOfFaces += 5;
            // Clear previous images for both divs
            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
            }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
            }
            generateFaces();
        }

    // Add event handler to the body to end game
    theBody.onclick =
        function gameOver() {
            alert("You didn't find the extra face.  Game over!\nYou found " + numRounds + " extra faces!");
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
        }
}