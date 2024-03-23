import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import * as yaml from 'yaml';

const configFiles = [path.resolve('./config.yaml'), '/path/to/config.yaml']
  .filter(Boolean)
  .filter(fs.existsSync)
  .map((file) => fs.readFileSync(file, 'utf-8'))
  .map((content) => yaml.parse(content));

const config = configFiles.length
  ? [...configFiles].reduce((prev, curr) => {
      return _.merge(prev, curr);
    })
  : {};

export const readConfig = (key: string, defaultValue?: any) => {
  const envKey = key
    .split('.')
    .map((x) => x.toUpperCase())
    .join('_');
  return process.env[envKey] || _.get(config, key, defaultValue);
};
