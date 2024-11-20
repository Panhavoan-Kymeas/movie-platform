import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

// Handle GET request with or without an 'id' parameter
export async function GET(req: Request) {
  try {
    // Extract 'id' from the query parameters
    const url = new URL(req.url);
    const id = url.searchParams.get('id'); // Extract 'id' from the query string

    if (id) {
      // If an 'id' is provided, fetch the specific movie by id
      const result = await query('SELECT * FROM movies WHERE movie_id = $1', [id]);
      const movie = result.rows[0]; // Get the first matching movie

      if (movie) {
        return NextResponse.json(movie); // Return the specific movie
      } else {
        return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
      }
    } else {
      // If no 'id' is provided, fetch all movies
      const result = await query('SELECT * FROM movies');
      const movies= result.rows;
      return NextResponse.json(movies); // Return all movies
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
