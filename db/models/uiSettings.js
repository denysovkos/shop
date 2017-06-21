const mongoose = require('mongoose');

const uiSchema = require('../schema/uiSettings');

const UISettings = mongoose.model('UISettings', uiSchema);

module.exports = UISettings;
