import {  NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS6SjoPnTbLb-OW7s4AV8EcwQEoDILQIeDQ&usqp=CAU" /> 
  </head></html> `);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';