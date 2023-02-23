import React, {useState} from "react";
// import { useHistory } from "react-router-dom";


const UploadPicture = () => {
    // const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    // const [imageLoading, setImageLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);


        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
        }
        else {
            console.log("error");
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            <button type="submit">Submit</button>
            {/* {(imageLoading)&& <p>Loading...</p>} */}
        </form>
    )
}

export default UploadPicture;
