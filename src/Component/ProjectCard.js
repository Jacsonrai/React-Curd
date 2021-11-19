import { Row, Card, Button } from 'react-bootstrap'
import './projectCard.css'

import { useEffect, useState } from 'react'
const ProjectCard = () => {
  const [data, setData] = useState()

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:3001/')
        setData(await response.json())
      }
    )()

  })

  return (
    <Row>
      {data?.map((item) => {
        return (

          <Card style={{ width: '280px', marginLeft: '10%' ,marginTop:'20px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 10px'}}>
            <Card.Img variant="top" src={item.image} className="cardImage" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button variant="primary" style={{ margin: '10px' }}>Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        )
      })}
    </Row>



  )
}
export default ProjectCard;