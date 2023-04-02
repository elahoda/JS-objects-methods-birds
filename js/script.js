const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 4, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  },
  eat: function () {
    if (this.hungerScale === 0) {
      return `${this.name} is not hungry anymore`;
    } else {
      this.hungerScale -= 1;
      return `Nom, nom, nom, yum`;
    }
  }
};

bird.eat();
console.log(bird.eat());
//console.log(bird.isHappy());

bird.eat();
console.log(bird.eat());
//console.log(bird.isHappy());

bird.eat();
console.log(bird.eat());
//console.log(bird.isHappy());
