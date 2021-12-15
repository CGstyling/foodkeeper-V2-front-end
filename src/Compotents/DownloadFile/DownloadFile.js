import React, {useEffect, useState} from "react";
import axios from "axios";

function DownloadFile({uri, nameImage, classname}) {

    const [image, setImage] = useState(null);

    useEffect(() => {

        async function downloadFile() {

            const token = localStorage.getItem("token");

            try {
                if(uri === null){
                    return;
                }

                const result = (await axios.get(uri,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        },
                        responseType: 'blob',
                    })).data;
                setImage(URL.createObjectURL(result));
            } catch (e) {
                console.error(e);
            }
        }
        downloadFile()
    }, [])

    return(
        <>
            {uri &&
            <img className={classname} src={image} alt={nameImage}/>
            }
        </>
    );
}

export default DownloadFile;