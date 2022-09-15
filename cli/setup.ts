// SurrealDB setup queries for a fresh database + auth

// What is this? Why this setup? https://github.com/surrealdb/surrealdb/issues/90 Until this is fixed, each query has to be passed individually.
const scopes: string[] = [
  // We're declaring scopes for (admin, teacher, and student) with the same 1d user and pass auth system
  `DEFINE SCOPE admin SESSION 1d
        SIGNUP ( CREATE admin SET username = $username, pass = crypto::argon2::generate($pass) )
        SIGNIN ( SELECT * FROM admin WHERE username = $username AND crypto::argon2::compare(pass, $pass) )
;`,
  `DEFINE SCOPE teacher SESSION 1d
        SIGNUP ( CREATE teacher SET username = $username, pass = crypto::argon2::generate($pass) )
        SIGNIN ( SELECT * FROM teacher WHERE username = $username AND crypto::argon2::compare(pass, $pass) )
;`,
  `DEFINE SCOPE student SESSION 1d
        SIGNUP ( CREATE student SET username = $username, pass = crypto::argon2::generate($pass) )
        SIGNIN ( SELECT * FROM student WHERE username = $username AND crypto::argon2::compare(pass, $pass) )
;`,
];

const permissisons: string[] = [
  `DEFINE TABLE course SCHEMALESS
    PERMISSIONS
        FOR select
            /* Published classes can be selected */
            WHERE (public = true
            /* Admins and teachers however can see all courses */
            OR ($auth.admin = true OR $auth.teacher = true))
            /* And they must be in the same school */
            AND school = $auth.school,
        FOR create, delete, update WHERE $auth.admin = true;`,

  `DEFINE TABLE student SCHEMALESS
    PERMISSIONS
        FOR select
            /* Users can see their own account */
            WHERE id = $auth.id
            /* Admins and teachers however can see all accounts */
            OR ($auth.admin = true OR $auth.teacher = true),
        FOR create, delete, update WHERE $auth.admin = true;`,

  `DEFINE TABLE teacher SCHEMALESS
    PERMISSIONS
        FOR select WHERE ($auth.admin = true OR $auth.teacher = true),
        FOR create, delete, update WHERE $auth.admin = true;`,
  `DEFINE TABLE admin SCHEMALESS
    PERMISSIONS
        FOR select WHERE ($auth.admin = true OR $auth.teacher = true),
        FOR create, delete, update WHERE $auth.admin = true;`,
];

export const queries: string[] = [...scopes, ...permissisons];
