const should = require('chai').should();
const hasVerbatimQuote = require('./');

describe('hasVerbatimQuote', function () {
  this.timeout(10000);

  it('should return true for posts where the title is in the body', async function() {
    const res = await hasVerbatimQuote('https://www.reddit.com/r/programmingcirclejerk/comments/g7qdzz/i_started_programming_rust_because_i_saw_that_it/');
    res.should.be.true;
  });

  it('should return false for posts where the title is not in the body', async function() {
    const res = await hasVerbatimQuote('https://www.reddit.com/r/programming/comments/g7xweu/another_1liner_npm_package_broke_the_js_ecosystem/');
    res.should.be.false;
  })

  it('should handle just the post id', async function() {
    const res = await hasVerbatimQuote('g812bj');
    res.should.be.true;
  });
});
