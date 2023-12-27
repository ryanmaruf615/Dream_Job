import React from 'react';
import {Table} from "react-bootstrap";

const Dashboard = () => {
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