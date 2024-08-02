import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return new NextResponse(null, { headers: response.headers });
    }

    return response;
}
