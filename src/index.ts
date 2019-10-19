const NAMES = require('../us.json');

export default function generate() {
  const index = Math.floor(Math.random() * NAMES.length);
  return NAMES[index];
}
