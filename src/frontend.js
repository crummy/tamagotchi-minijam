function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function onPet()
{
    gameState.hamster.pet();
}

function onSleep()
{
    gameState.hamster.sleep();
}

function onToilet()
{
    gameState.hamster.toilet();
}

function onClubbing()
{
    var chance = randomInt(0,100);
    var music = (chance < 60) ? indieMusic : popMusic;
    console.log(music.name);

    gameState.hamster.clubbing(music);
}

function onBurger()
{
    gameState.hamster.feed(burger);
}

function onVegan()
{
    gameState.hamster.feed(waffles);
}

function onBeer()
{
    gameState.hamster.feed(beer);
}

function onEdamame()
{
    gameState.hamster.feed(edamame);
}

function onSweets()
{
    gameState.hamster.feed(sweets);
}

function onQuinoa()
{
    gameState.hamster.feed(quinoa);
}

function onDoener()
{
    gameState.hamster.feed(doner);
}