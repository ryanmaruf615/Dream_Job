import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";
import {id} from "date-fns/locale";
import {useParams} from "react-router-dom";

const Dashboard = () => {


        const { skill } = useParams();

        //const apiUrl2 = `http://35.174.107.106:3000/agreement/${dataById.skill}`;
        const apiUrl = `http://35.174.107.106:3000/agreement/`;
        const [dataById, setDataById] = useState({});
        const [tableData, setSetTableData] = useState({});
        const [skillfrom, setSkillfrom] = useState();

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const response = await axios.get(apiUrl);
                                setDataById(response.data);
                                console.log("response.data")
                                console.log(dataById)
                                console.log("skillssss")
                                console.log(dataById.skill)



                               const apiUrl2 = `http://35.174.107.106:3000/agreement/skill`;
                                const tableResponse = await axios.get(apiUrl2);
                                setSetTableData(tableResponse.data);
                                console.log("tableResponse.data")
                                console.log(tableResponse)


                        } catch (error) {
                                console.error('Error fetching agreement data:', error);
                        }
                };

                fetchData();
        }, []);



        return (
        <div>
                <h1 className="text-center"> Related Jobs </h1>

            <Table responsive="xl">
            <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Role</th>
            <th>Job Description</th>
            <th>Experience Level</th>
            <th>Technology Level</th>
            <th>Salary</th>
            <th>cycle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            </tr>
            </tbody>
            </Table>
        </div>
    );
};

export default Dashboard;