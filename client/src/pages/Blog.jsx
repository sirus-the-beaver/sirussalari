import React, { useState, useEffect } from 'react';
import { FcLike, FcSms } from 'react-icons/fc';

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://gql.hashnode.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: `
                            query Publication {
                                publication(host: "scrappedscript.com") {
                                    posts(first: 50) {
                                        edges {
                                            node {
                                                title
                                                subtitle
                                                coverImage {
                                                    url
                                                }
                                                readTimeInMinutes
                                                views
                                                reactionCount
                                                responseCount
                                                brief
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                            `
                    })
                });

                const result = await response.json();
                if (result.data) {
                    setPosts(result.data.publication.posts.edges);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <div>
                {posts.map(post => (
                    <div key={post.node.title}>
                        <h2>{post.node.title}</h2>
                        <h3>{post.node.subtitle}</h3>
                        <img src={post.node.coverImage.url} alt={post.node.title} />
                        <p>{post.node.brief}</p>
                        <a href={post.node.url} target='_blank' rel='noopener noreferrer'>Read more</a>
                        <p>{post.node.readTimeInMinutes} minute read</p>
                        <p>{post.node.views} views</p>
                        <p>{post.node.reactionCount}<FcLike /></p>
                        <p>{post.node.responseCount}<FcSms /></p>
                    </div>
                ))}
            </div>
        </div>
    )
}