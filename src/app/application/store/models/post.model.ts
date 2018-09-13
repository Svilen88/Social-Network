export interface Post {
    author: string,
    post: string,
    time: {
        ect: number,
        lmt: number
    },
    uid: string,
    postId: string,
    error?: string
}
