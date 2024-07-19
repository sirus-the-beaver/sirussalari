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
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <div key={post.node.title} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-2xl font-bold mb-2">{post.node.title}</h2>
                        <h3 className="text-lg font-medium mb-4">{post.node.subtitle}</h3>
                        <img src={post.node.coverImage.url} alt={post.node.title} className="w-full mb-4" />
                        <p className="mb-4">{post.node.brief}</p>
                        <a href={post.node.url} target='_blank' rel='noopener noreferrer' className="text-blue-500 hover:underline">Read more</a>
                        <p className="mt-4">{post.node.readTimeInMinutes} minute read</p>
                        <p className="mt-2">{post.node.views} views</p>
                        <p className="mt-2">{post.node.reactionCount}<FcLike /></p>
                        <p className="mt-2">{post.node.responseCount}<FcSms /></p>
                    </div>
                ))}
            </div>
        </div>
    )
}