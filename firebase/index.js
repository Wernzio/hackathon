var FirebaseServer = require('firebase-server');

new FirebaseServer(5000, '127.0.1', {
    states: {
        CA: 'California',
        AL: 'Alabama',
        KY: 'Kentucky'
    }
});

var client = new Firebase('ws://127.0.1:5000');
client.on('value', function(snap) {
    console.log('Got value: ', snap.val());
});
