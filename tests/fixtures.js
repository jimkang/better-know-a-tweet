
function getDefaultMockTweet() {
  return {
    id_str: '546402627261833217',     
    user: {
      id: 546402627261833200
    },
    text: 'Fig leaf and sage, yeah I\'m fucked up now'
  };
};

module.exports = {
  getDefaultMockTweet: getDefaultMockTweet
};
