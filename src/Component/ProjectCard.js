import{Row,Card,Button} from 'react-bootstrap'
import ProjectData from '../Data/ProjectData'
import { useEffect,useState } from 'react'
const ProjectCard=()=>{
  const[data,setData]=useState()
  
  useEffect(()=>{
    (
      async()=>{
       const response =await fetch('http://localhost:3001/')
       setData(await response.json())
      }
    )()
   
  })
 
    return(
      <Row>
       {data?.map((item)=>{
           return(
        
               <Card style={{ width: '18rem',marginLeft:'10%'}}>
                <Card.Img variant="top" src={item.image} />
             <Card.Body>
              <Card.Title>{item.title}</Card.Title>
             <Card.Text>
             {item.description}
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