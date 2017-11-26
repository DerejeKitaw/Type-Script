class Car {

    private _engine: string;


    constructor (engine: string){
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