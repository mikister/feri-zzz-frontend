import PostNode from '../post-node/post-node';
import './post-timeline.css';

function PostTimeline({ posts, onSelectPost }) {
    return (
        <div className="posts-timeline">
            {posts.map((post, index) => (
                <PostNode
                    key={index}
                    title={post.title}
                    desc={post.desc}
                    onClick={() => {
                        onSelectPost(index);
                    }}
                />
            ))}
        </div>
    );
}

export default PostTimeline;
