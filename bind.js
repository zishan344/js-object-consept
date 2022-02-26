const student = {
  id: 102,
  money: 5000,
  name: "marouf",
  trithDay: function (expence) {
    this.money = this.money - expence;
    return this.money;
  },
};
const heroAlom = {
  id: 134,
  name: "heroAlom",
  money: 6000,
};
const heroTreatDay = student.trithDay.bind(heroAlom);
console.log(heroTreatDay(100));
const normal = {
  name: "normal",
  id: 233,
  money: 60,
};
const normalTreat = student.trithDay.bind(normal);
console.log(normalTreat(20));
