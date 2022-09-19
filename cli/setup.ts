// SurrealDB setup queries for a fresh database + auth

// What is this? Why this setup? https://github.com/surrealdb/surrealdb/issues/90 Until this is fixed, each query has to be passed individually.

const schemaish = `
DEFINE FIELD name ON TABLE district TYPE string ASSERT is::ascii($value);
DEFINE INDEX name ON TABLE district COLUMNS name UNIQUE;

DEFINE FIELD district ON TABLE school TYPE record (district);
DEFINE INDEX name ON TABLE school COLUMNS name UNIQUE;

DEFINE FIELD name ON TABLE course TYPE string;
DEFINE FIELD school ON TABLE course TYPE record (school);
DEFINE FIELD requirements ON TABLE course TYPE array;
DEFINE FIELD requirements.* ON TABLE course TYPE record (course);

DEFINE FIELD school ON TABLE student TYPE array;
DEFINE FIELD school ON TABLE teacher TYPE array;
DEFINE FIELD school ON TABLE admin TYPE array;

DEFINE FIELD school.* ON TABLE student TYPE record (school);
DEFINE FIELD school.* ON TABLE teacher TYPE record (school);
DEFINE FIELD school.* ON TABLE admin TYPE record (school);


DEFINE FIELD past_courses ON TABLE student TYPE array;
DEFINE FIELD past_courses.*.course ON TABLE student TYPE record (course);
DEFINE FIELD past_courses.*.grade ON TABLE student TYPE decimal;

DEFINE FIELD courses ON TABLE student TYPE array;
DEFINE FIELD courses.*.course ON TABLE student TYPE record (course);
DEFINE FIELD courses.*.grade ON TABLE student TYPE decimal;
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
DEFINE TABLE course SCHEMAFULL
  PERMISSIONS
    FOR select
        /* Published classes can be selected */
        WHERE (public = true
        /* Admins and teachers however can see all courses */
        OR ($scope = "admin" OR $scope = "teacher"))
        /* And they must be in the same school */
        AND school = $auth.school,
    FOR create, delete, update WHERE $scope = "admin";

DEFINE TABLE school SCHEMAFULL
  PERMISSIONS
    FOR select WHERE true;

DEFINE TABLE student SCHEMAFULL
  PERMISSIONS
    FOR select
        /* Users can see their own account */
        WHERE id = $auth.id
        /* Admins and teachers however can see all accounts */
        OR (($scope = "admin" OR $scope = "teacher") AND school = $auth.school),
    FOR create, delete, update WHERE $scope = "admin";

DEFINE TABLE teacher SCHEMAFULL
  PERMISSIONS
    FOR select WHERE ($scope = "admin" OR $scope = "teacher") AND school = $auth.school,
    FOR create, delete, update WHERE $scope = "admin";
DEFINE TABLE admin SCHEMAFULL
  PERMISSIONS
    FOR select WHERE ($scope = "admin" OR $scope = "teacher") AND school = $auth.school,
    FOR create, delete, update WHERE $scope = "admin";

DEFINE FIELD password ON student TYPE string PERMISSIONS NONE;
DEFINE FIELD password ON teacher TYPE string PERMISSIONS NONE;
DEFINE FIELD password ON admin TYPE string PERMISSIONS NONE;

DEFINE FIELD username ON student TYPE string
  PERMISSIONS
    FOR select WHERE id = $auth.id OR ($scope = "admin" AND school = $auth.school),
    FOR update WHERE school = $auth.school AND (id = $auth.id OR $scope = "admin");
DEFINE FIELD username ON teacher TYPE string
  PERMISSIONS
    FOR select WHERE id = $auth.id OR ($scope = "admin" AND school = $auth.school),
    FOR update WHERE school = $auth.school AND (id = $auth.id OR $scope = "admin");
DEFINE FIELD username ON admin TYPE string
  PERMISSIONS
    FOR select WHERE id = $auth.id OR ($scope = "admin" AND school = $auth.school),
    FOR update WHERE school = $auth.school AND (id = $auth.id OR $scope = "admin");
`;

export const queries: string[] = [permissisons, schemaish, scopes];
