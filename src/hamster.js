function Hamster() {
    this.hunger = 0;
    this.health = 100;
    this.energy = 100;
    this.isDead = false;
    
    this._food = 0;
    
    this.feed = function() {
        if (this.isDead || this.sadness > 100 || this.hunger == 0) {
            return false;
        } else {
            this._food++;
            this.hunger -= 10;
            if (this.hunger < 0) this.hunger = 0;
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
        this.sadness++;
        if (this.hunger > 0) this.hunger--;
        
        if (this.hunger > 100 || this.thirst > 100) {
            this.isDead = true;
            return "dead";
        }
        if (this._food > 3) {
            this._food = 0;
            return "shit";
        }
    }
}
