import React from 'react';
import './Modal.scss';
import {motion} from 'framer-motion';

const Modal = ({ setSelectedImage, selectedImage })  => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
          setSelectedImage(null);
        }
    }

    return(
        <motion.div 
            className="backdrop" 
            onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
           <motion.img 
                src={selectedImage} 
                alt=""
                initial={{y:'-100vh'}}
                animate={{y:'0'}}
           />
        </motion.div>
    );
}

export default Modal;