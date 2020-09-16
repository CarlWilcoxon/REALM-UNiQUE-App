# Realm Unlimited : Client Project

### Built By:

Mase Santos, Tom Hoffmann, Carl Wilcoxon and Bruno Reyes

>Duration: Two Week Sprint, Client Project

### Video Link to Demo:

## What is Realm Unlimited?
Realm Unlimited is a health and wellness startup consulting company founded by Kara Hirdman and Crystal Queen. Their mission statement is “To educate current and future leaders in the use of best practices and strategies to create happy and healthy cultures.” 

Realm and Unlimited’s main goals include:
- Organizational Leadership Development and bringing wellness to all on a dynamic level
- To provide the education, resources and tools to exemplify Equity, Diversity & Inclusion
- Working with all levels of employees to give them the education, resources and development to achieve their own goals to become the best version of themselves

## Application Overview
When Realm Unlimited started, courses were taught in person out of a workbook. With COVID-19, Realm Unlimited approached us to take their teachings to the web. In an effort to reach both current and prospective audiences, we developed a mobile-friendly education platform called Unique for our client. 

Unique contains a mobile-first side for users, where users can learn about Realm Unlimited’s eight realms of wellness:
- Emotional Health and Wellness
- Nutritional Health and Wellness
- Physical Health and Wellness
- Spiritual Health and Wellness
- Financial Health and Wellness
- Environmental Health and Wellness
- Social Health and Wellness
- and Intellectual Health and Wellness

For the user side, a user is able to login to the platform and see each of the eight realms. They can choose to take a realm course, where they will be prompted to fill out a preliminary form to gather their prior knowledge on the specific realm of wellness. Afterwards, they will be taken to course content, which can include videos, text resources, and images as our clients see fit.

The other side to this application is the desktop-first admin platform, where our client can edit the course curriculum as needed. An administrator is able to login to this portion of the application through user authentication and see a similar view of what a “regular” user can see. They have access to the same eight realms as said user, but also have menu links at the top right corner of the page. These menu links can take an administrator to view “Realms,” “Sections,” or “Statistics” as needed. 

In “Realms,” an administrator can view all realms, or courses, in their system. They can view the realms to see what has been included in each, and delete them from their database should they need to. By clicking on “+ New Realm,” an administrator can create a new realm. The process of creating a new realm includes a form to record the realm name, cover photo, and realm description. Cover photos can be previewed with the eye icon next to the input field. Next, an administrator can select the sections, or lessons, they want to include in the realm on the following view. Finally, they can save the information and post the new realm into their database for their users to then explore.

In “Sections,” an administrator can similarly see all sections, or lessons, in their system. Sections can be viewed, with their type marked by a video, text or image icon. They can also be added and deleted if necessary. By clicking “+ New Section,” a user can post a new text, image or video section. Youtube and Ted Talk videos are supported. Edits can also be made to sections, as all updates will be reflected in the database.

Finally, in “Statistics,” a minimalistic page holds three buttons that will download CSV (spreadsheet) files of their prospective data: “Curriculum” information, “Demographics” of the users, and “Feedback” from general user input. These have all been provided so that the client can better understand who they’re serving.

## Scope and Wireframe


## Installation

1. Run the query from the database.sql file to create a new database and table.
2. Use the "npm install" command to install dependencies.
3. Use the "npm run server" command to start the server. 
4. Use the "npm run client" command to start the react development build. 
5. Access the webpage via the url "localhost:3000"

## Usage

User Side:
1. Go to registration, register as a new user and log in to the application.
2. At the home screen, view and select from the available Realms.
3. Navigate through the content in a specific Realm by following the button navigation, answering any questions within the material in the inputs.
4. When finished with the information inside the Realm return to the homescreen.

Admin Side:
1. Register as a new user.
2. In the database for your user, under the column titled ‘Admin’, change the value to “TRUE”.  
3. On your browser return to the login screen and login.
4. At the home screen, choose between three options: Realms, Sections, and Statistics. Functionality within each option is follows:
    -   Realms: In the Realm page, view the existing Realms. Select ‘New Realm’ button to create a new Realm. Once at New Realm Page, add in information, select Sections to include in the Realm and press ‘Save Realm with Sections.’ to create the new Realm.
	-   Sections: At the home Section page, view existing Sections. Preview any Section by clicking the eye icon. Delete a Section by clicking the trash icon. Create a new Section by clicking the New Section button.  At the New Section view, add requested information and press the ‘Save Section’ button to create the new Section and return to the home Section screen.
    -   Statistics: Choose between statistics regarding Curriculum, Demographics, and Feedback.  Click each individual button to download a .CSV file containing the desired information.

## Technologies Used

- JavaScript
- [React.js](https://reactjs.org/)
- [Redux.js](https://redux.js.org/)
- [Saga](https://redux-saga.js.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Node.js](https://nodejs.org/en/) 
- [Express.js](https://expressjs.com/)
- [PostgreSQL/Postico](https://www.postgresql.org/)
- [Material UI](https://material-ui.com/)
- [Canva](https://www.canva.com/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality!