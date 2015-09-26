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
    alert("not implemented");
}

function onVegan()
{
}

function onBeer()
{
        alert("blah");
}

function onEdamame()
{
        alert("blah");
}

function onSweets()
{
        alert("blah");
}

function onQuinoa()
{
        alert("blah");
}

function onDoener()
{
        alert("blah");
}