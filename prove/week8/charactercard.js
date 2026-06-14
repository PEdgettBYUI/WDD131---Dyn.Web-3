const Snortleblat = {
    name: "Grog the Frog",
    stats:
    {
        class: "Swamp Beast Diplomat",
        level: 5,
        health: 100
    },
    imagePath: "images/snortleblat.webp",
    imageAltText: "Snortleblat, the AI-Generated thing",

    attacked: function(damage) {
        this.stats.health -= damage;
        console.log(`Post-DMG HP = ${this.stats.health}`);
        return this.stats.health;
    }
}
characterTemplate(Snortleblat)

function characterTemplate(Character) {
    return document.querySelector(".card").innerHTML += 
        `<img class="image" src=${Character.imagePath} alt=${Character.imageAltText}>
        <p class="name">${Character.name}</p>
        <div class="stats">
            <p>Class: ${Character.stats.class}</p>
            <p>Level: 
                <span id="CurrentLevel">${Character.stats.level}</span>
            </p>
            <p>Health: 
                <span id="CurrentHealth">${Character.stats.health}</span>
            </p>
        </div>
            <button id="AttackedBtn">Attack</button>
            <button id="LevelUpBtn">Level Up</button>`;
}

document.querySelector("#LevelUpBtn").addEventListener("click", function () {
    const currentLevelElement = document.querySelector("#CurrentLevel");
    const currentLevel = parseInt(currentLevelElement.textContent);
    currentLevelElement.textContent = currentLevel + 1;
});

document.querySelector("#AttackedBtn").addEventListener("click", function () {
    // Reduce health on value when Attack is clicked.
    const currentHealthElement = document.querySelector("#CurrentHealth");
    console.log(`Doc's CurrentHP: ${currentHealthElement.textContent}`)
    let PostDamageHP = Snortleblat.attacked(20);
    currentHealthElement.textContent = PostDamageHP

    //If Health is Empty, display Death Message
    AlertUserDeadCharacter(PostDamageHP)
});


function AlertUserDeadCharacter(HP) {
    if(HP <= 0) {
        alert("You Have Perished!")
    }
}