/**
 * Функция-конструктор, представляющая предмет.
 * @param {string} name - Название предмета.
 * @param {number} weight - Вес предмета.
 * @param {string} rarity - Редкость предмета (может быть "common", "uncommon", "rare" или "legendary").
 */
function Item(name, weight, rarity) {
    this.name = name;
    this.weight = weight;

    // Проверка редкости предмета
    const validRarities = ["common", "uncommon", "rare", "legendary"];
    if (!validRarities.includes(rarity)) {
        this.rarity = "no such rarity";
    } else {
        this.rarity = rarity;
    }
}

/**
 * Получает информацию о предмете.
 * @returns {string} Строка с информацией о предмете.
 */
Item.prototype.getInfo = function() {
    return `name: ${this.name}\nweight: ${this.weight}\nrarity: ${this.rarity}\n`;
};

/**
 * Обновляет вес предмета.
 * @param {number} newWeight - Новый вес предмета.
 */
Item.prototype.setWeight = function(newWeight) {
    this.weight = newWeight;
};

/**
 * Функция-конструктор, представляющая оружие, наследующий от Item.
 * @param {string} name - Название оружия.
 * @param {number} weight - Вес оружия.
 * @param {string} rarity - Редкость оружия.
 * @param {number} damage - Урон оружия.
 * @param {number} durability - Прочность оружия (от 0 до 100).
 */
function Weapon(name, weight, rarity, damage, durability) {
    Item.call(this, name, weight, rarity);  // Наследование от Item
    this.damage = damage;

    // Проверка прочности
    if (durability >= 0 && durability <= 100) {
        this.durability = durability;
    } else {
        this.durability = "no such durability";
    }
}

// Наследование прототипа Item
Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;

/**
 * Получает информацию об оружии.
 * @returns {string} Строка с описанием оружия.
 */
Weapon.prototype.getInfo = function() {
    return `${Item.prototype.getInfo.call(this)}damage: ${this.damage}\ndurability: ${this.durability}\n`;
};

/**
 * Использует оружие, снижая прочность на 10.
 */
Weapon.prototype.use = function() {
    if (this.durability > 0 && typeof this.durability === "number") {
        this.durability -= 10;
    }
};

/**
 * Ремонтирует оружие, восстанавливая прочность до 100.
 */
Weapon.prototype.repair = function() {
    if (typeof this.durability === "number") {
        this.durability = 100;
    }
};

// Пример использования:
// Создание нескольких объектов Item и Weapon для проверки
const sword = new Item("Healing Potion", 0.5, "common");
const scroll = new Item("Scroll of Wisdom", 0.2, "legendary");

const swordWeapon = new Weapon("Iron Sword", 3.0, "uncommon", 25, 80);
const axe = new Weapon("Battle Axe", 5.0, "rare", 40, 100);

// Проверка методов класса Item
console.log(sword.getInfo());
sword.setWeight(0.6);
console.log("After weight update:");
console.log(sword.getInfo());

console.log(scroll.getInfo());

// Проверка методов класса Weapon
console.log(swordWeapon.getInfo());
swordWeapon.use();
console.log(`Durability after use: ${swordWeapon.durability}`);
swordWeapon.repair();
console.log(`Durability after repair: ${swordWeapon.durability}`);

console.log(axe.getInfo());
axe.use();
axe.use();
console.log(`Axe durability after two uses: ${axe.durability}`);