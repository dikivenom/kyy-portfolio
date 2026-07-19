import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className='bg-[#FF6347] text-white py-8'>
      <div className='container mx-auto flex flex-col items-center'>
        <p className='mb-4 font-drinks-fruit text-md sm:text-2xl text-center'>
          Made with{' '}
          <FontAwesomeIcon
            icon={faHeart}
            size='1x'
            className='text-[#6a1212] inline-block animate-heartbeat'
          />{' '}
          by Dicky Ramadhan
        </p>

        <div className='flex space-x-6'>
          <a
            href='https://github.com/dikivenom'
            target='_blank'
            aria-label='GitHub'
            className='text-white hover:text-black'
          >
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
          <a
            href='https://www.linkedin.com/in/dicky-ramadhan-7141a2288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            target='_blank'
            aria-label='LinkedIn'
            className='text-white hover:text-black'
          >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a
            href='https://www.instagram.com/kyynyny/'
            target='_blank'
            aria-label='Instagram'
            className='text-white hover:text-black'
          >
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>{' '}
          <a
            href='mailto:dickyramadhan3110@gmail.com'
            target='_blank'
            aria-label='Email'
            className='text-white hover:text-black'
          >
            <FontAwesomeIcon icon={faEnvelope} size='2x' />
          </a>
        </div>
      </div>
    </footer>
  );
}
