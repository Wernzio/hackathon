var FirebaseServer = require('firebase-server');

new FirebaseServer(5000, 'localhost', {
    states: {
        CA: 'California',
        AL: 'Alabama',
        KY: 'Kentucky'
    }
});

var client = new Firebase('ws://localhost:5000');
client.on('value', function(snap) {
    console.log('Got value: ', snap.val());
});
