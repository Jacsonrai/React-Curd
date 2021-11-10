import InputField  from "./InputField"
import ProjectCard from "./ProjectCard"
const Index =()=>{

    return(
        <div >
        <h1 style={{textAlign: 'center',fontWeight:'900',fontFamily:'Helvetica'}}>React-Curd</h1>
        <InputField/>
        <h1 style={{textAlign: 'center',fontWeight:'900',fontFamily:'Helvetica'}}>Project</h1>
        <ProjectCard/>
                </div>
    )
}
export default Index