Hipstergotchi.Preloader = function (game) {

    this.background = null;
    this.preloadBar = null;

    this.ready = false;

};

Hipstergotchi.Preloader.prototype = {

    preload: function () {

        //	These are the assets we loaded in Boot.js
        //	A nice sparkly background and a loading progress bar
        this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

        //	This sets the preloadBar sprite as a loader sprite.
        //	What that does is automatically crop the sprite from 0 to full-width
        //	as the files below are loaded in.
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('replace', 'gfx/replace.png');
        this.load.spritesheet('guineaPigIdle', 'gfx/guineapig_eyeClosing.png', 160, 160, 3);
        this.load.spritesheet('guineaPigDancing', 'gfx/guineapig_dancing.png', 160, 160, 3);
        this.load.spritesheet('guineaPigNormal', 'gfx/guineapig_happy.png', 160, 160, 3);
        this.load.spritesheet('guineaPigSad', 'gfx/guineapig_sad.png',160, 160, 2);
        this.load.spritesheet('guineaPigSleep', 'gfx/guineapig_sleeping.png', 160, 160, 2);
        this.load.spritesheet('guineaPigShitting', 'gfx/guineapig_pooping.png', 160, 160, 3);
        this.load.image('guineaPigDead', 'gfx/guineapig_dead.png');
        this.load.image("background", "graphics/background_grass.png");

        //	Here we load the rest of the assets our game needs.
        //	As this is just a Project Template I've not provided these assets, swap them for your own.
        /*
        this.load.image('titlepage', 'images/title.jpg');
        this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
        this.load.audio('titleMusic', ['audio/main_menu.mp3']);
        this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
        */
        //	+ lots of other required assets here
        
        this.load.audio("atmosphere1", "sound/guinea pig1.ogg");
        this.load.audio("atmosphere2", "sound/guinea pig2.ogg");
        this.load.audio("atmosphere3", "sound/guinea pig3.ogg");
        this.load.audio("button1", "sound/button1.ogg");
        this.load.audio("button2", "sound/button2.ogg");
        this.load.audio("button3", "sound/button3.ogg");
        this.load.audio("beer", "sound/drinking1.ogg");
        this.load.audio("waffles", "sound/eating2.ogg");
        this.load.audio("burger", "sound/eating3 slurp1.ogg");
        this.load.audio("edamame", "sound/eating4 crunch.ogg");
        this.load.audio("sweets", "sound/eating4 crunch.ogg");
        this.load.audio("doner", "sound/eating2.ogg");
        this.load.audio("quinoa", "sound/eating11.ogg");
        this.load.audio("pet", "sound/petting.ogg");
        this.load.audio("sleep", "sound/sleeping.ogg");
        this.load.audio("toilet", "sound/toilet.ogg");
        this.load.audio("popmusic", "sound/pop music.ogg");
        
        this.load.audio("clubbing", "graphics/hipstergochielectro.mp3");
        this.load.audio("happy", "graphics/hipstergochihappy.mp3");
        this.load.audio("unhappy", "graphics/hipstergochiunhappy.mp3");

    },

    create: function () {

        //	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
        this.preloadBar.cropEnabled = false;

    },

    update: function () {

        //	You don't actually need to do this, but I find it gives a much smoother game experience.
        //	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
        //	You can jump right into the menu if you want and still play the music, but you'll have a few
        //	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
        //	it's best to wait for it to decode here first, then carry on.

        //	If you don't have any music in your game then put the game.state.start line into the create function and delete
        //	the update function completely.

        if (/*this.cache.isSoundDecoded('titleMusic') && */this.ready == false)
        {
            this.ready = true;
            this.state.start('Game');
        }

    }

};

