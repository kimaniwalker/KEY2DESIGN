import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import '../utils/scss/pages/_blogInput.scss';
import { NotificationManager, NotificationContainer } from 'react-notifications';

const BlogInput = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [data, setData] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [blogPosted, setBlogPosted] = useState(false);
    const { history, location, match } = useReactRouter();

    const { from } = location.state || { from: { pathname: "/admin" } };


    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    const handleSelectedFile = (event) => {
        setSelectedFile(event.target.files[0])
        console.log(event.target.files[0]);
    }

    const handleSubmit = async () => {
        let fd = new FormData();
        fd.append('file', selectedFile, selectedFile.name);

        try {
            let response = await fetch('https://api.cloudinary.com/v1_1/lokiddo/image/upload?upload_preset=muuqonjl', {
                method: 'POST',
                body: fd
            });
            let data = await response.json();
            console.log(data);
            setData([data]);
            console.log(data.url);

            let object = {
                title: title,
                content: content,
                image: data.url
            };
            console.log(object);

            await fetch("/api/blogList", {
                method: "POST",
                body: JSON.stringify(object),
                headers: new Headers({ "Content-Type": "application/json" })
            });

            NotificationManager.success("Blog Posted");
            setTimeout(() => {
                setBlogPosted(true);
            }, 1000);

        } catch (e) {

        }

    }

    if (blogPosted) {
        return <Redirect to={from} />
    } else
        return (
            <div>

                <div className="col">
                    <NotificationContainer />
                    <form>
                        <input
                            id="titleInput"
                            className="form-control form-control-md p-3 mb-3 bg-white rounded col-auto"
                            value={title}
                            onChange={handleTitle}
                            placeholder="Title" />

                        <textarea
                            className="form-control form-control-md col-auto p-3 mb-3 bg-white rounded"
                            id="contentInput" rows="5"
                            maxLength="50"
                            value={content}
                            onChange={handleContent}
                            placeholder="Message (Max 50 Char)">

                        </textarea>
                        <div className="mt-2 mb-3">
                            <input type="file"
                                onChange={handleSelectedFile} formEncType="application/x-www-form-urlencoded" name="file"></input>
                        </div>

                        <div className="row mt-3 ml-1 pb-2">
                            <h3 className="text-primary">
                                Characters Left: {content.length}/50
                    </h3>


                        </div>

                        <button
                            type="button" className="btn btn-success mt-2 mb-3"
                            onClick={handleSubmit}>Submit</button>


                    </form>



                </div>

            </div>
        );

}

export default BlogInput;