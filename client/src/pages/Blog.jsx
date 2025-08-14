import React, { useState, useEffect } from 'react';
import { FcLike, FcSms } from 'react-icons/fc';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;

    if (error) return <p className="text-center text-red-500">{error.message}</p>;

    return (
        <section className="min-h-screen py-8 px-4 dark:bg-gray-900 bg-gray-100 font-serif">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {posts.map(post => (
                    <div key={post.node.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-2">
                        <img src={post.node.coverImage.url} alt={post.node.title} className="w-full h-48 object-cover" />
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.node.title}</h2>
                            <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">{post.node.subtitle}</h3>
                            <p className="mb-4 text-gray-600 dark:text-gray-400">{post.node.brief}</p>
                            <a href={post.node.url} target='_blank' rel='noopener noreferrer' className="text-blue-500 hover:underline mb-4 block">Read more</a>
                            <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                                <span>{post.node.readTimeInMinutes} min read</span>
                                <div className="flex items-center">
                                    <span className="flex items-center mr-4">{post.node.views} views</span>
                                    <span className="flex items-center mr-4">{post.node.reactionCount}<FcLike className="mr-1" /></span>
                                    <span className="flex items-center">{post.node.responseCount}<FcSms className="mr-1" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}