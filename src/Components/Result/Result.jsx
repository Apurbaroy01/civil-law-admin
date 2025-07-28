import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Result = () => {
    const studentDta = useLoaderData()
    console.log(studentDta)
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>

                        <th></th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Exam-1</th>
                        <th>Exam-2</th>
                        <th>Exam-3</th>
                        <th>Exam-4</th>
                        <th>Exam-5</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentDta.map((data, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{data.name}</th>
                                <td>{data.roll}</td>
                                <td>{data.email}</td>
                                <td>{data.email}</td>
                                <td>{data.email}</td>
                                <td>{data.email}</td>
                                <td>{data.email}</td>
                                
                                
                                
                    
                            </tr>
                        )
                    }
                    <button className='btn btn-primary'>Update</button>
                </tbody>

            </table>
        </div>
    );
};

export default Result;