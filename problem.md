### Angular Assessment - StudentApp

#### Duration: 1.5 hours

#### Objective

    A school wants to modify their business into a digital system that will help them to manage the data
     of students in a flow. To do that, they want a web application which needs to be developed

#### Things to do

    1. The app is composed of 1 Module with 2 Components, 1 Service and 1 Student Model Class. 

        - AppModule (Bootsrapping module that contains all the components)
        - Components (AppComponent, HeaderComponent)
        - Service (StudentService)  
        - Student Model class with details studentid, firstname,lastname and emailid


    2. AppComponent is the RootComponent and should contain HeaderComponent

    3. HeaderComponent should display the App Title, which is, "StudentApp".

    4. AppComponent should display a form to add the details of a new Student to the server.

    5. AppComponent should use StudentService to fetch all the players from the server and 
    to add a new student to the server

    6. StudentService should provide below functionalities.
    
        - getStudents() - Performs the API call using HttpClient get()
        - addStudent() - Performs the API call using HttpClient post()
        - deleteStudent() - Performs the API call using HttpClient delete()

    7. Use json-server to set up a fake REST Service to provide below endpoints for API calls.

        - GET - http://localhost:3000/students - get all the Students
        - POST - http://localhost:3000/students - add a new  Student
        - DELETE - http://localhost:3000/students/{studentid} - Delete a student

#### Submission:

    Upon completion, commit the changes and  push the project to a new gitlab-cgi repository.
    Add your mentor to the repository and share the url with your mentor
