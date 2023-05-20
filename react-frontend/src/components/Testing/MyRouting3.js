import React, { useState } from "react";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { Button } from "primereact/button";

import { Divider } from "primereact/divider";

import "./MyContactPageCss.css";



function MyContactPageCss() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [subject, setSubject] = useState("");

    const [message, setMessage] = useState("");



    function handleSubmit(event) {

        event.preventDefault();

        // Send the form data to the server or do something else with it

    }



    return (

        <div className="contacts-page">

            <div className="header">

                <h1>Contact Us</h1>

                <p>Feel free to get in touch with us if you have any questions or feedback.</p>

            </div>



            <div className="contact-info">

                <h2>Contact Information</h2>

                <ul>

                    <li>

                        <strong>Address:</strong> 123 Main St, Anytown, USA

                    </li>

                    <li>

                        <strong>Phone:</strong> (123) 456-7890

                    </li>

                    <li>

                        <strong>Email:</strong> info@yourbusiness.com

                    </li>

                </ul>

            </div>



            <div className="contact-form">

                <h2>Send us a message</h2>

                <form onSubmit={handleSubmit}>

                    <div className="p-field">

                        <label htmlFor="name">Name: </label>

                        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />

                    </div>

                    <Divider />

                    <div className="p-field">

                        <label htmlFor="email">Email: </label>

                        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>

                    <Divider />

                    <div className="p-field">

                        <label htmlFor="subject">Subject: </label>

                        <InputText id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />

                    </div>

                    <Divider />

                    <div className="p-field">

                        <label htmlFor="message">Message: </label>

                        <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />

                    </div>

                    <Divider />

                    <Button type="submit" label="Submit" />

                </form>

            </div>

        </div>

    );

}



export default MyContactPageCss;