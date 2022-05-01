import React, { Component } from 'react'

import{Table,Button} from 'reactstrap'
import axios from 'axios';

class StudentManagement extends Component{
    state={
        students:[]
    }
    componentDidMount(){
   axios.get('http://localhost:4444/students').then((Response)=>{
       this.setState({
       students:Response.data
       })
   });
    }
    render(){
        let students=this.state.students.map((students)=>{
        
            return(
                <tr>
                    <td>{students.id}</td>
                    <td>{students.name}</td>
                    <td>{students.email}</td>
                    <td>
                    <Button color='success' size='sm' className='MR2'>EDIT</Button>
                           <Button color='danger' size='sm'>Delete</Button>
                    </td>
                </tr>
            )
        });
        return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#SNO</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                
                <tbody>
                   {students}
                </tbody>
            </table>
        </div>
        )
    }
}
export default StudentManagement;