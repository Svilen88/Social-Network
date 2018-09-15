export interface Post {
    author: string,
    post: string,
    time: {
        ect: string,
        lmt: string
    },
    uid: string,
    postId?: string,
    error?: string
}
