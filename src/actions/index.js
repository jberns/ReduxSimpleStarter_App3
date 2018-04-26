const yaml = require('yamljs');
const config = yaml.load('../../secrets.yaml');

const API_KEY = config.OPEN_API;

