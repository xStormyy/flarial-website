import { NextRequest, NextResponse } from 'next/server';

/* eslint-disable @typescript-eslint/no-unused-vars */
function log(path: string, req: NextRequest, res: NextResponse) {
    const d = new Date();
    // Logging is disabled by default but can be enabled for debugging
    /*console.log(`[${d.toLocaleDateString()}, ${d.toLocaleTimeString()}]
    /${path}, Full Path: ${req.nextUrl.pathname},
    Params: ${JSON.stringify(Object.fromEntries(req.nextUrl.searchParams))},
    User-Agent: ${req.headers.get('user-agent')}, 
    IP: ${req.ip}, 
    Method: ${req.method}
    `);*/
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export default log;