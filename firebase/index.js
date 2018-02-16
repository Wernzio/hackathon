var FirebaseServer = require('firebase-server');

new FirebaseServer(5000, `${process.env.TEXT_EDITOR_DOMAIN || 'locahost'}`, {
    states: {
        CA: 'California',
        AL: 'Alabama',
        KY: 'Kentucky'
    }
});

var client = new Firebase(`ws://${process.env.TEXT_EDITOR_DOMAIN || 'locahost'}:5000`);
client.on('value', function(snap) {
    console.log('Got value: ', snap.val());
});
