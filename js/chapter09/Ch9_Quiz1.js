class pet {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  run () {
    alert(`${this.name} is running, and color is ${this.color}`);
  }
}

const dogg = new pet("DoggCoin", "To The Moon");

dogg.run();