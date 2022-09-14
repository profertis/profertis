// SurrealDB setup queries for a fresh database + auth

// What is this? Why this setup? https://github.com/surrealdb/surrealdb/issues/90 Until this is fixed, each query has to be passed individually.
const scopes: string[] = [
    // We're declaring scopes for (admin, teacher, and student) with the same 1d user and pass auth system
    `DEFINE SCOPE admin SESSION 1d
        SIGNUP ( CREATE user SET user = $user, pass = crypto::argon2::generate($pass) )
        SIGNIN ( SELECT * FROM user WHERE user = $user AND crypto::argon2::compare(pass, $pass) )
;`,
`DEFINE SCOPE teacher SESSION 1d
        SIGNUP ( CREATE user SET user = $user, pass = crypto::argon2::generate($pass) )
        SIGNIN ( SELECT * FROM user WHERE user = $user AND crypto::argon2::compare(pass, $pass) )
;`,
`DEFINE SCOPE student SESSION 1d
        SIGNUP ( CREATE user SET user = $user, pass = crypto::argon2::generate($pass) )
        SIGNIN ( SELECT * FROM user WHERE user = $user AND crypto::argon2::compare(pass, $pass) )
;`]

const permissisons: string[] = [`DEFINE TABLE course SCHEMALESS
    PERMISSIONS
        FOR select
            /* Published classes can be selected */
            WHERE public = true
            /* Admins however can see all posts */
            OR $auth.admin = true
            /* And they must be in the same school */
            AND school = $auth.school,
        FOR create, delete, update WHERE $auth.admin = true;`]

export const queries: string[] = [...scopes, ...permissisons]