//main code here please

import p5 from 'p5'
import {features}  from './features'
import {randomInt, randomPick} from './helpers'

const sketch = (p) => {
    p.setup = () => {
        console.log($fxhashFeatures)
        p.createCanvas(window.innerWidth, window.innerHeight)
    }

    p.draw = () => {
        p.background(features.bg)
        p.fill(features.fg)
        p.circle(p.width/2, p.height/2, p.width/3)
    }

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight)
    }
}

const sketchInstance = new p5(sketch)