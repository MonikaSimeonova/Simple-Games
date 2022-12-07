function initState() {

    let posX = 0;
    let posY = Math.floor(Math.random() * 1000)
    return {
        player: 'Monik',
        score: 0,
        wizard: {
            width: 82,
            height: 100,
            posY,
            posX,
            speed: 10,
    
        },
        keys: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
        }
    }
}