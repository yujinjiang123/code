let uid=0, tid=0;
class Twitter {
  constructor() {}

  postTweet(userId, tweetId) {}

  getNewsFeed(userId) {}

  follow(followerId, followeeId) {}

  unfollow(followerId, followeeId) {}
}

class User{
    static timestamp=0;
    constructor(){
        this.id=++uid;
        this.followed=new Set();
        this.head=null;
        follow(id);
    }

    follow(userId){
        this.followed.add(userId);
    }

    unfollow(userId){
        if(userId!==this.id){
            this.followed.delete(userId);
        }
    }

    post(){
        const twt=new Tweet(User.timestamp)
        User.timestamp++;
        twt.next=head;
        head=twt;
    }
}

class Tweet{
    constructor(time){
        this.id=++tid;
        this.time=time;
        this.next=null;
    }
}