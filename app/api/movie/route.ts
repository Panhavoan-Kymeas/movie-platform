import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

interface Movie {
  title: string;
}

export async function GET() {
  try {
    const result = await query('SELECT * FROM movies');
    const movies: Movie[] = result.rows;
    return NextResponse.json(movies);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
