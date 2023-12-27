import classes from "../styles/Posts.module.css";
import Post from "./Post";
import {Link} from "react-router-dom";
import useGetAgreement from "../hooks/useGetAgreement";



export default function Posts(){


    const {loading,error,agreementData} = useGetAgreement()
    return(
        <div className={classes.posts}>
            {agreementData.length > 0 && agreementData.map((post) =>(
                <Link to={`/postDetails/${post.id}`} key={post.id}>
                    <Post
                        title={post.title}
                        id={post.id}
                        validFrom={post.validFrom}
                        validUntil={post.validUntil}
                    />
                </Link>
                ))}
            {!loading && agreementData.length === 0 && (<div >No Data Found ! </div>)}
            {error && (<div >There was an Error ! </div>)}

        </div>
    );
}