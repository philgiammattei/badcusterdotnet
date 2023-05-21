import { StaticPost } from "../components/StaticPost";
import { loadPost } from "../loader";

function About(props: any) {
    const { post } = props;
    return <StaticPost post={post} />;
}

export const getStaticProps = async () => {
    const post = await loadPost(`about.md`);
    return { props: { post } };
};

export default About;
