# Noroc_Eugeniu  
# Лабораторная работа №3. Продвинутые объекты в JavaScript
  
## Цель работы  
изучение работы с классами и объектами в JavaScript. Проект моделирует систему инвентаря, в которой можно:  
- Создавать предметы и оружие.  
- Управлять их свойствами.  
- Выполнять действия, такие как использование оружия и его ремонт.  

## Условие  
Процесс работы состоит из следующих шагов:  
- Создание класса **Item**, представляющего предмет.  
- Создание класса **Weapon**, наследующего от **Item**, с дополнительными свойствами и методами.  
- Тестирование работы методов классов.
  
## Шаг 1. Создание класса Item  
Создайте класс Item, который будет представлять предмет в инвентаре.  

### Поля класса:  
- name – название предмета.  
- weight – вес предмета.  
- rarity – редкость предмета (common, uncommon, rare, legendary).  
### Методы:  
- getInfo() – возвращает строку с информацией о предмете.  
- setWeight(newWeight) – изменяет вес предмета.  
```js
/**
 * Функция-конструктор, представляющая предмет.
 * @param {string} name - Название предмета.
 * @param {number} weight - Вес предмета.
 * @param {string} rarity - Редкость предмета (common, uncommon, rare, legendary).
 */
function Item(name, weight, rarity) {
    this.name = name;       // поле name – название предмета
    this.weight = weight;   // поле weight – вес предмета

    // Проверка редкости предмета
    const validRarities = ["common", "uncommon", "rare", "legendary"];
    if (!validRarities.includes(rarity)) {
        this.rarity = "no such rarity";
    } else {
        this.rarity = rarity;  // поле rarity – редкость предмета
    }
}

/**
 * Метод getInfo() – возвращает строку с информацией о предмете.
 */
Item.prototype.getInfo = function() {
    return `name: ${this.name}\nweight: ${this.weight}\nrarity: ${this.rarity}\n`;
};

/**
 * Метод setWeight(newWeight) – изменяет вес предмета.
 */
Item.prototype.setWeight = function(newWeight) {
    this.weight = newWeight;
};
```  

## Шаг 2. Создание класса Weapon  
Создайте класс Weapon, который расширяет Item.  
### Дополнительные поля:  
- damage – урон оружия.  
- durability – прочность (от 0 до 100).  
### Методы:  
- use() – уменьшает durability на 10 (если durability > 0).
- repair() – восстанавливает durability до 100.  
```js
/**
 * Функция-конструктор, представляющая оружие, наследующий от Item.
 * @param {string} name - Название оружия.
 * @param {number} weight - Вес оружия.
 * @param {string} rarity - Редкость оружия.
 * @param {number} damage - Урон оружия.
 * @param {number} durability - Прочность оружия (от 0 до 100).
 */
function Weapon(name, weight, rarity, damage, durability) {
    Item.call(this, name, weight, rarity);  // Наследуем свойства от Item

    this.damage = damage;  // поле damage – урон оружия

    // Проверка и установка прочности
    if (durability >= 0 && durability <= 100) {
        this.durability = durability;  // поле durability – прочность
    } else {
        this.durability = "no such durability";
    }
}

// Устанавливаем прототипное наследование от Item
Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;

/**
 * Метод use() – уменьшает прочность на 10, если больше 0.
 */
Weapon.prototype.use = function() {
    if (this.durability > 0 && typeof this.durability === "number") {
        this.durability -= 10;
    }
};

/**
 * Метод repair() – восстанавливает прочность до 100.
 */
Weapon.prototype.repair = function() {
    if (typeof this.durability === "number") {
        this.durability = 100;
    }
};
```
## Шаг 3. Тестирование  
### Создайте несколько объектов классов Item и Weapon.  
```js
// Создание нескольких объектов Item и Weapon для проверки
const sword = new Item("Healing Potion", 0.5, "common");
const scroll = new Item("Scroll of Wisdom", 0.2, "legendary");

const swordWeapon = new Weapon("Iron Sword", 3.0, "uncommon", 25, 80);
const axe = new Weapon("Battle Axe", 5.0, "rare", 40, 100);
```
### Вызовите их методы, чтобы убедиться в правильности работы.  
```js
// Проверка методов класса Item
console.log("=== Item Info ===");
console.log(sword.getInfo());
sword.setWeight(0.6);
console.log("\nAfter weight update:");
console.log(sword.getInfo());

console.log("\n" + scroll.getInfo());

// Проверка методов класса Weapon
console.log("=== Weapon Info ===");
console.log(swordWeapon.getInfo());
swordWeapon.use();
console.log(`Durability after use: ${swordWeapon.durability}`);
swordWeapon.repair();
console.log(`Durability after repair: ${swordWeapon.durability}`);

console.log("\n" + axe.getInfo());
axe.use();
axe.use();
console.log(`Axe durability after two uses: ${axe.durability}`);
```
![image](https://github.com/user-attachments/assets/a3281582-ca73-43eb-a7dc-c0cb8a10b0b2)

## Шаг 4. Дополнительное задание  
### Опциональная цепочка (?.) – используйте ее при доступе к свойствам объекта, чтобы избежать ошибок.  
```js
Weapon.prototype.use = function() {
    // Проверка на существование this.durability и проверка на undefined и не null, а также проверка больше ли прочность 0
    if (this.durability?. > 0) {
        this.durability -= 10;
    }
};
```
### Создание функции-конструктора:  
Перепишите классы Item и Weapon, используя функции-конструкторы вместо class.  
Функция-конструктор `Item`  
```js
function Item(name, weight, rarity) {
    this.name = name;
    this.weight = weight;

    const validRarities = ["common", "uncommon", "rare", "legendary"];
    if (!validRarities.includes(rarity)) {
        this.rarity = "no such rarity";
    } else {
        this.rarity = rarity;
    }
}
```  
```js
const sword = new Item("Steel Sword", 3.5, "rare");
```  
Функция-конструктор `Weapon`  
```js
function Weapon(name, weight, rarity, damage, durability) {
    Item.call(this, name, weight, rarity); // Наследуем свойства от Item

    this.damage = damage;

    if (durability >= 0 && durability <= 100) {
        this.durability = durability;
    } else {
        this.durability = "no such durability";
    }
}
```  
```js
const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
```  
