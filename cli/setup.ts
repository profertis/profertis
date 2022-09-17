// SurrealDB setup queries for a fresh database + auth

// TODO: Course history
// TODO: Requirements for previous courses

// What is this? Why this setup? https://github.com/surrealdb/surrealdb/issues/90 Until this is fixed, each query has to be passed individually.

const schemaish = `

DEFINE FIELD school ON TABLE student TYPE array;
DEFINE FIELD school ON TABLE teacher TYPE array;
DEFINE FIELD school ON TABLE admin TYPE array;

DEFINE FIELD school.* ON TABLE student TYPE record (school);
DEFINE FIELD school.* ON TABLE teacher TYPE record (school);
DEFINE FIELD school.* ON TABLE admin TYPE record (school);

DEFINE FIELD past_courses ON TABLE student TYPE array;
DEFINE FIELD past_courses.* ON TABLE student TYPE record (course);

DEFINE FIELD courses ON TABLE student TYPE array;
DEFINE FIELD courses.* ON TABLE student TYPE record (course);

DEFINE FIELD name ON TABLE course TYPE string;
`

const scopes = `
/* We're declaring scopes for (admin, teacher, and student) with the same 1d user and pass auth system */
DEFINE SCOPE admin SESSION 1d
  SIGNUP ( CREATE admin SET username = $username, password = crypto::argon2::generate($password) )
  SIGNIN ( SELECT * FROM admin WHERE username = $username AND crypto::argon2::compare(password, $password) );
DEFINE SCOPE teacher SESSION 1d
  SIGNUP ( CREATE teacher SET username = $username, password = crypto::argon2::generate($password) )
  SIGNIN ( SELECT * FROM teacher WHERE username = $username AND crypto::argon2::compare(password, $password) );
DEFINE SCOPE student SESSION 1d
  SIGNUP ( CREATE student SET username = $username, password = crypto::argon2::generate($password) )
  SIGNIN ( SELECT * FROM student WHERE username = $username AND crypto::argon2::compare(password, $password) );`;

const permissisons = `
DEFINE TABLE course SCHEMALESS
  PERMISSIONS
    FOR select
        /* Published classes can be selected */
        WHERE (public = true
        /* Admins and teachers however can see all courses */
        OR ($auth.admin = true OR $auth.teacher = true))
        /* And they must be in the same school */
        AND school = $auth.school,
    FOR create, delete, update WHERE $auth.admin = true;

DEFINE TABLE school
  PERMISSIONS
    FOR select WHERE true;

DEFINE TABLE student
  PERMISSIONS
    FOR select
        /* Users can see their own account */
        WHERE id = $auth.id
        /* Admins and teachers however can see all accounts */
        OR ($auth.admin = true OR $auth.teacher = true),
    FOR create, delete, update WHERE $auth.admin = true;

DEFINE TABLE teacher
  PERMISSIONS
    FOR select WHERE ($auth.admin = true OR $auth.teacher = true),
    FOR create, delete, update WHERE $auth.admin = true;
DEFINE TABLE admin
  PERMISSIONS
    FOR select WHERE ($auth.admin = true OR $auth.teacher = true),
    FOR create, delete, update WHERE $auth.admin = true;

DEFINE FIELD password ON student TYPE string PERMISSIONS NONE;
DEFINE FIELD password ON teacher TYPE string PERMISSIONS NONE;
DEFINE FIELD password ON admin TYPE string PERMISSIONS NONE;
`;

export const queries: string[] = [schemaish, scopes, permissisons];
