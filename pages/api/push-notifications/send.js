import webPush from 'web-push';

webPush.setVapidDetails(
    'mailto:harshitvarma638@gmail.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY
);

export default async function POST(req,res) {
    if(req.method === 'POST'){
        const {subscription, title, body} = req.body;
        const payload = JSON.stringify({title, body});

        try {
            await webPush.sendNotification(subscription, payload);
            res.status(200).json({success:true});
        } catch (error) {
            console.error('Error sending notification:', error);
            res.status(500).json({success:false});
        }
    }
    else{
        res.setHeader('Allow',['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}