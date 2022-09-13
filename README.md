# profertis

## Contributing

There are 4 usable services:

backend - deno & oak for wrapping around SurrealDB (cd backend && deno task dev)

frontend - sveltekit app as front for backend (cd frontend && yarn && yarn dev)

./surreal.sh - starts up a in-memory surreal DB based off of existing schema file

./scratchpad.sh - connects to ./surreal.sh

## Layers

Admins: Full control, includes administrators and guidance counselors

Teachers: Can make suggestions for course reccomendations for other students

Students: Can make suggestions for course reccomendations for themself