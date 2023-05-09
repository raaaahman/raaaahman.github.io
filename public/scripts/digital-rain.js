class DOMDisplay {
  constructor(el, cellSize, ratio, density = 'Ñ@#W$9876543210?!abc;:+=-,._ ') {
    this._el = el
    this.cellSize = cellSize
    this.cellRatio = ratio
    this.width = Math.ceil(this._el.offsetWidth / (this.cellSize * this.cellRatio))
    this.height = Math.ceil(this._el.offsetHeight / this.cellSize)
    this.density = density
    
    this._el.style.fontSize = cellSize + 'px'
    this._el.style.lineHeight = cellSize + 'px'
    this._el.style.letterSpacing = 0
  }
  
  draw(values) {    
    if (this._el.hasChildNodes()) this._el.removeChild(this._el.firstChild)
    const text = values.reduce((text, value, index) => {
      let char = this.density.charAt(map(value, 0, 1, 0, this.density.length - 1))
      if (char === '') char = "\ " 
      return text + char + ((index + 1) % this.width === 0 ? "\n" : '')
    }, '')
    this._el.append(document.createTextNode(text))
  }
}

function setup() {
  this.dom = new DOMDisplay(document.querySelector('#background'), 16, 3 / 5)
  console.log(this.dom)
  frameRate(30)
  noCanvas()
}

function organicPattern(width, height) {
  let yoff = 0.0
  let values = []
  for(let i = 0; i < height; i++) {
    let xoff = 0.0
    for(let j = 0; j < width; j++) {
      values[j+i*width] = noise(xoff, yoff, millis() / 10000)
      xoff += 0.1
    }
    yoff += 0.1
  }
  return values
}

function rainPattern(width, height) {
  let values = []
  let yoff = 0.0
  for (let i = 0; i < width; i++) {
    for(let j = 0; j < height; j++) {
      values[i+j*width] = noise(yoff, millis() / 10000)
      yoff += 0.01
    }
  }
  return values
}

function draw() {
  const values = rainPattern(this.dom.width, this.dom.height)
   
  this.dom.draw(values)
}