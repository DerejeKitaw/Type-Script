class Engine {
    constructor (public horsePower: number ,
                public engineType: string){}
}

class Car {

    private _engine: Engine;


    constructor (engine: Engine){
        this.engine = engine;
    }

    
    public get engine() : string {
        return this._engine;
    }
    
    
    public set engine(v : string) {
        if (value == undefined) throw 'Supply an Engine';
        this._engine = v;
    }
    

    
}

var engine = new Engine (300, 'V8');
var car = new Car(engine);