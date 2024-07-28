import React from 'react';
import NotificationButton from '../components/NotificationButton';

export default function Home() {
  return (
    <main>
      <div>
        <div className='heading'>
          <h1 className="heading-text">Hola!</h1>
        </div>
        <div className='animation'>
            <div className="rings">
              <svg width="420" height="412" viewBox="0 0 375 412" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_1_16)">
              <circle cx="188" cy="206" r="196" fill="url(#paint0_linear_1_16)" fill-opacity="0.4"/>
              <circle cx="188" cy="206" r="189" stroke="url(#paint1_linear_1_16)" stroke-opacity="0.2" stroke-width="14"/>
              </g>
              <circle cx="188" cy="206" r="162" fill="#190E34" fill-opacity="0.4"/>
              <circle cx="188" cy="206" r="161" stroke="#493182" stroke-opacity="0.4" stroke-width="2"/>
              <circle cx="188" cy="206" r="129.5" stroke="#644D9A"/>
              <circle cx="188" cy="206" r="98" fill="#2F1A61" fill-opacity="0.6"/>
              <defs>
              <filter id="filter0_f_1_16" x="-18" y="0" width="412" height="412" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1_16"/>
              </filter>
              <linearGradient id="paint0_linear_1_16" x1="188" y1="10" x2="188" y2="402" gradientUnits="userSpaceOnUse">
              <stop stop-color="#190E34"/>
              <stop offset="1" stop-color="#190E34" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_1_16" x1="188" y1="10" x2="188" y2="478" gradientUnits="userSpaceOnUse">
              <stop stop-color="#493182"/>
              <stop offset="1" stop-color="#493182" stop-opacity="0"/>
              </linearGradient>
              </defs>
              </svg>
            </div>
            
            <div className="bell">
              <svg width="197" height="205" viewBox="0 0 197 205" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_di_1_21)">
              <path d="M146 132.5H51V123H55.75V89.8972C55.75 66.2042 74.8925 47 98.5 47C122.107 47 141.25 66.2042 141.25 89.8972V123H146V132.5ZM65.25 123H131.75V89.8972C131.75 71.453 116.863 56.5 98.5 56.5C80.1365 56.5 65.25 71.453 65.25 89.8972V123ZM86.625 137.25H110.375C110.375 140.399 109.124 143.42 106.897 145.647C104.67 147.874 101.649 149.125 98.5 149.125C95.3505 149.125 92.3301 147.874 90.1031 145.647C87.8761 143.42 86.625 140.399 86.625 137.25Z" fill="#E0D1FF"/>
              <path d="M146 133H146.5V132.5V123V122.5H146H141.75V89.8972C141.75 65.9297 122.385 46.5 98.5 46.5C74.6148 46.5 55.25 65.9297 55.25 89.8972V122.5H51H50.5V123V132.5V133H51H146ZM86.625 136.75H86.125V137.25C86.125 140.532 87.4288 143.68 89.7495 146C92.0703 148.321 95.2179 149.625 98.5 149.625C101.782 149.625 104.93 148.321 107.25 146C109.571 143.68 110.875 140.532 110.875 137.25V136.75H110.375H86.625ZM131.25 122.5H65.75V89.8972C65.75 71.7271 80.4147 57 98.5 57C116.585 57 131.25 71.7271 131.25 89.8972V122.5Z" stroke="#6434CE"/>
              </g>
              <defs>
              <filter id="filter0_di_1_21" x="0" y="0" width="197" height="204.125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="25"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.543623 0 0 0 0 0.37941 0 0 0 0 0.929167 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_21"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_21" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.78961 0 0 0 0 0.7 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_21"/>
              </filter>
              </defs>
              </svg>
            </div>
          </div>
        <div className="notification">
          <div className="random">
            <h1>Lorem ipsem...</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <NotificationButton/>
        </div>
      </div>
    </main>
  );
}
