var _ = require('lodash');
var twitterText = require('twitter-text');

var fancyLeftQuote = '\u201C';

var mentionsRegex = new RegExp(
  '[\s' + fancyLeftQuote + '"\'^](@\w[\w\d_]*)', 'g'
);

function isTweetOfUser(username, tweet) {
  return (!tweet.user || tweet.user.screen_name === username);
}

function isRetweetOfUser(username, tweet) {
  return (
    (
      tweet.retweeted_status && tweet.retweeted_status.user && 
      tweet.retweeted_status.user.screen_name === username
    )
    ||
    tweet.text.indexOf('RT @' + username) !== -1 ||
    tweet.text.indexOf('"@' + username) !== -1 ||
    tweet.text.indexOf(fancyLeftQuote + '@' + username) !== -1
  );
}

function whosInTheTweet(tweet) {
  var usernames = [];

  usernames.push(tweet.user.screen_name);

  if ('retweeted_status' in tweet) {
    usernames.push(tweet.retweeted_status.user.screen_name);
  }

  var mentionedUsernames = twitterText.extractMentions(tweet.text);
  usernames = usernames.concat(mentionedUsernames);

  return _.uniq(usernames);
}

module.exports = {
  isTweetOfUser: isTweetOfUser,
  isRetweetOfUser: isRetweetOfUser,
  whosInTheTweet: whosInTheTweet
};
