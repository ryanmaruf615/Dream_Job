import image from '../assets/images/jobPost.png';
import classes from "../styles/Post.module.css";



export default function Post({title, id, validFrom, validUntil,teamMember}){

    return(
        <div className={classes.post}>
            <div>
                <img src={image} alt={image}/>
                <p className="text-center">{title}</p>
            </div>
            <div className={classes.qmeta}>
                <p>Team Member : {teamMember} </p>
                <p>valid form {validFrom}</p>
                <p>valid Until {validUntil}</p>
            </div>
        </div>


    );
}