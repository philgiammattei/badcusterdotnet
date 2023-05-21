import { PostData } from "../loader";
import { PostCard } from "../components/PostCard";


const FavoritePosts = (props: {
    posts: PostData[]
}) => {
    return <div className="post-card-container">
        {props.posts
            .filter(post => post.favorite)
            .map((post, j) => {
                return <PostCard post={post} key={j} />;
            })}
    </div>;
}

export default FavoritePosts;