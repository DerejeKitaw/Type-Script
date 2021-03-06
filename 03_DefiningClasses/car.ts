class Engine {
    constructor(public horsePower: number, public engineType: string){

    }
}
class Car {
    private _engine: Engine;

    constructor (engine: Engine){
        this.setEngine (engine);
    }

    
     getEngine() : Engine {
        return this._engine;
    }

    
     setEngine(value : Engine) {
        if (value == undefined) throw "Please supply an engine";
        
        this._engine = value;
    }

    start() : void {
        alert('Car engine started now' + this._engine.engineType);
    }
    
    
}
window.onload =function(){
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
};