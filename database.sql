CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(80) UNIQUE NOT NULL,
  "password" VARCHAR(1000) NOT NULL,
  "admin" boolean,
  "project_id" int DEFAULT 1
);

CREATE TABLE "demographic" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "first_name" VARCHAR(50),
  "last_name" VARCHAR(50),
  "email" VARCHAR(80),
  "age" int,
  "location" VARCHAR(2),
  "gender" VARCHAR(20),
  "ethnicity_id" int,
  "income_level_id" int,
  "education_level_id" int
);

CREATE TABLE "ethnicity" (
  "id" SERIAL PRIMARY KEY,
  "ethnicity" VARCHAR(40)
);

INSERT INTO "ethnicity" ("id", "ethnicity")
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

INSERT INTO "income_level" ("id", "range")
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
(2, 'High School'),
(3, 'Certification'),
(4, 'Some College School'),
(5, 'Associate'),
(6, 'Bachelor''s'),
(7, 'Master''s'),
(8, 'Doctorate'),
(9, 'Professional');

CREATE TABLE "section_order" (
  "id" SERIAL PRIMARY KEY,
  "realm_id" int,
  "index" int DEFAULT 0,
  "section_id" int
);

INSERT INTO "section_order" ( "realm_id", "index", "section_id" )
VALUES
( 1, 1, 1 ),
( 1, 0, 2);

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
  "client_id" int,
  "start_date" date,
  "end_date" date
);

INSERT INTO "project" ("id", "project_name", "client_id")
VALUES (1, 'PUBLIC', 1);

CREATE TABLE "realm" (
  "id" SERIAL PRIMARY KEY,
  "realm_name" VARCHAR(16),
  "project_id" int DEFAULT 1,
  -- "internal_name" VARCHAR(50)
  "description" VARCHAR(1000),
  "cover_photo" VARCHAR(100)
);

INSERT INTO "realm" ( "id", "realm_name", "description", "cover_photo" )
VALUES
( 1, 'Emotional', 'Emotional health is an important part of overall health. People who are emotionally healthy are in control of their thoughts, feelings, and behaviors. They are able to cope with life’s challenges. They can keep problems in perspective and bounce back from setbacks. They feel good about themselves and have good relationships.

Being emotionally healthy does not mean you are happy all the time. It means you are aware of your emotions. You can deal with them, whether they are positive or negative. Emotionally healthy people still feel stress, anger, and sadness. But they know how to manage their negative feelings. They can tell when a problem is more than they can handle on their own. They also know when to seek help from their doctor.', 'images/emotionalRealmCover.jpg' ),
( 2, 'Nutritional', 'Nutritional description', '/coverPhoto' ),
( 3, 'Physical', 'Physical description', '/coverPhoto' ),
( 4, 'Spiritual', 'Spiritual description', '/coverPhoto' ),
( 5, 'Financial', 'Financial description', '/coverPhoto' ),
( 6, 'Environmental', 'Environmental description', '/coverPhoto' ),
( 7, 'Social', 'Social description', '/coverPhoto' ),
( 8, 'Intellectual', 'Intellectual description', '/coverPhoto' );

-- WRITTEN FOR FUTURE USE
-- CREATE TABLE "multiple_choice" (
--   "id" SERIAL PRIMARY KEY,
--   "question_id" int,
--   "content" VARCHAR(50),
--   "correct_answer" boolean
-- );

CREATE TABLE "section" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(30),
  "description" VARCHAR(10000),
  "type" int,
  "image_link" VARCHAR(100),
  "video_link" VARCHAR(1000),
  "text_content" VARCHAR(10000)
);

INSERT INTO "section" ("id", "title", "description", "type", "image_link", "video_link", "text_content")
VALUES
( 1,
'Brain & Mind',
 'The brain is an organ that serves as the center of the nervous system in all vertebrate and most invertebrate animals. It is located in the head, usually close to the sensory organs for senses such as vision. It is the most complex organ in a vertebrate''s body.
The mind is the set of cognitive faculties including consciousness, imagination, perception, thinking, judgement, language and memory, which is housed in the brain (sometimes including the central nervous system). It is usually defined as the faculty of an entity''s thoughts and consciousness.',
 1,
null,
 'https://www.youtube.com/watch?v=pRFXSjkpKWA',
 null),
 (2, null, null, 5, null, null, null),
 (3, 'Sleep',
 'Sleep is a naturally recurring state of mind and body. It is characterized by an altered state of consciousness, less sensory activity, reduced muscle activity and nearly all voluntary muscles during rapid eye movement (REM) are paralyzed.  Certain areas of the brain that hold memories light up (amygdala and hippocampus) during sleep.',
 1, null, 'https://www.ted.com/talks/matt_walker_sleep_is_your_superpower?language=en',
 null),
(4, 'Self-Awareness',
'Self Awareness is conscious knowledge of your own character, feelings, motives, and desires. Self-awareness is "an awareness of your own personality or individuality". It is not to be confused with consciousness. While consciousness is being aware of your environment and body and lifestyle, self-awareness is the recognition of that awareness.',
1,
null,
'https://www.ted.com/talks/robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness', null);


CREATE TABLE "resource_type" (
  "id" SERIAL PRIMARY KEY,
  "type_name" VARCHAR(20)
);

INSERT INTO "resource_type" ("id", "type_name")
VALUES
(1, 'video'),
(2, 'text'),
(3, 'image'),
(4, 'pdf'),
(5, 'form');

CREATE TABLE "student_progress" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "realm_id" int,
  "section_id" int,
  "started" boolean DEFAULT FALSE,
  "completed" boolean DEFAULT FALSE
);

CREATE TABLE "question" (
  "id" SERIAL PRIMARY KEY,
  "section_id" int,
  "question_index" int,
  "content" VARCHAR(150),
  "answer" VARCHAR(150)
);

INSERT INTO "question" ( "section_id", "question_index", "content", "answer" )
VALUES
( 1, 0, 'How much do we really know about the mind?', 'Only a little.' ),
( 2, 0, 'What do you think about most of the time?', 'Socioeconomic political theories and their implications for modern society.' ),
( 2, 4, 'List some memories. Are they mainly positive or negative?', 'Mostly Positive. Laughter, Running, and Cooking.' ),
( 2, 10, 'How do you face, deal with, and/or overcome responsibilities, problems, or difficulties?', 'I face them head on.'),
( 4, 0, 'What do you feel you think about most of the time?', 'Normal things, like post-enlightenment philosophy, Cartesian Method, Socratic Method, superheroes, storytelling, '),
(4, 1, 'How many negative thoughts can you think about yourself?', '1 a day' ),
(4, 2, 'How many positive thoughts can you think about yourself?', '4 a week' ),
(4, 3, 'List things you are afraid of.', 'Spiders, heights, ');

CREATE TABLE "student_response" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "realm_id" int,
  "section_id" int,
  "question_id" int,
  "feedback_score" int,
  "response" VARCHAR(5000),
  "date_submitted" date DEFAULT now()
);

-- ALTER TABLE "user" ADD FOREIGN KEY ("id") REFERENCES "demographic" ("user_id");

-- ALTER TABLE "demographic" ADD FOREIGN KEY ("ethnicity_id") REFERENCES "ethnicity" ("id");

-- ALTER TABLE "demographic" ADD FOREIGN KEY ("education_level_id") REFERENCES "education_level" ("id");

-- ALTER TABLE "user" ADD FOREIGN KEY ("project_id") REFERENCES "project" ("id");

-- ALTER TABLE "section" ADD FOREIGN KEY ("type") REFERENCES "resource_type" ("id");

-- ALTER TABLE "project" ADD FOREIGN KEY ("client_id") REFERENCES "client_list" ("id");

-- ALTER TABLE "section" ADD FOREIGN KEY ("id") REFERENCES "question" ("section_id");

-- ALTER TABLE "section_order" ADD FOREIGN KEY ("section_id") REFERENCES "section" ("id");

-- ALTER TABLE "section_order" ADD FOREIGN KEY ("realm_id") REFERENCES "realm" ("id");

-- ALTER TABLE "student_response" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

-- ALTER TABLE "student_response" ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

-- ALTER TABLE "demographic" ADD FOREIGN KEY ("income_level_id") REFERENCES "income_level" ("id");

-- ALTER TABLE "question" ADD FOREIGN KEY ("id") REFERENCES "multiple_choice" ("question_id");

-- ALTER TABLE "student_progress" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

-- ALTER TABLE "student_progress" ADD FOREIGN KEY ("realm_id") REFERENCES "section_order" ("realm_id");

-- ALTER TABLE "student_progress" ADD FOREIGN KEY ("index") REFERENCES "section_order" ("index");

-- ALTER TABLE "realm" ADD FOREIGN KEY ("project_id") REFERENCES "project" ("id");
