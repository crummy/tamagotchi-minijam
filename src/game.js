var gameState = {
    tickCount: 0,
    gameRunning: true,
    hamster: new Hamster()
};

var happyMusic;
var unhappyMusic;
var clubMusic;
var popMusic;


Hipstergotchi.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    this.hamsterHappy = undefined;
    this.hamsterDancing = undefined;
    this.hamsterDead = undefined;
    this.hamsterShitting = undefined;
    this.hamsterUnhappy = undefined;
    this.hamsterSleeping = undefined;

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

Hipstergotchi.Game.prototype =
{
    create: function () {
        this.game.stage.backgroundColor = '#6688ee';
        this.game.time.events.loop(Phaser.Timer.SECOND / 2, this.tick, this);
        this.game.add.tileSprite(0, 0, 1000, 600, 'background');

        this.hamsterHappy = this.add.sprite(250, 250, 'guineaPigNormal');
        this.hamsterDancing = this.add.sprite(250, 250, 'guineaPigDancing');
        this.hamsterDead = this.add.sprite(250, 250, 'guineaPigDead');
        this.hamsterShitting = this.add.sprite(250, 250, 'guineaPigShitting');
        this.hamsterUnhappy = this.add.sprite(250, 250, 'guineaPigSad');
        this.hamsterSleeping = this.add.sprite(250, 250, 'guineaPigSleep');

        this.hamsterHappy.anchor.set(0.5,0.5);
        this.hamsterDancing.anchor.set(0.5,0.5);
        this.hamsterDead.anchor.set(0.5,0.5);
        this.hamsterShitting.anchor.set(0.5,0.5);
        this.hamsterUnhappy.anchor.set(0.5,0.5);
        this.hamsterSleeping.anchor.set(0.5,0.5);

        this.hamsterHappy.visible = false;
        this.hamsterDancing.visible = false;
        this.hamsterDead.visible = false;
        this.hamsterShitting.visible = false;
        this.hamsterUnhappy.visible = false;
        this.hamsterSleeping.visible = false;

        this.hamsterDancing.animations.add('anim');
        this.hamsterHappy.animations.add('anim');
        this.hamsterDancing.animations.add('anim');
        this.hamsterUnhappy.animations.add('anim');
        this.hamsterShitting.animations.add('anim');
        this.hamsterSleeping.animations.add('anim');

        this.hamsterDancing.play('anim', 3, true);
        this.hamsterHappy.play('anim', 3, true);
        this.hamsterDancing.play('anim', 3, true);
        this.hamsterUnhappy.play('anim', 2, true);
        this.hamsterShitting.play('anim', 3, true);
        this.hamsterSleeping.play('anim', 2, true);
        
        happyMusic = game.add.audio("happy")
        happyMusic.play();
        happyMusic.volume = 0;
        unhappyMusic = game.add.audio("unhappy")
        unhappyMusic.play();
        unhappyMusic.volume = 0;
        clubMusic = game.add.audio("clubbing").play().volume = 0;
        popMusic = game.add.audio("popmusic").play().volume = 0;
        
    },

    update: function () {
        if(gameState.gameRunning == false) return;
        this.updateUI();
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        //this.state.start('');

    },

    tick: function()
    {
        if(gameState.gameRunning == false) return;

        gameState.tickCount++;

        var result = gameState.hamster.tick();
        if (result == DEAD_STATE) {
            popMusic.volume = 0;
            unhappyMusic.volume = 0;
            clubMusic.volume = 0;
            happyMusic.volume = 0;
        } else if (happyMusic.volume == 0 && unhappyMusic.volume == 0 && result != DANCING_STATE) {
            popMusic.volume = 0;
            unhappyMusic.volume = 0;
            clubMusic.volume = 0;
            happyMusic.volume = 1;
        } else if (result == HAPPY_STATE) {
            happyMusic.volume = 1;
            unhappyMusic.volume = 0;
        } else if (result == UNHAPPY_STATE) {
            happyMusic.volume = 0;
            unhappyMusic.volume = 1;
        }

        console.log(result);

        switch(result)
        {
            case HAPPY_STATE:
                this.hamsterHappy.visible = true;
                this.hamsterDancing.visible = false;
                this.hamsterDead.visible = false;
                this.hamsterShitting.visible = false;
                this.hamsterUnhappy.visible = false;
                this.hamsterSleeping.visible = false;
                break;
            case UNHAPPY_STATE:
                this.hamsterHappy.visible = false;
                this.hamsterDancing.visible = false;
                this.hamsterDead.visible = false;
                this.hamsterShitting.visible = false;
                this.hamsterUnhappy.visible = true;
                this.hamsterSleeping.visible = false;
                gameState.hamster.health -= 1;
                break;
            case DEAD_STATE:
                this.hamsterHappy.visible = false;
                this.hamsterDancing.visible = false;
                this.hamsterDead.visible = true;
                this.hamsterShitting.visible = false;
                this.hamsterUnhappy.visible = false;
                this.hamsterSleeping.visible = false;
                this.onGameOver();
                break;
            case DANCING_STATE:
                this.hamsterHappy.visible = false;
                this.hamsterDancing.visible = true;
                this.hamsterDead.visible = false;
                this.hamsterShitting.visible = false;
                this.hamsterUnhappy.visible = false;
                this.hamsterSleeping.visible = false;
                break;
            case SHITTING_STATE:
                this.hamsterHappy.visible = false;
                this.hamsterDancing.visible = false;
                this.hamsterDead.visible = false;
                this.hamsterShitting.visible = true;
                this.hamsterUnhappy.visible = false;
                this.hamsterSleeping.visible = false;
                this.addShit();
                break;
            case SLEEPING_STATE:
                this.hamsterHappy.visible = false;
                this.hamsterDancing.visible = false;
                this.hamsterDead.visible = false;
                this.hamsterShitting.visible = false;
                this.hamsterUnhappy.visible = false;
                this.hamsterSleeping.visible = true;
                break;
        }
    },

    onGameOver: function()
    {
        gameState.gameRunning = false;
        var tickCounter = document.getElementById("tickCount");
        tickCounter.style.fontSize = "xx-large";
        tickCounter.textContent = "It's dead :( You scored points: " + gameState.tickCount;
    },

    destroyPoop: function(sprite)
    {
        gameState.tickCount += 10;
        sprite.destroy();
    },

    addShit: function()
    {
        var x = randomInt(0,500);
        var y = randomInt(0,500);

        var poop = this.add.sprite(x, y, 'poop');
        poop.anchor.set(0.5,0.5);
        poop.inputEnabled = true;
        poop.input.useHandCursor = true; //if you want a hand cursor
        poop.events.onInputDown.add(this.destroyPoop, this);
    },

    updateUI: function()
    {
        var tickCounter = document.getElementById("tickCount");
        var hungerBar = document.getElementById("hungerBar");
        var happinessBar = document.getElementById("happinessBar");
        var healthBar = document.getElementById("healthBar");

        tickCounter.textContent = gameState.tickCount;
        hungerBar.value = gameState.hamster.hunger;
        happinessBar.value = gameState.hamster.energy;
        healthBar.value = gameState.hamster.health;
    }
};

