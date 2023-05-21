import { StaticPost } from "../components/StaticPost";
import { loadPost } from "../loader";

function Links(props: any) {
    const { post } = props;
    return <StaticPost post={post} />;
}

export const getStaticProps = async () => {
    const post = await loadPost(`links.md`);
    return { props: { post } };
};

export default Links;
