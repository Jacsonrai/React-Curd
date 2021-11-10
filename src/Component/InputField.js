import {Form,Button} from 'react-bootstrap'
const InputField=()=>{
    return(
        <div style={{boxShadow:'rgba(0, 0, 0, 0.15) 0px 1px 10px',marginLeft:'30%',marginRight:'30%'}}>
        <Form style={{marginLeft:'15px',fontWeight:'500'}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Please enter title here"  style={{width:'400px'}}/>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Project Image</Form.Label>
    <Form.Control type="file" style={{width:'400px'}}/>
  </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
     <Form.Control as="textarea" rows={3}style={{width:'500px'}} />
     </Form.Group>
        </Form>
        <Button variant="success" style={{marginLeft:'40%',marginBottom:'10px'}}>Submit</Button>
        </div>
    )
}
export default InputField;