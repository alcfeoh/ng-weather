
var webpush = require('web-push');
// Used that code to generate my set of keys - then saved those keys to be usedin this example
// console.log(webpush.generateVAPIDKeys());
var express = require('express');
var bp = require('body-parser');
var cors = require('cors');
var app = express();
var savedSubscriptionData;

var app = express()

// create application/json parser
var jsonParser = bp.json();
app.use(cors());

var config = { publicKey: 'BDTrenhMvFL5hexEce8suYQkMeXajUwKG0NdZboLhFBM3tgJ6ENXCxv3CZxiGPDoc_1v6848KMJiaMwSkLUea8g',
    privateKey: 'oGL0vAMI0avIJCcI2gKb0VL2-_awgpqmzj6gFs4VVYc' };

webpush.setVapidDetails(
    'mailto:achautard@gmail.com',
    config.publicKey,
    config.privateKey
);

app.get('/key', function(req, res) {
    res.send({
        key: vapidPublicKey
    });
});

app.post('/save-subscription', jsonParser, (req, res) => {
    savedSubscriptionData = req.body;
    res.send({ok : true});
});

app.get('*', express.static('dist'));

app.listen(9020, (res) => console.log('server started'));

setInterval(() => sendNotificationIfSubscriberPresent(), 5000);


function sendNotificationIfSubscriberPresent() {
    console.log('check');
    if (savedSubscriptionData) {
        console.log('send');
        webpush.sendNotification(savedSubscriptionData, JSON.stringify({message: 'A test'}))
            .then(function (response) {
                console.log('sent');
            });
    }
}
