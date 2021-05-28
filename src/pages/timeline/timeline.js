import { Fragment, useState } from 'react';
import PostTimeline from './components/post-timeline/post-timeline';

function TimelinePage() {
    let [selectedPostIndex, selectPost] = useState(0);
    let posts = [
        {
            title: 'AAA',
            desc: 'desc',
            body: '<p>main text</p>',
        },
        {
            title: 'BBB',
            desc: 'desc',
            body: '<ul><li>1</li><li>2</li></ul>',
        },
        {
            title: 'CCC',
            desc: 'desc',
        },
    ];

    return (
        <Fragment>
            <PostTimeline posts={posts} onSelectPost={selectPost} />

            <h3>{posts[selectedPostIndex].title}</h3>
            <p>{posts[selectedPostIndex].desc}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: posts[selectedPostIndex].body || '',
                }}
            ></div>
        </Fragment>
    );
}

export default TimelinePage;
