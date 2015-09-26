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
    }
}
