const source = './src/';
const destination = './generated/';

const svg = {
  source: source + 'sketch/**/*.sketch',
  destination: destination + 'svg/',
  sizes: [ // leave this out if you only want full size
    { name: 'Small', suffix: '_sm', size: 16, box: 18 },
    { name: 'Medium', suffix: '_md', size: 20, box: 24 },
    { name: 'Large', suffix: '_lg', size: 30, box: 32 }
  ]
};

const fonts = {
  source: svg.destination, // variant is added to path
  destination: destination + 'fonts/',
  fontName: 'Icons',
  className: 'icon',
  formats: ['woff2', 'woff', 'eot', 'ttf', 'svg']
};

const sprites = {
  source: svg.destination, // variant is added to path
  destination: destination + 'sprites/'
};

export default {
  source,
  destination,
  svg,
  fonts,
  sprites
};
