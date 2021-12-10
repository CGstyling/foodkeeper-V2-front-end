import React, {useState} from "react";
import axios from "axios";

function FileUpload() {
    const [fileData, setFileData] = useState("");
    const [uri, setUri] = useState("");

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

    async function uploadFile(e) {
        e.preventDefault();
        setFileData(e.target.files[0]);

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
        <>
            {/*<AddRecipe uploadFile={uploadFile}/>*/}
            <input type="file" name="file" onChange={uploadFile} />
            <button onClick={downloadFile}>download file</button>
        </>
    );
}
export default FileUpload;