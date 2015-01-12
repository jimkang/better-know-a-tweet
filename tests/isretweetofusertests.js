var test = require('tape');
var betterKnow = require('../index');
var fixtures = require('./fixtures');

test('Is a retweet of user: Positive case', function userRetweetTest(t) {
  t.plan(1);

  var tweet = fixtures.getDefaultMockTweet();
  tweet.retweeted_status = {
    user: {
      screen_name: 'autocompleterap'
    }
  };

  var answer = betterKnow.isRetweetOfUser('autocompleterap', tweet);
  t.ok(answer, 'isRetweetOfUser identifies retweet of the user.');
});

test('Is a retweet of user: Negative case', function negativeRetweetTest(t) {
  t.plan(1);

  var tweet = fixtures.getDefaultMockTweet();
  tweet.retweeted_status = {
    user: {
      screen_name: 'autocompleterap'
    }
  };

  var answer = betterKnow.isRetweetOfUser('mrchuckd', tweet);
  t.equal(answer, false, 
    'isRetweetOfUser identifies that it is not a retweet of the user.'
  );
});

test('Manual retweet', function manualRetweetTest(t) {
  t.plan(1);

  var tweet = fixtures.getDefaultMockTweet();
  tweet.text = 'RT @autocompleterap: "Fig leaf and sage, yeah I\'m fucked up now"';

  var answer = betterKnow.isRetweetOfUser('autocompleterap', tweet);
  t.ok(answer, 'isRetweetOfUser catches a manual retweet of the user.');
});

test('Quote retweet', function quoteRetweetTest(t) {
  t.plan(1);

  var tweet = fixtures.getDefaultMockTweet();
  tweet.text = '"@autocompleterap: "Fig leaf and sage, yeah I\'m fucked up now"';

  var answer = betterKnow.isRetweetOfUser('autocompleterap', tweet);
  t.ok(answer, 'isRetweetOfUser catches a quote retweet of the user.');
});

test('Fancy quote retweet', function fancyQuoteRetweetTest(t) {
  t.plan(1);

  var tweet = fixtures.getDefaultMockTweet();
  tweet.text = '\u201C@autocompleterap: "Fig leaf and sage, yeah I\'m fucked up now"';

  var answer = betterKnow.isRetweetOfUser('autocompleterap', tweet);
  t.ok(answer, 'isRetweetOfUser catches a fancy quote retweet of the user.');
});
