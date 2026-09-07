import { NextRequest, NextResponse } from 'next/server';
import { auditAccount } from '@/lib/auditEngine';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('url') || searchParams.get('username') || searchParams.get('handle') || '';

  if (!target) {
    return NextResponse.json({ error: 'Missing required query parameter: url or username' }, { status: 400 });
  }

  try {
    const data = await auditAccount(target);
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error: any) {
    console.error(`[API Audit Error]`, error);
    return NextResponse.json({ error: error.message || 'Failed to audit account' }, { status: 500 });
  }
}
