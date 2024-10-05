# Theme Name
Jack

## Features
Tailwindcss

## Installation
Install as submodule
```
git submodule add git submodule add https://github.com/yasakdogra/jack.git ./themes/jack
```

Add dev and build commands
```
{
  "scripts": {
    "dev:jack": "tailwindcss -c ./themes/jack/tailwind.config.js -i ./themes/jack/assets/css/main.css -o ./themes/jack/assets/_gen/css/main.css --watch",
    "dev:hugo": "hugo server",
    "dev:all": "npm-run-all -p dev:jack dev:hugo",
    "build": "hugo --cleanDestinationDir --minify"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.10",
    "autoprefixer": "^10.4.16",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.33",
    "postcss-cli": "^11.0.0",
    "tailwindcss": "^3.4.1"
  }
}
```

Install dependencies
```
npm install
```

### Development
#### Hugo only
```
npm run dev:hugo
```
or 
```
hugo server
```

#### Theme only
```
npm run dev:jack
```
or
```
tailwindcss -c ./themes/jack/tailwind.config.js -i ./themes/jack/assets/css/main.css -o ./themes/jack/assets/_gen/css/main.css --watch
```

#### Hugo and Theme
```
npm run dev:all
```
or run in separate terminals
```
tailwindcss -c ./themes/jack/tailwind.config.js -i ./themes/jack/assets/css/main.css -o ./themes/jack/assets/_gen/css/main.css --watch
```
```
hugo server
```

### Build
```
npm ci
npm run build
```

## Configuration
