import classes from "../styles/Posts.module.css";
import Post from "./Post";
import {Link} from "react-router-dom";
import useGetAgreement from "../hooks/useGetAgreement";
import {da} from "date-fns/locale";
import Loading from "./Loading";



export default function Posts(){
    const {loading,error,agreementData} = useGetAgreement()




    return(
        <div className={classes.posts}>
            {agreementData.length > 0 && agreementData.map((post) =>(
                <Link to={`/postDetails/${post.id}`} key={post.id}>
                    <Post
                        title={post.title}
                        id={post.id}
                        validFrom={printDate(post.jobStartDate)}
                        validUntil={printDate(post.jobEndDate)}
                        skill={post.skill}
                        teamMember={post.teamMember}
                    />
                </Link>
                ))}
            {loading && agreementData.length === 0 &&(<div ><Loading type="spokes" color="#00f7ff"/> </div>)}
            {!loading && agreementData.length === 0 && (<div >No Data Found ! </div>)}
            {error && (<div >There was an Error ! </div>)}

        </div>
    );
}

function printDate(date){
    try{
        return new Intl.DateTimeFormat(['ban', 'id']).format(new Date(date));
    }
    catch (exc){
        return date;
    }
}