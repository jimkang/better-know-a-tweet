var test = require('tape');
var betterKnow = require('../index');
var fixtures = require('./fixtures');

test('No @ in tweet text', function noAtsTest(t) {
  t.plan(1);

  var usernames = betterKnow.whosInTheTweet({
    id_str: '567345634767675643',
    user: {
      id: 908796987234234098,
      screen_name: 'smidgeo'
    },
    text: 'We\'ve secretly replacd the contents of my bladder with SMIDGEO CRYSTALS! lets see if anyone bys me prescription fud'
  });

  t.deepEqual(
    usernames,
    [
      'smidgeo'
    ],
    'Figures out what user involved in the tweet when not mentioned in text.'
  );  
});

test('Tweet is a retweet', function retweetTest(t) {
  t.plan(1);

  var usernames = betterKnow.whosInTheTweet({
    id_str: '567345634767675643',
    user: {
      id: 908796987234234098,
      screen_name: 'smidgeo'
    },
    text: 'When the frontend guy puts a bower.json in the project http://tmblr.co/ZM62_r1ACMmyn',
    retweeted_status: {
      user: {
        screen_name: 'NodejsReactions'
      }
    }
  });

  t.deepEqual(
    usernames,
    [
      'smidgeo',
      'NodejsReactions'
    ],
    'Gets user and user that was retweeted.'
  );  
});

test('Tweet mentions users', function mentionsTest(t) {
  t.plan(1);

  var usernames = betterKnow.whosInTheTweet({
    id_str: '567345634767675643',
    user: {
      id: 908796987234234098,
      screen_name: 'smidgeo'
    },
    text: 'Smrt tip! “@tempest67: @smidgeo Attention, SMIDGEO CORP -- use this one WERID TIP that web srvrs HATE: s/com/co in ur linx for BEST VALUE!”'
  });

  t.deepEqual(
    usernames,
    [
      'smidgeo',
      'tempest67'
    ],
    'Includes mentioned users in the text.'
  );  
});

