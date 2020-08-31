CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(80) UNIQUE NOT NULL,
  "password" VARCHAR(1000) NOT NULL,
  "admin" boolean
);

CREATE TABLE "demographic" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "first_name" VARCHAR(50),
  "last_name" VARCHAR(50),
  "email" VARCHAR(80),
  "age" int,
  "location" VARCHAR(50),
  "gender" VARCHAR(20),
  "ethnicity_id" int,
  "income_level_id" int,
  "education_level_id" int
);

CREATE TABLE "ethnicity" (
  "id" SERIAL PRIMARY KEY,
  "ethnicity" VARCHAR(30)
);

INSERT INTO "ethnicity" ("id", "ethinicity")
VALUES
(1, 'Asian - Chinese'),
(2, 'Asian - Filipino'),
(3, 'Asian - Asian Indian'),
(4, 'Asian - Vietnamese'),
(5, 'Asian - Korean'),
(6, 'Asian - Japanese'),
(7, 'Asian - Other Asian'),
(8, 'Black or African American'),
(9, 'Native Hawaiian and Pacific Islander'),
(10, 'Native Hawaiian'),
(11, 'Pacific Islander - Samoan'),
(12, 'Pacific Islander - Chamorro'),
(13, 'Pacific Islander - Other'),
(14, 'White'),
(15, 'Some Other Race');

CREATE TABLE "income_level" (
  "id" SERIAL PRIMARY KEY,
  "range" VARCHAR(20)
);

INSERT INTO "income_level" ("id, range")
VALUES
(1, '$0 - $10,000'),
(2, '$10,001 - $20,000'),
(3, '$20,001 - $30,000'),
(4, '$30,001 - $40,000'),
(5, '$40,001 - $50,000'),
(6, '$50,001 - $60,000'),
(7, '$60,001 - $70,000'),
(8, '$70,001 - $80,000'),
(9, '$80,001 - $90,000'),
(10, '$90,001 - $100,000'),
(11, '$100,000+');

CREATE TABLE "education_level" (
  "id" SERIAL PRIMARY KEY,
  "education_level" VARCHAR(20)
);

INSERT INTO "education_level" ("id", "education_level")
VALUES
(1, 'Some High School'),
(2, 'High School Diploma'),
(2, 'High School Diploma'),
--TODO

CREATE TABLE "section_order" (
  "id" SERIAL PRIMARY KEY,
  "realm_course_id" int,
  "index" int,
  "section_id" int
);

CREATE TABLE "client_list" (
  "id" SERIAL PRIMARY KEY,
  "client_name" VARCHAR(100),
  "poc_name" VARCHAR(50),
  "poc_email" VARCHAR(50),
  "other_info" VARCHAR(10000)
);

INSERT INTO "client_list" ("id", "client_name", "other_info")
VALUES (1, 'PUBLIC', 'This is a client representing the public curriculum.');

CREATE TABLE "project" (
  "id" SERIAL PRIMARY KEY,
  "project_name" VARCHAR(50),
  "user_id" int,
  "course_id" int,
  "client_id" int,
  "start_date" date,
  "end_date" date
);

INSERT INTO "project" ("id", "project_name")
VALUES (1, "PUBLIC");

CREATE TABLE "realm" (
  "id" SERIAL PRIMARY KEY,
  "realm_name" VARCHAR(50),
  "internal_name" VARCHAR(50)
);

CREATE TABLE "multiple_choice" (
  "id" SERIAL PRIMARY KEY,
  "question_id" int,
  "content" VARCHAR(50)
  "correct_answer" boolean
);

CREATE TABLE "section" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(30),
  "description" VARCHAR(1000),
  "type" int,
  "image_link" VARCHAR(100),
  "video_link" VARCHAR(100),
  "text_content" VARCHAR(10000)
);

CREATE TABLE "resource_type" (
  "id" SERIAL PRIMARY KEY,
  "type_name" VARCHAR(20)
);

INSERT INTO "resource_type" ("id", "type_name")
VALUES
(1, "video"),
(2, "text"),
(3, "image"),
(4, "form");

CREATE TABLE "question" (
  "id" SERIAL PRIMARY KEY,
  "section_id" int,
  "content" VARCHAR(10000)
);

CREATE TABLE "student_response" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "section_id" int,
  "question_id" int,
  "feedback_score" int,
  "response" VARCHAR(5000),
  "date_submitted" date
);

ALTER TABLE "user" ADD FOREIGN KEY ("id") REFERENCES "demographic" ("user_id");

ALTER TABLE "demographic" ADD FOREIGN KEY ("ethnicity_id") REFERENCES "ethnicity" ("id");

ALTER TABLE "demographic" ADD FOREIGN KEY ("education_level_id") REFERENCES "education_level" ("id");

ALTER TABLE "project" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "project" ADD FOREIGN KEY ("course_id") REFERENCES "realm_course" ("id");

ALTER TABLE "section" ADD FOREIGN KEY ("type") REFERENCES "resource_type" ("id");

ALTER TABLE "project" ADD FOREIGN KEY ("client_id") REFERENCES "client_list" ("id");

ALTER TABLE "section" ADD FOREIGN KEY ("id") REFERENCES "question" ("section_id");

ALTER TABLE "section_order" ADD FOREIGN KEY ("section_id") REFERENCES "section" ("id");

ALTER TABLE "section_order" ADD FOREIGN KEY ("realm_course_id") REFERENCES "realm_course" ("id");

ALTER TABLE "student_response" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "student_response" ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

ALTER TABLE "demographic" ADD FOREIGN KEY ("income_level_id") REFERENCES "income_level" ("id");

ALTER TABLE "question" ADD FOREIGN KEY ("id") REFERENCES "multiple_choice" ("question_id");
