import {Table, Button,Modal,ModalHeader,ModalBody,ModalFooter, } from "reactstrap";
import React,{Component} from "react";
import axios from "axios";

class StudentManagement2 extends Component{
    state={
        students:[],
        newStudentModel:false
    }
    componentDidMount(){
        axios.get('http://localhost:4444/students').then((Response)=>{
            this.setState({
            students:Response.data
            })
        });
    }
    toggleNewStudentModel=()=>{
        this.setState({
            newStudentModel:true
        })
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
      <Button color='primary' onClick={this.toggleNewStudentModel.bind(this)}>Add Student</Button>
<Modal isOpen={this.state.newStudentModel} toggle={this.toggleNewStudentModel.bind(this)}>
     <ModalHeader toggle={this.toggleNewStudentModel.bind(this)}>ModelTitle</ModalHeader>
     <ModalBody>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem praesentium excepturi veritatis hic quas repellendus aperiam, laudantium quaerat temporibus ea molestiae. Atque dolorem enim error, iure incidunt cupiditate maiores harum quos adipisci numquam dolore ducimus, molestiae quisquam dolores
    </ModalBody>
    <ModalFooter>
       <Button color="primary" onClick={this.toggleNewStudentModel.bind(this)}>Do SomeThing</Button>
       <Button color="secondary" onClick={this.toggleNewStudentModel.bind(this)}>Cancel</Button>
    </ModalFooter>
</Modal>

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


export default StudentManagement2;