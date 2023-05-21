import { PostData } from "../loader";
import { ScrollablePost } from "./ScrollablePost";


const RecentPosts = (props: {
    posts: PostData[]
}) => {
    return <div>
        {props.posts
            .filter(post => !post.hidden)
            .map((post, j) => {
                return <ScrollablePost post={post} key={j} />;
            })}
    </div>;
}

export default RecentPosts;