import React, {useState} from 'react';
import './UploadForm.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  
    const types = ['image/png', 'image/jpeg'];
  
    const handleChange = (e) => {
      let selected = e.target.files[0];
  
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    };
  
    return (
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>Add Image</span>
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
      </form>
    );
}

export default UploadForm;