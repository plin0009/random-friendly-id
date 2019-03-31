const adverbs = require('./adverbs');
const verbs = require('./verbs');
const adjectives = require('./adjectives');
const nouns = require('./nouns');
const choose = list => list[Math.floor(Math.random() * list.length)];

module.exports = () => choose(adverbs) + choose(verbs) + choose(adjectives) + choose(nouns);