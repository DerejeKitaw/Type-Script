01_Interface extends is similar to class extends

02_Create interface
    interface IAutoOptions{
    basePrice:number;
    engine : IEngine;
    state: string;
    make: string;
    model:string;
    year:number;
    }

03_Use Interface

    for Auto class:

    replace (basePrice: number, engine: IEngine, make: string, model: string, state: string, year: number) with (option: IAutoOptions)

    constructor(option: IAutoOptions) {
        this.basePrice = option.basePrice;
        this.engine = option.engine
        this.make = option.make;
        this.model = option.model;
        this.state = option.state;
        this.year = option.year;
    }

    for Truck class:

    constructor(basePrice: number, engine: Engine, make: string, model: string,state:string,year:number, bedlength: string, fourByFour: boolean) {
        super(basePrice, engine, make, model,state,year);
        this.bedLength = bedlength;
        this.fourByFour = fourByFour;
    }

    ## replace with

    constructor(option: IAutoOption) {
        super(option);
        //****** Here we will have problem because we do not need I option interface to have `bedlength` and `fourByFour`
        //****** so we will create anothe interface and extend it.
        this.bedLength = bedlength;
        this.fourByFour = fourByFour;
    }


04_Why create and extend interface

    interface ITruckOptions extends IAutoOptions {
    bedlength: string;
    fourByFour: boolean;
    }
    
    interface ITruckOptions extends IAutoOptions {
    bedlength: string;
    fourByFour: boolean;
    }   

    // here interface solved
    // order of parameters do not matter now
    // clean or one parameter for Rtuck class