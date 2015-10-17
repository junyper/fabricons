# Fabricons

Note: This is a WIP...

Generates one or more icon sets from Sketch files for multiple platforms (web, iOS, Android) and provides a local web application for testing the output.

Fabricons outputs:

- SVG files, icon font and SVG sprite optimized for web
- SVG files with [configurable](gulpfile.babel.js/config.js) bounding boxes/margins for Android
- PDF files with [configurable](gulpfile.babel.js/config.js) bounding boxes/margins for iOS

## Requirements

- Mac OSX
- [Sketch](http://bohemiancoding.com/sketch/)

## Set Up

- In the console run `./install.sh` to install dependencies.
- In the console run `gulp` to start the [local server](http://localhost:3002) and watch for changes.

## How It Works

- In the .sketch files in `/src/sketch` there are 1920x1920 artboards for each icon set variant. The artboard name is the name of the icon (close, add, etc.) with a prefix of the variant, like `bold/close` and `light/close`.

- When you save in Sketch with the `npm start` script running, the artboards will be exported in SVG to the `./generated` directory, or according to the [configuration](gulpfile.babel.js/config.js), automatically via `gulp-sketch`, creating directories for each variant based on the artboard names.

- After exporting, gulp will take the SVG files generated for each variant and resize, minify, and package them for various platforms (web, iOS, Android) as individual SVG files, SVG sprites, pdf documents and icon fonts. You can see the result in the `/generated` directory.

## Adding and Modifying Icons

- Start with the [Sketch template](template.sketch) provided. Open the template file and then save it as a template (File > Save as Template...). The next time you want to make an icon it will be available in your template list (File > New From Template) in the Sketch app.

- Save new icon files in the `/src/sketch` directory.

- Run `gulp` to start the local server and watch for changes to the sketch files and generate the various formats.

## Guidelines for Drawing Icons

- Use dashes in the name of the .sketch files (e.g `calendar-month`). Use the same name for artboards, but prefix with the variant, like `bold/calendar-month` and `light/calendar-month`.

- Draw your icons on the 1920 x 1920 artboards that are set up for you in the Sketch template.

- Before you flatten shapes or vectorize strokes as described below, make a hidden copy of the original paths off to the side so that you can more easily come back and make changes later.

- Export strokes to vector (Layer > Paths > Vectorize Stroke).

- Flatten your shapes (Layer > Paths > Flatten).

- Don’t use borders on vectors, especially not inside/outside borders which aren’t supported in SVG.

- Make sure none of the paths go outside of the artboard. If so, the glyph in the icon font will be misaligned. Draw inside the lines.

- Fill the space edge-to-edge as much as possible. The build process will add margins as needed.

## Testing Your Changes

There's a small web app for testing all the icons. You can see all the icons at once, in different sizes and formats.

If you ran `npm start`, you're already running the web app. Just visit [localhost:2992](http://localhost:3002).

## Inspiration

- Originally forked from Trello's [iconathon](https://github.com/trello/iconathon)
- [symbols-for-sketch](https://github.com/cognitom/symbols-for-sketch)
