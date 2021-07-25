const colours = ["#ff0a54","#ff477e","#ff5c8a","#ff7096","#ff85a1","#ff99ac","#fbb1bd","#f9bec7","#f7cad0","#fae0e4", "#fec5bb", "#fcd5ce", "#fae1dd", "#f8edeb", "#e8e8e4", "#d8e2dc", "#ece4db", "#ffe5d9", "#ffd7ba", "#fec89a", "#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8", "#d8f3dc", "#b7e4c7", "#95d5b2", "#74c69d", "#52b788", "#40916c", "#2d6a4f", "#1b4332", "#081c15", "#10002b", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff", "#f3c4fb", "#ffcbf2", "#ecbcfd", "#e5b3fe", "#e2afff", "#deaaff", "#d8bbff", "#d0d1ff", "#c8e7ff", "#c0fdff"].sort(() => Math.random() - 0.5);

const getRandColour = () => {
    return colours[Math.floor(Math.random() * (colours.length * 100)) % colours.length]
}

export default getRandColour