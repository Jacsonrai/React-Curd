import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const InputField = () => {
  const[title, setTitle] = useState()
  const[image, setImage] = useState()
  const[description, setDescription] = useState()
  console.log(title,image,description)

  const Submit = async () => {
    await fetch('http://localhost:3001/post', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        'Accept': 'application/json'

      },
      body:JSON.stringify({
        title,
        image,
        description
      })
    })
  }

  return (
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 10px', marginLeft: '30%', marginRight: '30%',}}>
      <Form style={{ marginLeft: '15px', fontWeight: '500',marginTop: '10px' }}>
        <Form.Text style={{ marginLeft: '15px', fontWeight: '900'}}>Post Your Interest </Form.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ marginLeft: '15px', fontWeight: '500'}}>
          <Form.Control type="text" placeholder="Please enter title here" style={{ width: '400px',marginTop:'5px' }} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput2" style={{ marginLeft: '15px', fontWeight: '500'}} >
          
          <Form.Control type="text" style={{ width: '400px' }} onChange={(e) => setImage(e.target.value)} placeholder='Project ImageUrl' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ marginLeft: '15px', fontWeight: '500'}}>
          
          <Form.Control as="textarea" rows={3} style={{ width: '500px' }} onChange={(e) => setDescription(e.target.value)} placeholder='please enter description' />
        </Form.Group>
      </Form>
      <Button variant="success" style={{ marginLeft: '40%', marginBottom: '10px' }} onClick={Submit}>Submit</Button>
    </div>
  )
}
export default InputField;