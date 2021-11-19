import InputField  from "./InputField"
import ProjectCard from "./ProjectCard"
import {Form} from 'react-bootstrap'
const Index =()=>{

    return(
        <div >
        <h1 style={{textAlign: 'center',fontWeight:'900',fontFamily:'Helvetica'}}>React-Curd</h1>
        <InputField/>
        <Form.Text style={{fontWeight: '900',fontSize:'40px',marginLeft:'40%'}}>Post Your Interest </Form.Text>
        <ProjectCard/>
                </div>
    )
}
export default Index