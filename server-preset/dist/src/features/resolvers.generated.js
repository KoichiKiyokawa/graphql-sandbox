import { Post } from "./post/resolvers/Post";
import { post as Query_post } from "./post/resolvers/Query/post";
import { posts as Query_posts } from "./post/resolvers/Query/posts";
import { user as Query_user } from "./user/resolvers/Query/user";
import { users as Query_users } from "./user/resolvers/Query/users";
import { User } from "./user/resolvers/User";
export const resolvers = {
    Query: {
        post: Query_post,
        posts: Query_posts,
        user: Query_user,
        users: Query_users,
    },
    Post: Post,
    User: User,
};
