
# Notes back-end

➾➔➤❖$ℬ⊕✓✂︎♑️©❖❝❞[]✬★☒☑︎⇐⥣⇓❮❯🖥💻⏳💡⚒🔑📭📦📨📊📈📜📚📕📙📘✂️🔐🔎♑️❌⭕️🚫✅❎🌐🆗2️⃣0️⃣▶️©️✔️™️☑️🔘🕢é

## Initial SetUp

1. clone or degit repo, cd into app and install dep

```shell
    npm install --global yarn #to update yarn
    cd <app-name>
    yarn
```

1. if there are security issues run audit and upgrade dep
   1. can pass flags such as
      1. --production[=true|false]
      2. --verbose
   2. yarn add (dep) || yarn add --dev (devDep)
      1. yarn add package-name@tag // @latest @next
   3. yarn run [script] [args] // yarn test -o --watchAll
   4. yarn cache list | ... cache dir |  cache clean | yarn config set cache-folder [path]
   5. yarn install --check-file
   6. yarn import // creates yarn-lock file based on package-lock or w/ info from node_modules dir
   7. yarn info [package] --json # get info on a npm package

```shell
yarn init # create new package.json
yarn install
yarn audit --groups "dependencies devDependencies"
yarn upgrade-interactive --latest
yarn versions #check --v of node, yarn, v8 etc.
yarn remove <pack> --flag
```

## 🔎 What's inside?

> .
| Main App
├── node_modules
├── public
├── src
├── .env
├── .gitignore
├── LICENSE
├── package.json
├── yarn.lock
└── README.md

___

1. Project root
2. **`public`**: This directory will contain the development and production build of the site.
3. **`src`**: This directory will contain all of the code related to what you will see on your application.
4. **`.env`**: Simple text configuration file for controlling the application's environment constants
5. **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

___

## Back-end steps

- create a type (interface)
- create a model
  - imp the interface and util from mongoose (dfines the schema and passes the interface as a type to model)
- create API controller (get, add, update, delete info)
  - create a func to fetch data (in controller/app/index.ts)
  - the model gets data from Mongo and returns res (array of todos)
  - create api routes
  - create server and get cred from MongoDB Atlas by making a cluster

## Front-end steps

- make the client side app with React
  - todo type
  - fetch data
  - create components
  - add forms
  - display todo items
  - fetch/display data

## Build for Production

- Test
- Debug
- Deploy

## Style

# Notes for TS todo App

## Project setup, config and packages

1. create root dir and project dir
2. start the nodejs app via yarn init
3. create tsconfig.json file
   1. `outDir`: tells the compiler to put the compiled code into the dist/js folder.
   2. `target`: it specifies the ECMAScript target version when compiling the TypeScript code.
      1. Here, we target es5 to support all browsers, you can change it to ES6, ES3(it's the default if no target is specified), ES2020, etc.
   3. `module`: it defines the module of the compiled code. The module can be Common JS, ES2015, ES2020, etc.
   4. `rootDir`: informs TypeScript to compile every .ts file located in the src folder.
   5. `include`: tells the compiler to include files that are in the src directory and sub-directory.
   6. `exclude`: will exclude the files or folders passed in the array during compile-time.
4. install ts and dep (local or -g )
   1. express, mongoDB (mongoose), cors and their types as devDep for TS compiler
   2. install dep so we can compile the ts and for starting server concurrently
5. add build and start values to script key in package.json

```bash
yarn add typescript
yarn add express cors mongoose
yarn add -D @types/node @types/express @types/mongoose @types/cors
yarn add -D concurrently nodemon
```
