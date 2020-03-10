const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open', () => console.log(`🔗 Connected to MongoDB at ${db.host}: ${db.port}`));
db.on('error', err => console.error(`💩 Database error:\n${err}`));

module.exports.Bounty = require('./bounty');