import path from 'path';
const config = new Map();
config.set('port', '8080');
config.set('viewDir', path.join(__dirname, '..', 'views'));
config.set('staticDir', path.join(__dirname, '..', )); 
export
default config;