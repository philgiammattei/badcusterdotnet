import Link from "next/link";
import { PostData } from "../loader";
import { Markdown } from "./Markdown";

export const ScrollablePost: React.FunctionComponent<{ post: PostData }> = ({
    post,
}) => {
    const { title, subtitle } = post;
    console.log(post.path);

    return (
        <div className="blog-post">
            <div className="blog-post-title">
                {title && <Link href={post.path}><h1>{title}</h1></Link>}
                {subtitle && <h2>{subtitle}</h2>}
            </div>

            <div className="blog-post-content">
                <Markdown source={post.content} />
            </div>
        </div>
    );
};