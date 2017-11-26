# 01_Casting Types

    var table : HTMLTableElement =
        document.createElement('Table');  // will fail

    var table : HTMLTableElement =
        <HTMLTableEement>document.createElement('Table');  // will work why?

    Typescript knows `HTMLTableEement` from *.d.ts file

    lib.d.ts file is built out of the box for the DOM and Javascript

    Additional Type Definition files for 3rd party script can be found at: https://github.com/DefinitelyTyped/DefinitelyTyped

