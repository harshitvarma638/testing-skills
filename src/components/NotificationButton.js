"use client";
require('dotenv').config();
import {useState,useEffect} from 'react';



export default function NotificationButton() {
    const [permission, setPermission] = useState(null);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            setPermission(Notification.permission);
          }
        const requestPermission = async () => {
            if(Notification.permission !== 'granted') {
                const result = await Notification.requestPermission();
                setPermission(true);
                
                if(Notification.permission === 'granted') {
                    await handlePermission();
                    window.location.reload();
                }
                
            }
            else{
                await handlePermission();
                
            }
        };

        requestPermission();
    },[]);

    const handlePermission = async () => {
        await registerServiceWorker();
        await subscribeUser();
    }

    const registerServiceWorker = async () => {
        if('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/serviceWorker.js');
                console.log("service worker registered:", registration);
            } catch (error) {
                console.error('Failed to register service worker', error);
            }
        }
    };

    const subscribeUser = async () => {
        if('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.ready;
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64toint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY),
                });
                setSubscription(subscription);
                await fetch('/api/push-notifications/register',{
                    method: 'POST',
                    body: JSON.stringify(subscription),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } catch (error) {
                console.error('Failed to subscribe user', error);
            }
        }
    }

    const sendNotification = async () => {
        console.log('send notification');
        await fetch('/api/push-notifications/send',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Notification!!',
                body: 'Iron man welcomes you!!',
                image: './images.jpeg',
                subscription
            }),
            
        });
        
    };

    const urlBase64toint8Array = (base64String) => {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        console.log(outputArray);
        return outputArray;
    }

    return (
        <button onClick={sendNotification} className='push-button'>
            Send Notification
        </button>
    );
}