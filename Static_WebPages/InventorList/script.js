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
        details.innerText = "Select an Inventor";
        // Ensure style is reset if nothing is selected
        imageBox.classList.remove("james-mode");
        return;
    }

    // Set Image and Text
    image.src = data[select].img;
    details.innerText = data[select].text;

    // --- LOGIC CHANGE HERE ---
    if (select === "james") {
        // If James, add the class (Square + Blue Shadow)
        imageBox.classList.add("james-mode");
    } 
    else {
        // For everyone else, remove the class (Back to Circle + No Shadow)
        imageBox.classList.remove("james-mode");
    }
}