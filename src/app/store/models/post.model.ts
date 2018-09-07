export interface Post {
    postId: {
        author: string,
        post: string,
        time: {
            ect: number,
            lmt: number
        },
        uid: string
        error?: string
    }
}
