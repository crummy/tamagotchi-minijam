function Hamster() {
    this.hunger = 0;
    this.drunk = 0;
    this.thirst = 0;
    this.food = 0;
    this.sadness = 0;
    
    this.feed = function() {
        this.food += 10;
        this.hunger -= 10;
        if (this.hunger < 0) this.hunger = 0;
    }
    
    this.drink = function() {
        this.drunk += 10;
        this.thirst -= 10;
    }
    
    this.pet = function() {
        this.sadness--;
    }
    
    this.slap = function() {
        this.sadness += 10;
    }
    
    this.isUnhappy = function() {
        
    }
    
    this.tick = function() {
        this.sadness++;
        this.hunger += 1;
        this.thirst += 1;
        this.drunk -= 1;
        if (this.hunger > 100 || this.thirst > 100) {
            return "dead";
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