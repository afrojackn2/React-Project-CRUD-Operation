import {Table, Button,Modal,ModalHeader,ModalBody,ModalFooter,Form,FormGroup,Label,Input} from "reactstrap";
import React,{Component} from "react";
import axios,{Axios} from "axios";

class StudentManagement3 extends Component{
    state={
        students:[],
        newStudentDataObj:{
            name:'',
            email:''
        },
        newStudentMode:false
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
            newStudentModel:!this.state.newStudentModel
        })
    }  
    addStudent=()=>{
        Axios.post('http://localhost:4444/students',this.state.newStudentDataObj).then(
           (response)=>{
           let{students}=this.state;
           students.push(response.data);
           this.setState({students});
          } 
        )
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
              <form>
                  <FormGroup>
                      <label for="stuName">StudentName</label>
                      <input type='text' id="stuName" value={this.state.newStudentDataObj.name} onChange={(event)=>{
                          let{newStudentDataObj}=this.state;
                          newStudentDataObj.name=event.target.value;
                          this.setState({newStudentDataObj})
                      }}></input>
                  </FormGroup>
                  <FormGroup>
                  <label for="stuEmail">Student Email</label>
                      <input type='text' id="stuEmail" value={this.state.newStudentDataObj.email} onChange={(event)=>{
                          let{newStudentDataObj}=this.state;
                          newStudentDataObj.email=event.target.value;
                          this.setState({newStudentDataObj})
                      }}></input>
                  </FormGroup>
              </form>
    </ModalBody>
    <ModalFooter>
       <Button color="primary" onClick={this.toggleNewStudentModel.bind(this)}>Add Student</Button>
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


export default StudentManagement3;