const url = 'http://localhost:8000/rpc';

export async function createDB() {
	const Surreal = await import("surrealdb.js");
	return new Surreal(url)
}