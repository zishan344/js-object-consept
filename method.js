const student = {
  id: 102,
  money: 5000,
  name: "marouf",
  subject: ["bangla", "english", "math", "quran"],
  major: "math",
  isRish: false,
  bestFriend: {
    name: "habibul",
    subject: ["bangla", "english", "math", "quran"],
    major: "math",
  },
  takExam: function () {
    console.log(this.name, "is a good boy");
  },
  trithDay: function (expence, boksis) {
    this.money = this.money - expence - boksis;
    return this.money;
  },
};
console.log(student.trithDay(800, 100));
console.log(student.trithDay(800, 100));
console.log(student.trithDay(800, 100));
