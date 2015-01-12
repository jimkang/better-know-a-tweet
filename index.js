var fancyLeftQuote = '\u201C';

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

module.exports = {
  isTweetOfUser: isTweetOfUser,
  isRetweetOfUser: isRetweetOfUser  
};
