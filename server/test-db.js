const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://postgres:password@localhost:5432/code_n_click?schema=public',
});

client.connect()
    .then(() => {
        console.log('Connected successfully');
        return client.end();
    })
    .catch(err => {
        console.error('Connection error', err.stack);
        client.end();
    });
