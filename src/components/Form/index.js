import React from 'react'
import * as emailjs from 'emailjs-com'
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
        const self = this;

        event.preventDefault()

        this.setState({
            isSubmitting: true,
        })

        const templateParams = {
            name: this.state.name,
            email: this.state.email,
            notes: this.state.notes,
        }

        emailjs.send('default_service', process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams, process.env.REACT_APP_EMAILJS_USERID)
            .then(function(response) {
                self.setState({
                    isSubmitting: false,
                })
            }, function(error) {
                self.setState({
                    isSubmitting: false,
                })
            })
    }

    render () {
        const isEnabled =
            this.state.name.length > 0 &&
            this.state.email.length > 0 &&
            this.state.notes.length > 0

        return (
            <div>
                <Button>Can we talk?</Button>
                <Form onSubmit={this.handleSubmit}>
                    <FlexCenter>
                        <FlexHalf>
                            <label>
                                What&rsquo;s your name?
                                <input type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required />
                            </label>
                        </FlexHalf>
                        <FlexHalf>
                            <label>
                                What&rsquo;s your email?
                                <input type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required />
                            </label>
                        </FlexHalf>
                        <FlexChild>
                            <label>
                                What&rsquo;s on your mind?
                                <textarea name="notes"
                                    value={this.state.notes}
                                    onChange={this.handleChange} />
                            </label>
                        </FlexChild>
                        <FlexHalf>
                            <Button type="submit" disabled={!isEnabled || this.state.isSubmitting}>Let&rsquo;s chat!</Button>
                        </FlexHalf>
                    </FlexCenter>
                </Form>
            </div>
        )
    }
}

export default ContactForm
