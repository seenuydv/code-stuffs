// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/esm/Container';
// import './form.css';

// function Faram() {
//   function handleClick() {
//     alert('You clicked me!');
//   }
//   return (
//     <>
//     <Container fluid > 
//  <Form className='size'>
//     <Form.Group className="mb-3" controlId="formBasictext">
//         <Form.Label>Name </Form.Label>
//         <Form.Control type="text" placeholder="Full Name" />
//     </Form.Group>
      
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="show password" />
//       </Form.Group>
//       <Button variant='primary ' onClick={handleClick}>
//       submit
//     </Button>
//     </Form>
//     </Container>
//     </>
//   );
// }

// export default Faram;














import React,{useState} from 'react';
// import { Button } from 'react-bootstrap';

function Faram (){
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={handleSubmit}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
   
export default Faram;




















// const[data,setData]=useState('');

//     function Change(evt){
//         console.log (evt,"<=====")
//         setData(evt.target.value) 
//      }

//      function Tap(){
//         setData()

//       }
//     return(
//         <>
//         <br/>
//         <input type='text' onChange={Change} placeholder='email'/>
//         <br/>
//         <p> USer Input :- {data}</p>
//         <Button  variant='primary ' onClick={Tap}>submit</Button>
//          </>
//     );
// }







