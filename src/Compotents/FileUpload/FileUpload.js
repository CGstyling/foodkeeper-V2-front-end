import React, {useState} from "react";
import axios from "axios";

function FileUpload() {
    const [fileData, setFileData] = useState("");
    const [uri, setUri] = useState("");

    // extra button erbij voor uploading the file(is de GET)
    async function downloadFile(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        try{
            const result = await axios.get(uri,
                {
                    headers: {
                        "Content-Type": "application/json",
                         Authorization: `Bearer ${token}`,
                    },
                });
            console.log("is gelukt")
            // console.log(result)
        }catch (e) {
            console.error(e);
        }
    }

    // post is file is waar de client op submit drukt en er een link te voor schijn komt
    function getFile(event) {
        setFileData(event.target.files[0]);
    }

    async function uploadFile(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("file", fileData);

        const token = localStorage.getItem("token");

        try{
            const result = await axios.post("http://localhost:8080/foodkeeper/uploadFile",
                data,
             {
                headers: {
                    "Content-Type": "multipart/form-data",
                     Authorization: `Bearer ${token}`,
                },
            });
            alert(result.data.fileName.message);
            console.log(result)
            setUri(result.data.fileDownloadUri);
        }catch (e) {
            console.error(e);
        }
    }

    return(
        <form onSubmit={uploadFile}>
            <input type="file" name="file" onChange={getFile} required/>
            <input type="submit" name="upload"/>
            <button onClick={downloadFile}>download file</button>
        </form>
    );
}
export default FileUpload;