import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loadData = () => {
    const dataPath = join(__dirname, '../data/formatted_data.json');
    const rawData = readFileSync(dataPath);
    return JSON.parse(rawData);
};

export default loadData;