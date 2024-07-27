import React from 'react';
import NotificationButton from '../components/NotificationButton';

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <h1 className="text-4xl font-bold">Hola!</h1>
          <div><h1>BELL logo</h1></div>
        </div>
        <div>
          <h1>Lorum ipsem</h1>
          <p>Lorem ipsum isnsi nosndjg</p>
        </div>
        <div>
          <NotificationButton/>
        </div>
      </div>
    </main>
  );
}
