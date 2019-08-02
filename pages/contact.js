import Layout from '../components/MyLayout.js'
import { Form, FormGroup, Label, Input, FormText, Button, FormFeedback} from 'reactstrap'

export default () => {

    return (

    <Layout title='Contact'>
        <Form className="form" onSubmit={ (e) => this.submitForm(e)} >
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="iemand@iets.nl" />

            {/* <FormFeedback valid>
                That's a tasty looking email you've got there.
            </FormFeedback>
            <FormFeedback>
                Uh oh! Looks like there is an issue with your email. Please input a correct email.
            </FormFeedback>

            <FormText>Your username is most likely your email.</FormText>
            */}

            </FormGroup>
            <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </Layout>

);
}

function validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
    } else {
        validate.emailState = 'has-danger'
    }
    return { validate }
}


async function handleChange (event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
        [ name ]: value,
    });
}

function submitForm(e) {
  e.preventDefault();
  console.log(`Email: ${ this.state.email }`)

  const nodemailer = require('nodemailer');


}
