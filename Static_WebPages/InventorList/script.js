function showInventor() {
    const select = document.getElementById("inventorSelect").value;
    const image = document.getElementById("inventorImage");
    const details = document.getElementById("inventorDetails");
    const imageBox = document.querySelector(".image-circle");

    const data = {
        guido: {
            img: "images/guido.jpg",
            text: "Inventor of Python.\nEmphasized simplicity.\nReleased in 1991."
        },
        dennis: {
            img: "images/dennis.jpg",
            text: "Inventor of C language.\nCo-creator of UNIX.\nSystem software pioneer."
        },
        james: {
            img: "images/james.jpg",
            text: "Inventor of Java.\nPlatform independent.\nWidely used worldwide."
        },
        bjarne: {
            img: "images/bjarne.jpg",
            text: "Inventor of C++.\nObject-oriented.\nHigh performance."
        },
        brendan: {
            img: "images/brendan.jpg",
            text: "Inventor of JavaScript.\nWeb scripting language.\nCreated in 1995."
        },
        linus: {
            img: "images/linus.jpg",
            text: "Creator of Linux.\nOpen-source kernel.\nOS innovator."
        },
        john: {
            img: "images/john.jpg",
            text: "Inventor of LISP.\nAI pioneer.\nCoined AI term."
        },
        niklaus: {
            img: "images/niklaus.jpg",
            text: "Inventor of Pascal.\nStructured programming.\nTeaching language."
        },
        ken: {
            img: "images/ken.jpg",
            text: "Co-developer of UNIX.\nCreated B language.\nInfluenced C."
        },
        rasmus: {
            img: "images/rasmus.jpg",
            text: "Inventor of PHP.\nServer-side scripting.\nWeb focused."
        }
    };

    if (select === "") {
        image.src = "";
        details.innerText = "";
        imageBox.style.borderRadius = "50%";
        imageBox.classList.remove("hover-effect");
        return;
    }

    image.src = data[select].img;
    details.innerText = data[select].text;

    //  James Gosling → square + glow + hover
    if (select === "james") {
        imageBox.style.borderRadius = "0";
        imageBox.classList.add("hover-effect");
    } 
    // Others → circle only
    else {
        imageBox.style.borderRadius = "50%";
        imageBox.classList.remove("hover-effect");
    }
}
