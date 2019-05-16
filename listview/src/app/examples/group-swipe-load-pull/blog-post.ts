export class BlogPost {
    public title: string;
    public content: string;
    public deleted?: boolean;
    public publishDate?: Date;
    public publishText?: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}