import { Link, useLoaderData } from "react-router-dom";

export default function Info(){
    const posts = useLoaderData();
    console.log(posts);
    

    return (
        <>
            <h1>I nostri post</h1>
            {posts.map((post)=>{
                return (
                    <div key={post.id}>
                        <p >Titlo: {post.title}</p>
                        <Link to={`/info/detail/${post.id}`}>Dettaglio</Link>
                    </div>
                )
            })}
        </>
    )
}

