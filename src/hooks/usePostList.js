// import {useEffect, useState} from "react";
// import {getDatabase,ref,query,orderByKey,get} from "firebase/database";
//
// export default function usePostList(){
//     const [error,setError] = useState(true);
//     const [loading,setLoading] = useState(false);
//     const [posts, setPosts] =useState([]);
//
//
//     useEffect(() => {
//         //database related Works
//         async function fetchPosts(){
//             const db = getDatabase();
//             const postsRef = ref(db,"jobpost");
//             const postQuery = query(
//                 postsRef,
//                 orderByKey()
//             );
//             try {
//                 setError(false);
//                 setLoading(true);
//
//                 //request data from database
//                const snapshot = await get(postQuery);
//                setLoading(false);
//                if(snapshot.exists()){
//                 setPosts((prevPosts) => {
//                     return [...prevPosts, ...Object.values(snapshot.val())]
//                 });
//                 console.log(posts)
//                }else
//                {
//
//                }
//             }catch (err) {
//                 console.log(err);
//                 setError(true);
//                 setLoading(false);
//             }
//
//         }
//
//         fetchPosts();
//     }, []);
//
//     return{
//         posts,
//     };
// }