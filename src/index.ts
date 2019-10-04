const NAMES = require('../botnamelist.json');

export default function generate() {
  const index = Math.floor(Math.random() * NAMES.length);
  return NAMES[index];
}
