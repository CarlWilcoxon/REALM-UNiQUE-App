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

CREATE TABLE "income_level" (
  "id" SERIAL PRIMARY KEY,
  "range" VARCHAR(20)
);

CREATE TABLE "education_level" (
  "id" SERIAL PRIMARY KEY,
  "education_level" VARCHAR(20)
);

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

CREATE TABLE "project" (
  "id" SERIAL PRIMARY KEY,
  "project_name" VARCHAR(50),
  "user_id" int,
  "course_id" int,
  "client_id" int,
  "start_date" date,
  "end_date" date
);

CREATE TABLE "realm_course" (
  "id" SERIAL PRIMARY KEY,
  "course_name" VARCHAR(50),
  "internal_name" VARCHAR(50)
);

CREATE TABLE "multiple_choice" (
  "id" SERIAL PRIMARY KEY,
  "question_id" int,
  "content" VARCHAR(50)
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
