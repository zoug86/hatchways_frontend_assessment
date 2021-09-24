# Student Repository

This project displays general information about class students and is hosted at (Vercel hosting) [Student Repository](https://student-repository.vercel.app/).

## General Idea
This application is created with create-react-app and uses context hooks to manage global state (you can try using REDUX, but the project size does not really need it).

The application displays 25 students rendered from a public [API](https://api.hatchways.io/assessment/students/).

One student looks as follows:
```JSON
{
    "city": "Fushë-Muhurr",
    "company": "Yadel",
    "email": "iorton0@imdb.com",
    "firstName": "Ingaberg",
    "grades": [
        "78",
        "100",
        "92",
        "86",
        "89",
        "88",
        "91",
        "87"
    ],
    "id": "1",
    "lastName": "Orton",
    "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
    "skill": "Oracle"
},
```

## Added Features
- Toggle plus/minus button: toggling the plus button allows to display full student course grades and hiding it.
- An input filed to add tags to the student.
- 2 input fields for filtering and searching pusposes; one input that is based on name search (first and last name) and one input for tags search.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
