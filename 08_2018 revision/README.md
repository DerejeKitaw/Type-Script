### Create app.ts

```ts
console.log('App works!');
```

### Create index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Typescript revision</title>
  <script src="app.js"></script>
</head>
<body>

</body>
</html>
```

### create package.json

```
npm init
```

package.json

```json
{
  "name": "08_2018-revision",
  "version": "1.0.0",
  "description": "Type script review",
  "main": "index.js",
  "scripts": {
    "start": "lite-server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.3.0"
  }
}
```

### add .gitignore

```
node_modules
```

### Install live server

```
npm install lite-server --save-dev
```

### Compile app.ts

> `tsc app.ts` is easy for few files.
> Configure tsc using tscconfig.json

```
tsc --init
```

> run `tsc --watch` -> this will compiles app.ts

### run app

```
npm start
```

### Prevent tsc compiler not to compile if there is error

```json
 "compilerOptions": {
"noEmitOnError": true, // will prevent tsc compiler not to compile if there is error. Default is false
}
```

### Debugging typescript using source map

```json
 "compilerOptions": {
    "sourceMap": true,
}
```
### Avoiding using 'any' types in your code

```json
 "compilerOptions": {
    "noImplicitAny": true, // default is false. Through error if type is any
}
```
