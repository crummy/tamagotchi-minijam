var DEAD_STATE = 1;
var HAPPY_STATE = 2;
var UNHAPPY_STATE = 3;
var DANCING_STATE = 4;
var SHITTING_STATE = 5;
var SLEEPING_STATE = 6;

function Hamster() {
    this._food = 0;
    this._maxValue = 100;
    
    this.hunger = 0;
    this.health = this._maxValue;
    this.energy = this._maxValue;
    this.isDead = false;
    
    this.feed = function(food) {
        if (this.isDead || this.sadness > 100 || this.hunger == 0) {
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
    }
    
    this.pet = function() {
        this.energy += 2;
        this.health++;
        return true;
    }
    
    this.isUnhappy = function() {
        return this.hunger > 50
          || this.health < 50
          || this.energy < 25;
    }
    
    this.tick = function() {
        if (this.state == SLEEPING_STATE) {
            this.energy += 4;
            this.health += 3;
            this.hunger -= 2;
            if (this.energy < 100) {
                return SLEEPING_STATE;
            }
        }
        if (this.state == DANCING_STATE) {
            this.energy -= 2;
            this.health -= 1;
            this.hunger -= 1;
            if (this.energy > 10) {
                return DANCING_STATE;
            }
        }
        
        if (this.hunger > 0) this.hunger--;
        if (this.energy > 0) this.energy--;
        
        if (this.hunger >= 100 || this.health == 0) {
            this.isDead = true;
            return "dead";
        }
        
        if (this._food > 3) {
            this._food = 0;
            return "shit";
        }
        
        if (this.energy > 75 && Math.random() < 0.1) {
            this.state = "dancing";
            return "dancing";
        }
        
        if (this.energy < 15 && Math.random() < 0.1) {
            this.state = "sleeping";
            return "dancing";
        }
    }
}
