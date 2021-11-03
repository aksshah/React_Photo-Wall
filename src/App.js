import React, { useState } from 'react';
import UploadForm from './components/UploadForm/UploadForm';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <PhotoGrid setSelectedImage={setSelectedImage} />
      { selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </div>
  );
}

export default App;
