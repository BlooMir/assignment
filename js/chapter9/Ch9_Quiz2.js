class pet {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  run () {
    alert(`${this.name} is running, and color is ${this.color}`);
  }
}

class Cat extends pet {
  constructor(name, breed, color){
    super(name, color);
    this.breed = breed;
  }
  viewInfo(){
    alert(`이름 : ${this.name} 품종 : ${this.breed} 색깔 : ${this.color}`);
  }
}

const meow = new Cat("삼색이", "코리얀숏헤어", "삼색");

meow.viewInfo();