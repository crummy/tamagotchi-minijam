var DEAD_STATE = 1;
var HAPPY_STATE = 2;
var UNHAPPY_STATE = 3;
var DANCING_STATE = 4;
var SHITTING_STATE = 5;
var SLEEPING_STATE = 6;

// Hamster takes actions:
//  feed(foodType)
//  sleep()
//  toilet()
//  clubbing()
//  pet()
// Food types: burger, beer, quinoa, edamame, sweets, doner
function Hamster() {
    this._music = null;
    this._food = 0;
    this._maxValue = 100;
    
    this.hunger = 0;
    this.health = this._maxValue;
    this.energy = this._maxValue;
    
    this.feed = function(food) {
        if (this.state == DEAD_STATE || this.sadness > 100 || this.hunger == 0) {
            return false;
        } else {
            this._food++;
            this.hunger += food.hunger;
            this.energy += food.energy;
            this.health += food.health;
            if (this.hunger < 0) this.hunger = 0;
            if (this.energy < 0) this.energy = 0;
            if (this.health < 0) this.health = 0;
            return true;
        }
    };
    
    this.sleep = function() {
        if (this.state == DEAD_STATE) {
            return false;
        } else if (this.energy >= 50) {
            return false;
        } else {
            this.state = SLEEPING_STATE;
            return true;
        }
    };
    
    this.toilet = function() {
        if (this.state == DEAD_STATE || this.state == SLEEPING_STATE || this.state == DANCING_STATE) {
            return false;
        } else if (this._food == 0) {
            return false;
        } else {
            this._food = 0;
            this.state = SHITTING_STATE;
            return true;
        }
    };
    
    this.clubbing = function(music) {
        if (this.state == DEAD_STATE || this.state == SLEEPING_STATE) {
            return false;
        } else {
            this.state = DANCING_STATE;
            this._music = music;
        }
    };
    
    this.pet = function() {
        if (this.state == DEAD_STATE) return false;
        this.energy += 2;
        this.health++;
        return true;
    };
    
    this.tick = function() {
        if (this.state == DEAD_STATE) {
            return DEAD_STATE;
        }
        
        if (this.state == SLEEPING_STATE) {
            this.energy += 4;
            this.health += 3;
            this.hunger -= 2;
            if (this.energy < 100) {
                return SLEEPING_STATE;
            }
        }
        if (this.state == DANCING_STATE) {
            this.energy += this._music.energy;
            this.health -= 1;
            this.hunger -= 1;
            if (this.energy > 10 || this.energy < 90) {
                return DANCING_STATE;
            }
        }
        
        if (this.hunger > 0) this.hunger--;
        if (this.energy > 0) this.energy--;
        
        if (this.hunger >= 100 || this.health == 0) {
            return DEAD_STATE;
        }
        
        if (this._food > 3) {
            this._food = 0;
            return SHITTING_STATE;
        }
        
        if (this.energy > 75 && Math.random() < 0.1) {
            if (Math.random() < 0.5) {
                this._music = {energy: 3};
            } else {
                this._music = {energy: -5};
            }
            return DANCING_STATE;
        }
        
        if (this.energy < 15 && Math.random() < 0.1) {
            return SLEEPING_STATE;
        }
        
        if (this.energy < 40
            || this.health < 40
            || this.hunger < 40) {
                return UNHAPPY_STATE;
            } else {
                return HAPPY_STATE;
            }
    };
}
