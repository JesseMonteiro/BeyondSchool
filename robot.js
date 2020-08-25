class Robot {
    constructor(name = 'Nanashi', x = 0, y = 0) {
        this.name = name
        this.x = x
        this.y = y
    }

    walkForward() {
        this.x++
    }

    walkBackward() {
        this.x--
    }

    teleport(x, y) {
        this.x = x
        this.y = y
    }

    getPos() {
        return [this.x, this.y]
    }
}

module.exports = Robot