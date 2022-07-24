/* eslint-disable */

// TULIS ANALISA ANDA DIBAWAH

// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
/* Muncul ini:
fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
fun2 {}

 */
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
/*
Tidak sama gitu lo..
*/

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
/*
a. Pada normal function, keyword this akan mengembalikan isi dari obj
b. Pada arrow function, keyword this akan mengembalikan isi dari fungsi panah itu sendiri
Jika kode diubah seperti berikut:
const obj = {
  id: 1,
  fun1: function () {
    console.log('fun1', this.id);
  },
  fun2: () => {
    this.id = 2;
    console.log('fun2', this.id);
  },
};

Maka yang muncul setelah kode dijalankan:
fun1 1
fun2 2

Jadi perbedaan keyword this pada:
1. Normal function mengarah ke scope obj / scope dimana fungsi dibuat
2. Arrow function mengarah ke scope fungsinya sendiri
*/

const obj = {
  fun1: function () {
    console.log('fun1', this.id);
  },
  fun2: () => {
    console.log('fun2', this);
  },
};

obj.fun1();
obj.fun2();

// Soal - 02
// Kalian diminta untuk membuat sebuah analisa terhadap beberapa pertanyaan dibawah:

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/*
Pada OOP Encapsulation adalah cara untuk membuat fungsi hanya bisa dipakai di dalam class
  atau variabel tidak bisa diakses langsung harus dengan fungsi get / set
  pada javascript untuk membuat fungsi atau variabel bersifat private menggunakan prefix #
*/
class Animal {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  getAge() {
    return this.#age;
  }

  setAge(name) {
    this.#age = name;
  }

  printInfo() {
    console.log(`Animal name: ${this.#name}`);
    console.log(`Animal age: ${this.#age}`);
  }

  #printHello() {
    console.dir(`Hello from ${this.#name}!`);
  }

  sayHello() {
    this.#printHello();
  }
}

const ani = new Animal('Ani', 25);
const aniName = ani.getName();
console.log(aniName);
ani.setName('NewAni');
const newAniName = ani.getName();
console.log(newAniName);
ani.sayHello();

// console.log(ani.#name); // SyntaxError
// console.log(ani.#age); // SyntaxError
// ani.#printHello(); // SyntaxError

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/*
Abstraction pada OOP adalah menyembunyikan proses/kode yang diperlukan untuk melakukakn sesuatu
 */

// misal untuk menampilkan info tidak perlu membuat baris kode manual seperti ini
console.log(`Animal name: ${ani.getName()}`);
console.log(`Animal age: ${ani.getAge()}`);
// tinggal memanggil fungsi terkait
ani.printInfo();

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/*
Inheritance pada OOP adalah pewarisan atribut / properti / nilai dari class lain
*/

class Cat extends Animal {
  #mew;
  constructor(name, age, mew) {
    super(name, age);
    this.#mew = mew;
  }

  setMew(mew) {
    this.#mew = mew;
  }

  mewing() {
    if (this.#mew) {
      console.log('Meowwww!');
      return;
    }

    console.log('...');
  }
}

// class Cat mewarisi class Animal
// sehingga class Cat juga memiliki:
// properti: name, age
// fungsi: getName, setName, getAge, setAge, printInfo, printHello, sayHello
const katie = new Cat('Katie', 3, false);
katie.mewing();
katie.setMew(true);
katie.mewing();
katie.printInfo();
katie.sayHello();

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*
Polymorphism adalah konsep pada OOP dimana suatu fungsi pada class bisa memiliki
bentuk / proses / kode yang berbeda
*/

class Dog extends Animal {
  constructor(name, age, mew) {
    super(name, age);
  }

  // menambah kode pada fungsi setName
  setName(name) {
    const dogName = `Doggo ${name}`;
    super.setName(dogName);
  }
}

class Dog2 extends Animal {
  constructor(name, age, mew) {
    super(name, age);
  }

  // mengganti fungsi setName dengan kode baru
  setName(name) {
    console.log(`Fungsi setName: ${name}`);
  }
}

const dog = new Dog('Don', '3');
const dog2 = new Dog2('Jon', 1);
console.log(dog.getName());
console.log(dog2.getName());
dog.setName('Kan');
dog2.setName('Gan'); // muncul pesan Fungsi setName: Gan
console.log(dog.getName()); // nilai menjadi Kan
console.log(dog2.getName()); // nilai tetap Jon

// Soal 3

class Phone {
  #brand;
  #storage;
  #ram;

  constructor(brand, storage, ram) {
    this.#brand = brand;
    this.#storage = storage;
    this.#ram = ram;
  }

  getBrandName() {
    return this.#brand;
  }

  setBrandName(brand) {
    this.#brand = brand;
  }

  printSpecification() {
    console.log(`Ponsel ini memiliki storage: ${this.#storage} dan ram: ${this.#ram}`);
  }

  setSpecification(storage, ram) {
    this.#storage = storage;
    this.#ram = ram;
  }
}

const phone = new Phone('Skilvul Mobile co', 64, 4);

console.log(phone.getBrandName());
phone.setBrandName('SM.co');
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

class Course {
  subject;
  quota;
  attendance;

  constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }

  getSubject() {
    return this.subject;
  }

  getAttendance() {
    return this.attendance;
  }

  decreaseQuota() {
    this.quota -= 1;
  }
}

class CourseOffering {
  course;
  grade;
  attendance;

  constructor(course, grade = 0, attendance = 0) {
    this.course = course;
    this.grade = grade;
    this.attendance = attendance;
  }

  setGrade(grade) {
    this.grade = grade;
  }

  setAttendance() {
    this.attendance += 1;
  }

  getAttendance() {
    return this.attendance;
  }

  getCourse() {
    return this.course;
  }
}

class Student {
  name;
  gender;
  courseOfferings;

  constructor(name, gender, courseOfferings = []) {
    this.name = name;
    this.gender = gender;
    this.courseOfferings = courseOfferings;
  }

  getCourseOffering(course) {
    let index = -1;
    const courseFound = this.courseOfferings.forEach((item, idx) => {
      if (item.getCourse().getSubject() === course.getSubject()) {
        index = idx;
      }
    });

    return index;
  }

  takeNewCourse(course) {
    const courseFound = this.getCourseOffering(course);
    if (courseFound === -1) {
      this.courseOfferings.push(new CourseOffering(course));
      course.decreaseQuota();
    }
  }

  courseAttendance(course) {
    const studentCourse = this.getCourseOffering(course);
    this.courseOfferings[studentCourse].setAttendance();
  }

  courseTest(course) {
    const theCourse = this.getCourseOffering(course);
    if (this.courseOfferings[theCourse].getAttendance() >= course.getAttendance()) {
      this.courseOfferings[theCourse].setGrade(Math.round(Math.random() * 100));
    } else {
      console.log('please fill your absent');
    }
  }
}

biology = new Course('biology', 10, 3);
physics = new Course('physics', 10, 2);
const johnWatson = new Student('john watson', 'male');

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.courseTest(biology);
johnWatson.courseTest(physics);

console.log(johnWatson.courseOfferings);
