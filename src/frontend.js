function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function onPet()
{
    gameState.hamster.pet();
    game.sound.play("pet");
}

function onSleep()
{
    gameState.hamster.sleep();
    game.sound.play("sleep");
}

function onToilet()
{
    gameState.hamster.toilet();
    game.sound.play("toilet");
}

function onClubbing()
{
    var chance = randomInt(0,100);
    var music = (chance < 60) ? indieMusic : popMusic;
    console.log(music.name);


    var result = gameState.hamster.clubbing(music);
    if (result) {
        if (music == popMusic) {
            game.sound.play("popmusic");
        }
    }
}

function onBurger()
{
    gameState.hamster.feed(burger);
    game.sound.play("burger");
}

function onVegan()
{
    gameState.hamster.feed(waffles);
    game.sound.play("waffles");
}

function onBeer()
{
    gameState.hamster.feed(beer);
    game.sound.play("beer");
}

function onEdamame()
{
    gameState.hamster.feed(edamame);
    game.sound.play("edamame");
}

function onSweets()
{
    gameState.hamster.feed(sweets);
    game.sound.play("sweets");
}

function onQuinoa()
{
    gameState.hamster.feed(quinoa);
    game.sound.play("quinoa");
}

function onDoener()
{
    gameState.hamster.feed(doner);
    game.sound.play("doner");
}