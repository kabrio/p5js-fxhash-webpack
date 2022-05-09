# p5js-fxhash-webpack

Starter project for P5js configured with fxhash snippets + fxhash helper functions and Webpack 4 as a bundler.

Great and easy way to bootstrap your fxhash P5js project.

To deploy or test (sandbox) on fxhash select index.html + public + static, make zip file and upload.

## Development

Clone the project:

```bash
git clone https://github.com/kabrio/p5js-fxhash-webpack.git
```

Change directory and install dependencies:
```bash
cd p5js-fxhash-webpack
npm i
```


Start webpack development server:

```bash
npm run start
```
Enter 'localhost:9000' in your browsers adress bar to view the sketch.
If you need to change this, the webpack configuration is done in [`webpack.config.js`](webpack.config.js).

## Deployment on GitHub Pages

**Works with any other static website hosting too.**

Bundle your code, and push it in your repo:

```bash
npm run build
git add
git commit -m"Deploying on GitHub Pages"
git push
```

## Extra

The code can be formated with prettier (don't forget to save file before first!!!):

```bash
npm run format
```
