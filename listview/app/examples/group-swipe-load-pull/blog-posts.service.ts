import { Injectable } from '@angular/core';
import { ALL_POSTS } from "./mock-blogs";
import { BlogPost } from "./blog-post";

@Injectable()
export class BlogPostsService {
    private _firstToLoad = 5;
    private _nextToLoad;
    private _now: Date;

    constructor() {
        this._now = new Date();
        for (let i = 0; i < ALL_POSTS.length; i++) {
            let date;
            if (i < ALL_POSTS.length / 2) {
                let offset = i < this._firstToLoad ? (i - this._firstToLoad) * 3000 : (i - this._firstToLoad) * 1000 * 60 * 50;
                date = new Date(this._now.getTime() - offset);
            } else {
                date = new Date(this._now.getFullYear(), this._now.getMonth(), this._now.getDate() - 1);
            }

            ALL_POSTS[i].publishDate = date;
            ALL_POSTS[i].deleted = false;
        }
    }

    getBlogPosts(count: number, proceed: boolean) {
        this._now = new Date();
        const result =  new Array<BlogPost>();
        let startingIndex = proceed ? this._nextToLoad : this._firstToLoad;
        for (let i = startingIndex; i < ALL_POSTS.length && result.length < count; i++) {
            let nextBlogPost = ALL_POSTS[i];
            if (!nextBlogPost.deleted && nextBlogPost.publishDate <= this._now) {
                nextBlogPost.publishText = this.dateLabel(nextBlogPost.publishDate);
                result.push(nextBlogPost);
            }
            this._nextToLoad = i + 1;
        }
        if (!proceed) {
            this._firstToLoad = this._firstToLoad < 1 ? 0 : this._firstToLoad - 1;
        }
        return result;
    }

    markDeleted(blogPost: BlogPost) {
        blogPost.deleted = true;
    }

    dateLabel(date): string {
        if (!this.isToday(date)) {
            return "Yesterday";
        }
        let diffInMilliseconds = this._now.getTime() - date.getTime();
        let hours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
        let text = '';
        if (hours > 0) {
            text = hours > 1 ? hours + ' hours ' : hours === 1 ? '1 hour ' : '';
        } else {
            let minutes = Math.floor(diffInMilliseconds / (60 * 1000));
            if (minutes > 0) {
                text = minutes > 1 ? minutes + ' minutes ' : minutes === 1 ? '1 minute ' : '';
            } else {
                let seconds = Math.floor(diffInMilliseconds / 1000);
                text = seconds > 1 ? seconds + ' seconds ' : seconds === 1 ? '1 second ' : '0 seconds ';
            }
        }
        return text + 'ago';
    }

    public isToday(date) {
        return date.getDate() === this._now.getDate() &&
            date.getMonth() === this._now.getMonth() &&
            date.getFullYear() === this._now.getFullYear();
    }
}