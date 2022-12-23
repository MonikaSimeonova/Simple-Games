function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);
    const state = {
        player: 'Moni',

        wizard: {
            width: 100,
            height: 82,
            posX: startX,
            posY: startY,
            speed: 10,

        },
        keys: {}
    }
    return state;

}