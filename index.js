'use strict';

const md5 = require('blueimp-md5');

module.exports = class HeadingId {
  constructor() {
    this._counters = new Map();
  }

  id(value) {
    if (typeof value !== 'string') {
      return '';
    }
    let hash;
    if (value.length <= 64 && /^[\w\.\-]+$/.test(value)) {
      hash = value;
    } else {
      hash = md5(value).substr(0, 8);
    }
    const counter = this._counters.get(hash) || 0;
    this._counters.set(hash, counter + 1);
    if (counter > 0) {
      hash = `${hash}-${counter}`;
    }
    return hash;
  }
};
