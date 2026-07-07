const affChar = {
    imagePath: "images/snortleblat.webp",
    imageAltText: "Snortleblat, the AI-Generated thing",

    name: "Placehold",
    ancestry: "Hume",
    age: 2,
    gender: 'F',
    socialStatus: 6,
    gold: 20.1,     // "Gold" is whole num, "silver" is decimal

    stats:
    {
        class: "Swamp Beast Diplomat",
        level: 5,
        experience: 135,
        
        maxStamina: 24,
        currStamina: 24,
        maxLuck: 12,
        CurrLuck: 12,
        hasmagic: true
    },
    magic:
    {
        magicLevel: 5,
        manaMax: 12,
        manaCurr: 2,

        magicType: "Wizard",
        // Name and mana cost
        spells:
            [
                { "FireBolt": 4 },
                { "Pass Wall": 7 }
            ]
    },

    talents: ["Dodge", "Swash", "Larold"],
    specialSkills: [{ "Magic - Sorcery": 3 }, { "Big Stick": 2 }],

    // IF Inventory Size is over 10 plus Strength x 2, add status effect "Encumbered"
    inventory: ["spear", "health potion", "rope"],
    provisions: 3,

    equipedGear: {
        weapons: [
            { "sword": [1, 2, 3, 4, 5, 6, 7] },
            { "mace": [1, 2, 3, 4, 5, 6, 7] }
        ],
        armor: [
            { "leather pauldron": [1, 2, 3, 4, 5, 6, 7] },
            { "buckler": [0, 0, 0, 1, 1, 1, 2] }
        ]
    },

    // FUNCTIONS
    attacked: function (damage) {
        this.stats.stamina -= damage;
        console.log(`Post-DMG HP = ${this.stats.stamina}`);
        return this.stats.stamina;
    }
}