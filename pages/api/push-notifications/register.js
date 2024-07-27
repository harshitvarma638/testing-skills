import { NextResponse } from "next/server";

export const runtime = 'edge';

let subscriptions = [];

export default async function POST(req) {
    const subscription = await req.body;
    subscriptions.push(subscription);
    // console.log('Subscription added:', subscription);
    return NextResponse.json({success:true});
}