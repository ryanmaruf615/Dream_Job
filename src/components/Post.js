import image from '../assets/images/jobPost.png';
import classes from "../styles/Post.module.css";



export default function Post({title, id, validFrom, validUntil,skill}){

    return(
        <div className={classes.post}>
            <div>
                <img src={image} alt={image}/>
                <p className="text-center">{title}</p>
            </div>
            <div className={classes.qmeta}>
                <p>Skill : {skill} </p>
                <p>Valid form {validFrom}</p>
                <p>Valid Until {validUntil}</p>
            </div>
        </div>


    );
}