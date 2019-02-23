'use strict';

const assert = require('assert');
const HeadingId = require('..');

describe('test/heading-id.test.js', () => {
  it('should work on title match [\w\.\-]', () => {
    const calculater = new HeadingId();
    assert(calculater.id('awesome-news.foo_bar') === 'awesome-news.foo_bar');
    assert(calculater.id('awesome-news.foo_bar') === 'awesome-news.foo_bar-1');
    assert(calculater.id('awesome-news.foo_bar') === 'awesome-news.foo_bar-2');
  });

  it('should work non-ascii title', () => {
    const calculater = new HeadingId();
    assert(calculater.id('新闻标题') === '6f185474');
    assert(calculater.id('新闻标题') === '6f185474-1');
    assert(calculater.id('新闻标题') === '6f185474-2');
  });

  it('should work reset id using new instance', () => {
    let calculater = new HeadingId();
    assert(calculater.id('新闻标题') === '6f185474');
    assert(calculater.id('新闻标题') === '6f185474-1');
    assert(calculater.id('新闻标题') === '6f185474-2');
    calculater = new HeadingId();
    assert(calculater.id('新闻标题') === '6f185474');
    assert(calculater.id('新闻标题') === '6f185474-1');
    assert(calculater.id('新闻标题') === '6f185474-2');
  });
});
