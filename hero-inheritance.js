// Kelas dasar atau super class
class Hero {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  // Metode untuk menyerang pahlawan lain
  attackHero(targetHero) {
    console.log(`${this.name} menyerang ${targetHero.name} dengan ${this.attack} poin serangan.`);
    targetHero.receiveDamage(this.attack);
  }

  // Metode untuk menerima serangan dari pahlawan lain
  receiveDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} menerima ${damage} poin kerusakan. Kesehatan sekarang: ${this.health}`);
  }

  // Metode untuk menyembuhkan diri sendiri
  heal(amount) {
    this.health += amount;
    console.log(`${this.name} menyembuhkan diri dengan ${amount} poin. Kesehatan sekarang: ${this.health}`);
  }
}

// Kelas turunan atau sub class inilah implementasi pewarisan
class SuperHero extends Hero {
  constructor(name, health, attack, superpower) {
    super(name, health, attack);
    this.superpower = superpower;
  }

  // Metode untuk menggunakan kekuatan super
  useSuperpower() {
    console.log(`${this.name} menggunakan kekuatan super: ${this.superpower}`);
  }
}

// Membuat dua objek pahlawan
const hero1 = new Hero("Pahlawan 1", 100, 10);
const hero2 = new SuperHero("Pahlawan 2", 150, 15, "Terbang");

// Pahlawan 1 menyerang Pahlawan 2
hero1.attackHero(hero2);

// Pahlawan 2 menggunakan kekuatan super
hero2.useSuperpower();

// Pahlawan 2 menyembuhkan diri
hero2.heal(20);
console.log(`Kesehatan akhir ${hero1.name}: ${hero1.health}`);
console.log(`Kesehatan akhir ${hero2.name}: ${hero2.health}`);
