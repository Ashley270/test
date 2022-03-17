const pelette1 = document.getElementById('pelette1')
const pelette2 = document.getElementById('pelette2')

let hexColor = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'
]

const colorDisplay1 = document.getElementById('color1')
const colorDisplay2 = document.getElementById('color2')

window.addEventListener('keydown', e => {
    if (e.keyCode == 32) {
        let hex = '#'
        for (i = 0; i < 6; i++) {
            let randomColor = Math.floor(Math.random() * hexColor.length);
            hex += hexColor[randomColor];
            pelette1.style.backgroundColor = hex;
            pelette2.style.backgroundColor = hex;
            colorDisplay1.innerHTML = hex;
            colorDisplay2.innerHTML = hex;
        }
    }
})

window.addEventListener('keydown', e => {
    if (e.keyCode == 32) {
        let hex = '#'
        for (i = 0; i < 6; i++) {
            let randomColor = Math.floor(Math.random() * hexColor.length);
            hex += hexColor[randomColor];
            pelette2.style.backgroundColor = hex;
            colorDisplay2.innerHTML = hex;
        }
    }
})
