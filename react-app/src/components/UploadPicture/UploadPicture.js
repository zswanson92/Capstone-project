import React, {useState} from "react";


const UploadPicture = () => {
    const [image, setImage] = useState(null);


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
        </form>
    )
}

export default UploadPicture;
