// config/auth.js
const config = require('../config.js')
// expose our config directly to our application using module.exports
module.exports = {

    // 'facebookAuth' : {
    //     'clientID'        : 'your-secret-clientID-here', // your App ID
    //     'clientSecret'    : 'your-client-secret-here', // your App Secret
    //     'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
    //     'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    // },

    // 'twitterAuth' : {
    //     'consumerKey'        : 'your-consumer-key-here',
    //     'consumerSecret'     : 'your-client-secret-here',
    //     'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    // },

    'googleAuth' : {
        'clientID'         : config.google.client_id,
        'clientSecret'     : config.google.client_secret,
        'callbackURL'      : config.google.callback_url
    }
};