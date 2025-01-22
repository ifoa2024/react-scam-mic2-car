import { useLoaderData } from "react-router-dom"

export default function Detail(){

    const [post, comments] = useLoaderData();
    console.log(post);
    console.log(comments);
    

    return (
        <>
            <h1>Pagina di dettaglio del post numero {post.id}</h1>
            <h3>Titolo: {post.title}</h3>
            <p>Descrizione: {post.body}</p>
            <p>Commenti:</p>
            <ul>
                {comments.map((comment, i)=>{
                    return <li key={i}>{comment.body} - {comment.email}</li>
                })}
            </ul>
        </>
    )
}