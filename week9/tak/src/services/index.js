import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST 
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Daftar API - DELETE 
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);


const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;