const student = {
  id: 102,
  money: 5000,
  name: "marouf",
  trithDay: function (expence) {
    this.money = this.money - expence;
    console.log(this);
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
// console.log(normalTreat(20));
student.trithDay.call(heroAlom, 1000);
student.trithDay.apply(heroAlom, [100]);
