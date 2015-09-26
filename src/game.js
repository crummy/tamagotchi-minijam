var gameState = {
    tickCount: 0,
    hamster: new Hamster()
};


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

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

Hipstergotchi.Game.prototype =
{
    create: function () {
        this.game.stage.backgroundColor = '#6688ee';

        this.game.time.events.loop(Phaser.Timer.SECOND, this.tick, this);
    },

    update: function () {
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
        gameState.tickCount++;

        gameState.hamster.tick();
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

