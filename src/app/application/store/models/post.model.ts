export interface Post {
    [postId: string]: {
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
