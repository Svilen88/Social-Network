import { PostsEffects } from './posts.effect'
import { CommentsEffects } from './comments.effect'

export const postsEffects: any[] = [PostsEffects]
export const commentsEffects: any[] = [CommentsEffects]

export * from './posts.effect'
export * from './comments.effect'