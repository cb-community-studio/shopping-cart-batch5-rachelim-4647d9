import React from "react";

import { Panel } from "primereact/panel";

import { Divider } from "primereact/divider";

import { Image } from "primereact/image";

import { Card } from "primereact/card";



const MyAboutPage = () => {

    const aboutContent = {

        title: "About Our Company",

        description: "We are a company that does great things.",

        foundedYear: 2020,

        founders: [

            {

                name: "John Doe",

                position: "Founder and CEO",

                profilePicture: "https://picsum.photos/200/200",

            },

            {

                name: "Jane Smith",

                position: "Founder and CTO",

                profilePicture: "https://picsum.photos/200/201",

            },

            {

                name: "Darmandran",

                position: "Programmer",

                profilePicture: "https://picsum.photos/200/202",

            },

        ],

    };



    return (

        <div>

            <Panel header={aboutContent.title}>

                <p>{aboutContent.description}</p>

                <p>Founded in {aboutContent.foundedYear}</p>

            </Panel>

            <Divider />

            <TeamSection founders={aboutContent.founders} />

        </div>

    );

};



const TeamSection = ({ founders }) => {

    return (

        <div>

            <h2>Our Team</h2>

            <div className="flex justify-content-around ">
                {founders.map((founder, index) => (

                    <div key={index} className="p-col-12 p-md-4">

                        <Card title={founder.name} style={{ backgroundColor: "#f2f2f2" }} className="p-p-3">

                            <Image src={founder.profilePicture} alt={founder.name} width="200" />

                            <p>{founder.name}</p>

                            <p>{founder.position}</p>

                        </Card>

                        <Divider />

                    </div>

                ))}
            </div>

        </div>

    );

};



export default MyAboutPage;