import { useState, useEffect } from "react";
import axios from "axios";
import BlogItem from "../components/layout/blog/BlogItem.js";

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/blog")
            .then(response => {
                setBlog(response.data);
            });
    }, []);
    return (
        <section className="holder">

            {
                (
                    blog.map(item => <BlogItem key={item.id}
                        title={item.title} body={item.body}
                        imagen={item.imagen}
                        writer={item.writer} />)
                )
            }
        </section>
    );
}
export default Blog;