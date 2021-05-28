import './post-node.css';

function PostNode({ title, desc, onClick }) {
    return (
        <div className="posts-node" onClick={onClick}>
            <h5>{title}</h5>
            <small>{desc}</small>
        </div>
    );
}

export default PostNode;
