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
                /* //loading ? (
                    <p>Loading...</p>
                ): */  (
                    blog.map(item => <BlogItem key={item.id}
                        title={item.title} body={item.body}
                        imagen={item.imagen}
                        writer={item.writer} />)
                )
            }
        </section>
    );

    /* const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState([]);

    const cargarBlog = async () => {
        setLoading(true);

        const response = await axios.get("http://localhost:3000/api/blog");
        setBlog(response.data);
        setLoading(false);
        //console.log("test response", response.data);
    }


    useEffect(() => {
        cargarBlog();
    }, []);

    /* useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch('https://yourapi.com');
            // convert the data to json
            const json = await response.json();

            // set state with the result
            setData(json);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);;
    }, [])
 
    return (
        <section className="holder">
            <h2>Blogs</h2>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    blog.map(item => <BlogItem key={item.id}
                        title={item.title} body={item.body}
                        imagen={item.imagen}
                        writer={item.writer} />)
                )
            }
        </section>
    ) */
}
export default Blog;