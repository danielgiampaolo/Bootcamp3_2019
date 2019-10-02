//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://bootcamp:5NEZ8XMnYU7Q6BtQ@cen3031-dg-vg1ph.mongodb.net/Bootcamp2?retryWrites=true&w=majority', //place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'e8509f250f3e4d05991230beab51caca' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
