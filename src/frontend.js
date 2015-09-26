function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function onPet()
{
    var result = gameState.hamster.pet();
    if (result) game.sound.play("pet");
}

function onSleep()
{
    var result = gameState.hamster.sleep();
    if (result) game.sound.play("sleep");
}

function onToilet()
{
    var result = gameState.hamster.toilet();
    if (result) game.sound.play("toilet");
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
    var result = gameState.hamster.feed(burger);
    if (result) game.sound.play("burger");
}

function onVegan()
{
    var result = gameState.hamster.feed(waffles);
    if (result) game.sound.play("waffles");
}

function onBeer()
{
    var result = gameState.hamster.feed(beer);
    if (result) game.sound.play("beer");
}

function onEdamame()
{
    var result = gameState.hamster.feed(edamame);
    if (result) game.sound.play("edamame");
}

function onSweets()
{
    var result = gameState.hamster.feed(sweets);
    if (result) game.sound.play("sweets");
}

function onQuinoa()
{
    var result = gameState.hamster.feed(quinoa);
    if (result) game.sound.play("quinoa");
}

function onDoener()
{
    var result = gameState.hamster.feed(doner);
    if (result) game.sound.play("doner");
}