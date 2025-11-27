const audio = [
    { key: "Q", audio: 24 },
    { key: "W", audio: 29 },
    { key: "E", audio: 36 },
    { key: "R", audio: 41 },
    { key: "T", audio: 48 },
    { key: "Y", audio: 53 },
    { key: "U", audio: 60 },
    { key: "I", audio: 64 },
    { key: "O", audio: 65 },
    { key: "1", audio: 69 },
    { key: "2", audio: 72 },
    { key: "3", audio: 77 },
    { key: "4", audio: 79 },
    { key: "5", audio: 84 },
    { key: "6", audio: 96 },
    { key: "7", audio: 65 },
];
document.addEventListener("keydown", (event) => {
    audio.forEach((val) => {
        if (val.key === event.key.toUpperCase()) {
            let sound = new Audio(`./audio/${val.audio}.mp3`);
            sound.play();
        }
    });
});
export {};
