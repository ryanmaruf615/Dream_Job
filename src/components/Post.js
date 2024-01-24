// ... (import statements and other code)
import image from '../assets/images/jobPost.png';
import classes from "../styles/Post.module.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Rating} from "@smastrom/react-rating";


export default function Post({ title, id, validFrom, validUntil, skill, teamMember }) {
    const [review, setReview] = useState(0);
    const apiUrl = `https://dg4gi3uw0m2xs.cloudfront.net`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Getting data for Average review
                const response3 = await axios.get(apiUrl + "/agreement/" + id + "/review/avg");
                setReview(response3.data);
                console.log(response3.data);
            } catch (error) {
                console.error('Error fetching agreement data:', error);
                // Set review to 0 in case of an error
                setReview(0);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={classes.post}>
            <div>
                <img src={image} alt={image}/>
                <p className="text-center">{title}</p>
            </div>
            <div className={classes.qmeta}>
                <p>Skill : {skill} </p>
                <p>Team Member {teamMember}</p>
                <p>Valid form {validFrom}</p>
                <p>Valid Until {validUntil}</p>
                <Rating style={{ maxWidth: 150 }} value={review} readOnly />
            </div>
        </div>
    );
}
