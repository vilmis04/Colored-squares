function coloredSquares() {
    const NUMBER_OF_SQUARES = 28;

    function createNewElementWithClass(elemType, classArray) {
        let newElem = document.createElement(elemType);
        classArray.forEach(item => newElem.classList.add(item));
        return newElem;
    }

    function generateRandomColor() {
        const iterator = (item) => Math.round(Math.random()*item);
        const rgb = [255,255,255].map(iterator);
        return "rgb("+rgb.join(",")+")";
    }

    function addRandomBackgroundColor(event) {
        event.target.style.background = generateRandomColor();
        event.target.addEventListener("click", setInitialBackgroundColor, {once : true});
    }

    function setInitialBackgroundColor(event) {
        event.target.style.background = "lightgray";
        event.target.addEventListener("click", addRandomBackgroundColor, {once : true});

    }
   
    const body = document.querySelector("body");

    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.width = "100vw";
    body.style.margin = "0";

    const cardContainer = createNewElementWithClass("div", ["card-container"]);
    cardContainer.style.display = "flex";
    cardContainer.style.justifyContent = "center";
    cardContainer.style.alignItems = "center";
    cardContainer.style.flexWrap = "wrap";
    cardContainer.style.padding = "1rem";
    cardContainer.style.borderRadius = "3rem";
    cardContainer.style.maxWidth = "62rem";
    cardContainer.style.boxSizing = "border-box";
    cardContainer.addEventListener("mouseover", () => cardContainer.style.border = ("5px solid red"));
    cardContainer.addEventListener("mouseout", () => cardContainer.style.border = ("none"));

    
    for (let i=0; i<NUMBER_OF_SQUARES; i++) {
        const card = createNewElementWithClass("div", ["card"]);
        card.style.height = "100px";
        card.style.width = "100px";
        card.style.background = "lightgrey";
        card.style.margin = "1rem";
        card.style.boxSizing = "border-box";
        card.addEventListener("mouseover", () => card.style.border = "1px black solid");
        card.addEventListener("mouseout", () => card.style.border = "none");
        card.addEventListener("click", addRandomBackgroundColor, {once : true});

        cardContainer.appendChild(card);
    }



    body.appendChild(cardContainer);
}

coloredSquares();