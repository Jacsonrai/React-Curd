import{Row,Card,Button} from 'react-bootstrap'

import ProjectData from '../Data/ProjectData'
const ProjectCard=()=>{
  {console.log(ProjectData)}
    return(
      <Row>
       {ProjectData.map((item)=>{
           return(
        
               <Card style={{ width: '18rem',marginLeft:'10%'}}>
                <Card.Img variant="top" src={item.image} />
             <Card.Body>
              <Card.Title>{item.title}</Card.Title>
             <Card.Text>
             {item.Description}
             </Card.Text>
             <Button variant="primary" style={{ margin:'10px'}}>Edit</Button>
             <Button variant="danger">Delete</Button>
             </Card.Body>
             </Card>
           
             
                
           

           )
            

          })}
          </Row>
            
   
      
    )
}
export default ProjectCard;