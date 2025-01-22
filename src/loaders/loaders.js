// Questo è il Loader della pagina Info

export async function getInfoData(){
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await promise.json();
    return json;
}

export async function getPostData({params}){
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const json = await promise.json();
    return json;
}

export async function getCommentsData({params}){
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const json = await promise.json();
    return json;
}

export async function getDetailData(params){
    const post = await getPostData(params);
    const comments = await getCommentsData(params);
    return [post, comments];
}