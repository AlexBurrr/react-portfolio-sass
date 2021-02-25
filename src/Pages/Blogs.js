import React from 'react';
import allBlogs from '../Components/allBlogs'
import Title from '../Components/Title'

const Blogs = () => {
    return (
        <div>
            <div className="b-title">
                <Title title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>

            <div className='blogsPage'>
                {
                    allBlogs.map((blog) => {
                        return <div className='blog' key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="" />
                                <a href={blog.link} className='blog-link'>
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Blogs
