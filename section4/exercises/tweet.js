/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments)
  {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = 0;
    this.comments = comments;
  }
    addLikes () {
    this.numberOfLikes++;
  }
    addComments(newComment) {
      this.comments.push(newComment);
  }
};

var funnyTweet = new Tweet ("@MuscularSon", "Boys are back in town...", "3:05pm", 3, ["wow", "where are they"])
var seriousTweet = new Tweet ("@rad_milk", "god gives his earliest bedtimes to his tiredest sleepyheads", "1:14am", 10, ["it's true"])
console.log(seriousTweet);
console.log(funnyTweet);

funnyTweet.addLikes();
funnyTweet.addComments("Jealous");

console.log(funnyTweet);


seriousTweet.addLikes();
seriousTweet.addLikes();
seriousTweet.addComments("that's so sweet");

console.log(seriousTweet);
