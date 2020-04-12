const { repository } = require('../package.json');

const [ provider, owner, repo ] = repository.url.split('/').slice(-3);

// eslint-disable-next-line no-console
console.log(`git@${ provider }:${ owner }/${ repo }`);
