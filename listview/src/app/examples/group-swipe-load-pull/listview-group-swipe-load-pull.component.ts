import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { BlogPost } from "./blog-post";
import { BlogPostsService } from "./blog-posts.service";
import { ListViewEventData, LoadOnDemandListViewEventData } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "tk-listview-group-swipe-load-pull",
    providers: [BlogPostsService],
    templateUrl: "listview-group-swipe-load-pull.component.html"
})

export class ListViewGroupSwipeLoadPullComponent implements OnInit {
    private _blogPosts: ObservableArray<BlogPost>;
    private _startItemsCount = 6;
    private _loadMoreItemsCount = 2;
    private _groupByDay: (item: any) => any;

    @ViewChild("myListView", { read: RadListViewComponent, static: false }) listViewComponent: RadListViewComponent;

    constructor(private _blogPostsService: BlogPostsService) {
    }

    get blogPosts(): ObservableArray<BlogPost> {
        return this._blogPosts;
    }

    ngOnInit() {
        this._blogPosts = new ObservableArray(this._blogPostsService.getBlogPosts(this._startItemsCount, false));
        this._groupByDay = (item: BlogPost) => {
            return this._blogPostsService.isToday(item.publishDate) ? "Today" : "Yesterday";
        };
    }

    get groupByDay(): (item: any) => any {
        return this._groupByDay;
    }

    set groupByDay(value: (item: any) => any) {
        this._groupByDay = value;
    }

    public onPullToRefreshInitiated(args: ListViewEventData) {
        setTimeout(() => {
            this._blogPosts = new ObservableArray(this._blogPostsService.getBlogPosts(this._startItemsCount, false));
            const listView = args.object;
            listView.notifyPullToRefreshFinished(true);
        }, 500);
    }

    public onLoadMoreDataRequested(args: LoadOnDemandListViewEventData) {
        setTimeout(() => {
            let newItems = this._blogPostsService.getBlogPosts(this._loadMoreItemsCount, true);
            for (let i = 0; i < newItems.length; i++) {
                this._blogPosts.push(newItems[i]);
            }
            const listView = args.object;
            listView.notifyLoadOnDemandFinished(newItems.length < this._loadMoreItemsCount);
        }, 500);
    }

    public onItemSwipeProgressStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args['object'];
        const leftItem = swipeView.getViewById<any>('comment-view');
        const rightItem = swipeView.getViewById<any>('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }

    public onItemSwipeProgressChanged(args: ListViewEventData) {
    }

    public onItemSwipeProgressEnded(args: ListViewEventData) {
    }

    public onLeftSwipeClick(args: ListViewEventData) {
        alert(
            {
                title: "Comments are currently disabled.",
                okButtonText: "OK"
            });
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        let itemView = args.object;
        let currentBlogPost = <BlogPost>itemView.bindingContext;
        let currentBlogPostIndex = this._blogPosts.indexOf(currentBlogPost);
        this._blogPosts.splice(currentBlogPostIndex, 1);
        this._blogPostsService.markDeleted(currentBlogPost);
    }
}