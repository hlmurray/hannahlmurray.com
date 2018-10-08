import React from 'react'
import { Button, Form, FlexCenter, FlexChild, FlexHalf } from '../../styling'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            notes: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + this.state.email + this.state.notes);
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <Button>Get in touch</Button>
                <Form onSubmit={this.handleSubmit}>
                    <FlexCenter>
                        <FlexHalf>
                            <label>
                                What&rsquo;s your name?
                                <input type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                            </label>
                        </FlexHalf>
                        <FlexHalf>
                            <label>
                                Email?
                                <input type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </label>
                        </FlexHalf>
                        <FlexChild>
                            <label>
                                What do you wanna know?
                                <textarea name="notes"
                                    value={this.state.notes}
                                    onChange={this.handleChange} />
                            </label>
                        </FlexChild>
                        <FlexHalf>
                            <input type="submit" />
                        </FlexHalf>
                    </FlexCenter>
                </Form>
            </div>
        )
    }
}

export default ContactForm
