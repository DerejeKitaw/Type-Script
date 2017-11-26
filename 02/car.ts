class Car {
    // fields
    engine: string;

    //Constructors
    constructor (engine: string){
        this.engine =engine;
    }

    // using public we can avoid declaring engine field explecitly.
        // constructor (public engine: string){
        //     this.engine =engine;
    // }

    // Properties

    // Functions
    start(){
        return "Stared " + this.engine;
    }
    stop(){
        return "Stopped " + this.engine;
    }
}