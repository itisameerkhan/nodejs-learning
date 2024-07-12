import { useState } from "react";
import "./index.scss";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData,
        {
          "Content-type": "multipart/form-data",
        }
      );
      console.log(response.data);
      setImg(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="app">
      <h1>IMAGE UPLOAD</h1>
      <div className="app-input">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
      <img src={img} alt="img" />
    </div>
  );
};

export default App;
