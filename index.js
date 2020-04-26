const axios = require('axios');
const _ = require('lodash');
const S = require('string');
const parsePath = require("parse-path");


function hasVerbatimQuote(redditPostURL) {
  const parsed = parsePath(redditPostURL);

  let jsonURL = '';
  if (S(parsed.resource).endsWith('reddit.com')) {
    jsonURL = `${redditPostURL}/.json`
  } else {
    // If they just passed the post id
    jsonURL = `https://www.reddit.com/${redditPostURL}.json`
  }

  return axios.get(jsonURL)
    .then(function (response) {
      const post = _.get(response, 'data[0].data.children[0].data');
      if (post.selftext_html) {
        return false;
      }
      const title = post.title;
      return axios.get(post.url)
        .then(function (linkedPageResponse) {
          const trimmedTitle = _.trim(title, `"' `);
          return S(linkedPageResponse.data).contains(trimmedTitle);
        });
    });
}


module.exports = hasVerbatimQuote;
module.exports.default = hasVerbatimQuote;
