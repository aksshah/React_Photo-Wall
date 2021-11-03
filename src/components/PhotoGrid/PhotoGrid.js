import React from 'react';
import './PhotoGrid.css';
import UseFirestore from '../../hooks/useFirestore';
import {motion} from 'framer-motion';

const PhotoGrid = ({setSelectedImage}) => {
    const {docs} = UseFirestore('images');

    return(
        <div className="photo-grid">
            {docs && docs.map(doc => (
                <motion.div 
                    className="image-wrap" 
                    key={doc.id} 
                    onClick={() => setSelectedImage(doc.url)}
                    layout
                    whileHover={{opacity:1}}
                >
                    <motion.img 
                        src={doc.url} 
                        alt="uploaded"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default PhotoGrid;