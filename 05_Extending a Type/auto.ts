class Engine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class Accessory {
    constructor (public accessoryNumber: number, public title : string){}
}

class Auto{
    private _basePrice: number;
    private _engine: Engine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: Engine, make: string, model:string){
        this.engine =engine
        this.basePrice=basePrice;
        this.make=make;
        this.model=model;
    }
    calculateTotal(): number {
        var taxRate =.08;
        return this.basePrice + (taxRate * this.basePrice)
    }

    addAccessories(...accessories: Accessory[]){
        this.accessoryList= '';
        for (var i=0; i< accessories.length; i++){
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }
    getAccessoryList(): string{
        return this.accessoryList;
    }
    get basePrice(): number{
        return this._basePrice;
    }
    set basePrice(value: number){
        if (value<=0) throw 'price must be >= 0';
        this._basePrice =value;
    }
    get engine(): Engine{
        return this._engine;
    }
    set engine(value: Engine){
        if (value == undefined) throw 'Please supply an engine.';
        this._engine =value;
    }
}

class Truck extends Auto{
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: Engine, make: string, model:string, bedlength: string, fourByFour:boolean){
        super(basePrice, engine,make,model);
        this.bedLength=bedlength;
        this.fourByFour=fourByFour;
    }
}


window.onload= function(){
    // var auto = new Auto(40000, new Engine(300, 'V8'), 'Chevy', 'silverado');
    // alert(auto.engine.engineType);

    // var truck = new Truck(40000, new Engine(300, 'V8'), 'Chevy', 'silverado','Long Bed',true);
    // alert(truck.engine.engineType);
    // alert(truck.bedLength);
    // alert(truck.basePrice);
    // alert(truck.calculateTotal().toString());

    var truck = new Truck(40000, new Engine(300, 'V8'), 'Chevy', 'silverado','Long Bed',true);

    // the ... allow to have unlimited parameter to Accossory
    truck.addAccessories(new Accessory(1234, 'Sunroof'),new Accessory(4322, 'Towing package'));
    
    // start is like a call back function
    truck.engine.start((status:boolean, engineType: string)=>{
        alert(engineType + ' was started');
    });
}