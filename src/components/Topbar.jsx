import React from 'react';
import {Facebook, Instagram, LinkedIn, MailLockOutlined, Phone, Twitter, YouTube} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='icons'>
            
            <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com"><MailLockOutlined style={{
              marginRight: '1px'
            }}/>  info@company.com</a>
            <a class="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340"><Phone style={{
              marginRight: '1px'
            }}/> 010-020-0340</a>
      </div>
      <div className="wrapper">
        <a href="https://facebook.com" className='facebook' target='_blank' title='https://facebook.com'><Facebook /></a>
        <a href="https://facebook.com" className='twitter' target='_blank' title='https://facebook.com'><Twitter /></a>
        <a href="https://facebook.com" className='instagram' target='_blank' title='https://facebook.com'><Instagram /></a>
        <a href="https://facebook.com" className='youtube' target='_blank' title='https://facebook.com'><YouTube /></a>
        <a href="https://facebook.com" className='linkedin' target='_blank' title='https://facebook.com'><LinkedIn /></a>
      </div>
      <button className='button-primary'>subscribe</button>
    </div>
  )
}