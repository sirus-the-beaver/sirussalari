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
                                    id
                                    posts(first: 50) {
                                        edges {
                                            node {
                                                id
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
        <div className="dark:bg-gray-900 p-4 dark:text-white font-serif">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <div key={post.node.title} className="flex flex-col justify-between items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                        <h2 className="text-2xl font-bold mb-2">{post.node.title}</h2>
                        <h3 className="text-lg font-medium mb-4">{post.node.subtitle}</h3>
                        <img src={post.node.coverImage.url} alt={post.node.title} className="w-full mb-4" />
                        <p className="mb-2">{post.node.brief}</p>
                        <a href={post.node.url} target='_blank' rel='noopener noreferrer' className="text-blue-500 hover:underline">Read more</a>
                        <p className="mt-4">{post.node.readTimeInMinutes} minute read</p>
                        <div className="flex justify-center items-center gap-4">
                            <p className="mt-2">{post.node.views} views</p>
                            <p className="mt-2 flex items-center">{post.node.reactionCount}<FcLike className="ml-1" /></p>
                            <p className="mt-2 flex items-center">{post.node.responseCount}<FcSms className="ml-1" /></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}