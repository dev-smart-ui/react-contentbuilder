import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {addExternalScripts, addExternalStyles, renderHtml} from './util';
import "./Home.css";

export default function Home({queryPageParam}) {
    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {

        document.querySelector('.container').style.opacity = 0; // optional: hide area until content loaded

        try {
            // Load content from the server
            axios.get('/load', {
                params: {
                    page: queryPageParam
                }
            }).then((response) => {
                let html;
                if (response.data.html && queryPageParam) {
                    html = response.data.html;
                } else {
                    html = `<div class="row clearfix">
                    <div class="column full">
                        <h2 class="size-32" style="text-align: center; font-weight: 400;">Home page</h2>
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
                        <p>Looking for a flexible and powerful drag-and-drop HTML editor for your web projects? ContentBuilder.js is the ultimate solution that enables you to create highly customizable content layouts, seamlessly adapting to any CSS framework such as Bootstrap, Foundation, or Tailwind CSS. With its user-friendly interface and feature-rich capabilities, ContentBuilder.js takes web content creation to the next level. Try it now and elevate your web development experience.</p>
                    </div>
                </div>`;
                }

                // Render html content
                renderHtml(html);

                document.querySelector('.container').style.opacity = 1;

                // Enable Lightbox
                addExternalStyles('assets/scripts/lightbox/lightbox.css');
                addExternalScripts('assets/scripts/lightbox/lightbox.js', () => {
                    window.lightbox.init();
                });

            });
        } catch (error) {
            console.error("error", error);
        }

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
