import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types"
import Surreal from 'surrealdb.js';

const db = new Surreal('http://127.0.0.1:8000/rpc');

db.use("profertis", "profertis");

export const GET: RequestHandler = function({ url }) {
  return new Response(JSON.stringify(db.query("SELECT * FROM school")));
}