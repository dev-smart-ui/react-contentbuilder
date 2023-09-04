import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {addExternalScripts, addExternalStyles, renderHtml} from './util';
import "./Home.css";

export default function Home() {

    useEffect(() => {
        onLoad();
    }, []);
      
    async function onLoad() {

        document.querySelector('.container').style.opacity = 0; // optional: hide area until content loaded

        // Load content from the server
        axios.get('/load').then((response)=>{
            
            let html;

            if(response.data.html) {

                html = response.data.html;

            } else {  // Or load sample content on first start

                html = `<div class="row clearfix">
                    <div class="column full">
                        <h2 class="size-32" style="text-align: center; font-weight: 400;">Simply Beautiful</h2>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="column full" data-noedit="">
                        <div class="spacer height-40"></div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="column half">
                        <img src="uploads/office2.png" alt="">
                    </div><div class="column half">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>`;
            }

            // Render html content
            renderHtml(html);

            document.querySelector('.container').style.opacity = 1; 

            // Enable Lightbox
            addExternalStyles('assets/scripts/lightbox/lightbox.css');
            addExternalScripts('assets/scripts/lightbox/lightbox.js',()=>{
                window.lightbox.init();
            });
            
        });
    }

    return (
        <>

            <div className="panel-home is-cms">
                <section>
                    <Link className="is-btn" to={'/edit'}>Edit</Link>
                </section>
            </div>


            <div className="container">
            </div>

        </>
    );
}
