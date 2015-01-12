var test = require('tape');
var betterKnow = require('../index');
var fixtures = require('./fixtures');

test('Is a tweet of user: Positive case', function userTweetTest(t) {
  t.plan(1);

  var tweet = fixtures.getDefaultMockTweet();
  tweet.user = {
    screen_name: 'autocompleterap'
  };

  var answer = betterKnow.isTweetOfUser('autocompleterap', tweet);
  t.ok(answer, 'isTweetOfUser says it is a tweet of the user.');
});

test('Is a tweet of user: Negative case', function userTweetTest(t) {
  t.plan(1);

  var tweet = fixtures.getDefaultMockTweet();
  tweet.user = {
    screen_name: 'autocompleterap'
  };

  var answer = betterKnow.isTweetOfUser('mrchuckd', tweet);
  t.equal(answer, false, 'isTweetOfUser says it is not a tweet of the user.');
});
