const mongoose = require('mongoose')

const config = require('./../config')

mongoose.connect(config.mongoUrl, function (err) {
  if (err) throw err
});

process.on('SIGINT', function () {
  mongoose.disconnect()
      .then(function () {
        console.log('Disconnected');
        process.exit()
      })
});

module.exports = mongoose;