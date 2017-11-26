interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

interface IAutoOptions{
    basePrice:number;
    engine : IEngine;
    state: string;
    make: string;
    model:string;
    year:number;
}

interface ITruckOptions extends IAutoOptions {
    bedlength: string;
    fourByFour: boolean;
}
class Engine implements IEngine {
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

class CustomEngine implements IEngine {


    public start(callback: (startStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, 'Custome Engine');
        }, 1000);
    }

    public stop(callback: (stopStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, 'Custome Engine');
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    state: string;
    year: number;
    accessoryList: string;
// replace (basePrice: number, engine: IEngine, make: string, model: string, state: string, year: number) with (option: IAutoOptions)
    constructor(option: IAutoOptions) {
        this.basePrice = option.basePrice;
        this.engine = option.engine
        this.make = option.make;
        this.model = option.model;
        this.state = option.state;
        this.year = option.year;
    }
    calculateTotal(): number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice)
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }
    getAccessoryList(): string {
        return this.accessoryList;
    }
    get basePrice(): number {
        return this._basePrice;
    }
    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }
    get engine(): IEngine {
        return this._engine;
    }
    set engine(value: IEngine) {
        if (value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(options: ITruckOptions) {
        super(options);
        this.bedLength = options.bedlength;
        this.fourByFour = options.fourByFour;
    }
}


window.onload = function () {
    // here interface solved
    // order of parameters do not matter now
    // clean or one parameter for Rtuck class
    var truck = new Truck({basePrice:40000, engine:new Engine(250, 'Type'), make:'Chevy', model:'silverado', state:'AZ', year:2010, bedlength:'short bed', fourByFour:true});
    
    alert(truck.bedLength); // horse power for cutomeEngine is not defined

   
}