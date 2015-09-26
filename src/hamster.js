function Hamster() {
    this.hunger = 0;
    this.drunk = 0;
    this.thirst = 0;
    this.food = 0;
    this.sadness = 0;
    this.isDead = false;
    
    this.feed = function() {
        if (this.isDead || this.sadness > 100 || this.hunger == 0) {
            return false;
        } else {
            this.food += 10;
            this.hunger -= 10;
            if (this.hunger < 0) this.hunger = 0;
            return true;
        }
    },
    
    this.drink = function() {
        if (this.isDead || this.sadness > 100 || this.thirst == 0) {
            return false;
        } else {
            this.drunk += 10;
            this.thirst -= 10;
            if (this.thirst < 0) this.thirst = 0;
            return true;
        }
    },
    
    this.pet = function() {
        this.sadness -= 10;
        if (this.sadness < 0) this.sadness = 0;
        return true;
    },
    
    this.slap = function() {
        this.sadness += 10;
        return true;
    },
    
    this.isUnhappy = function() {
        return this.hunger > 50
          || this.drunk > 50
          || this.thirst > 50
          || this.sadness > 50;
    },
    
    this.tick = function() {
        this.sadness++;
        if (this.hunger > 0) this.hunger--;
        if (this.thirst > 0) this.thirst--;
        if (this.drunk > 0) this.drunk--;
        
        if (this.hunger > 100 || this.thirst > 100) {
            this.isDead = true;
            return "dead";
        }
        if (this.thirst > 30) {
            this.sadness++;
        }
        if (this.hunger > 30) {
            this.sadness++;
        }
        if (this.drunk > 100 && Math.random() < 0.1) {
            this.drunk = 0;
            return "vomit";
        }
        if (this.food > 100 && Math.random() < 0.1) {
            this.food = 0;
            return "shit";
        }
    }
}
