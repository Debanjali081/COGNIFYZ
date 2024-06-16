alert("Hello I am a cute baby click the button to the color !!!!")



function RandomColor() {
    let col1 = Math.ceil(0 + Math.random() * 255);
    let col2 = Math.ceil(0 + Math.random() * 255);
    let col3 = Math.ceil(0 + Math.random() * 255);
    let randomColor = `rgb(${col1},${col2},${col3})`;

    const button = document.querySelector('button');
    button.style.backgroundColor = randomColor;
}
