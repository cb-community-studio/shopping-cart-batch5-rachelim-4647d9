import React from "react";

import { Button } from "primereact/button";

import { Card } from "primereact/card";

import { Divider } from "primereact/divider";

import { Image } from "primereact/image";

import { Panel } from "primereact/panel";

import { Carousel } from "primereact/carousel";



import product1 from "../../assets/example/product1.jpeg";

import product2 from "../../assets/example/product2.jpeg";

import product3 from "../../assets/example/product3.jpeg";

import post1 from "../../assets/example/post1.jpeg";

import post2 from "../../assets/example/post2.jpeg";

import post3 from "../../assets/example/post3.jpeg";



import banner1 from "../../assets/example/banner1.jpeg";

import banner2 from "../../assets/example/banner2.jpeg";

import banner3 from "../../assets/example/banner3.jpeg";



const MyHomePage = () => {

    const sliderItems = [

        {

            image: banner1,

            header: "Slide 1 Header",

            text: "Slide 1 Text",

        },

        {

            image: banner2,

            header: "Slide 2 Header",

            text: "Slide 2 Text",

        },

        {

            image: banner3,

            header: "Slide 3 Header",

            text: "Slide 3 Text",

        },

    ];



    const itemTemplate = (item) => {

        return (

            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">

                <div className="p-col-12 p-md-6">

                    <img src={item.image} alt={item.header} />

                </div>

                <div className="p-col-12 p-md-6">

                    <h2>{item.header}</h2>

                    <p>{item.text}</p>

                </div>

            </div>

        );

    };



    const featuredProducts = [

        {

            name: "Product 1",

            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            image: product1,

        },

        {

            name: "Product 2",

            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            image: product2,

        },

        {

            name: "Product 3",

            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            image: product3,

        },

    ];



    const recentBlogPosts = [

        {

            title: "Post 1",

            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            image: post1,

        },

        {

            title: "Post 2",

            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            image: post2,

        },

        {

            title: "Post 3",

            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            image: post3,

        },

    ];



    return (

        <div >

            <Carousel

                value={sliderItems}

                itemTemplate={itemTemplate}

                numVisible={1}

                numScroll={1}

                responsiveOptions={[

                    {

                        breakpoint: "1024px",

                        numVisible: 1,

                        numScroll: 1,

                    },

                    {

                        breakpoint: "768px",

                        numVisible: 1,

                        numScroll: 1,

                    },

                ]}

            />

            <div className="flex flex-column align-items-center justify-content-center">
                <h1>Welcome to My Site</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero sit amet suscipit scelerisque, lorem nisl iaculis lectus, sit amet porttitor odio est et eros. Praesent efficitur nibh in pharetra varius.</p>

                <Button label="Get Started" />

                <br />
            </div>



            <main>

                <section>

                    <Panel header="Featured Products">

                        <div className="p-grid p-nogutter flex justify-content-around align-items-stretch">
                            

                            {featuredProducts.map((product, index) => (

                                <div key={index} className="grid p-col-12 p-md-4 ">

                                    <Card title={product.name}>

                                        <Image src={product.image} alt={product.name} />

                                        <p>{product.description}</p>

                                    </Card>

                                </div>

                            ))}

                        </div>

                    </Panel>

                </section>
                <br></br>
                <section>

                    <Panel header="Recent Blog Posts" >

                        <div className="flex justify-content-around ">
                            {recentBlogPosts.map((post, index) => (

                                <div key={index} className="p-d-flex p-ai-center">

                                    <Image src={post.image} alt={post.title} width="150" />

                                    <div className="p-ml-3">

                                        <h3>{post.title}</h3>

                                        <p>{post.content}</p>

                                    </div>

                                </div>

                            ))}
                        </div>

                    </Panel>

                </section>

            </main>

            <footer className="p-d-flex p-jc-between p-ai-center">

                <nav>

                    <ul className="p-d-flex">

                        <li>

                            <a href="https://twitter.com">Twitter</a>

                        </li>

                        <li>

                            <a href="https://facebook.com">Facebook</a>

                        </li>

                        <li>

                            <a href="https://instagram.com">Instagram</a>

                        </li>

                    </ul>

                </nav>

                <div>

                    <p>© 2023 MySite. All rights reserved.</p>

                </div>

            </footer>

        </div>

    );

};



export default MyHomePage;

