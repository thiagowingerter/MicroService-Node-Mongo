const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://admin:123123@172.21.7.30:27017/thiagodb',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
