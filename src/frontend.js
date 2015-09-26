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
    gameState.hamster.feed(new burger());
}

function onVegan()
{
    gameState.hamster.feed(new waffles());
}

function onBeer()
{
    gameState.hamster.feed(new beer());
}

function onEdamame()
{
    gameState.hamster.feed(new edemame());
}

function onSweets()
{
    gameState.hamster.feed(new sweets());
}

function onQuinoa()
{
    gameState.hamster.feed(new quinoa());
}

function onDoener()
{
    gameState.hamster.feed(new doner());
}