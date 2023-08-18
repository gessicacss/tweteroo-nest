import { User } from './user.entities';

export class Tweet {
  private user: User;
  private tweet: string;

  constructor(user: User, tweet: string) {
    this.user = user;
    this.tweet = tweet;
  }
}
