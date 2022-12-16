import React from 'react';
import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material';

const Social = () => {
    return (
    <div className='social'>
        <h2>Follow us</h2>
        <div className='wrapper'>
            <a href='#' title='facebook' ><Facebook className='facebook'/></a>
            <a href='#' title='instagram' ><Instagram className='instagram'/></a>
            <a href='#' title='twitter'><Twitter className='twitter'/></a>
            <a href='#' title='youtube'><YouTube className='youtube'/></a>
            <a href='#' title='linkedin'><LinkedIn className='linkedin'/></a>
            <a href='#' title='pinterest'><Pinterest className='pinterest'/></a>
        </div >
        
    </div>
    );
}

export default Social;
