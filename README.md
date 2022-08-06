
### Get started:

- Download Book-Directory Folder: `https://github.com/ankit2818/Backend-Projects/book-directory`
- Change directory: `cd book-directory`
- Install required modules for server: `npm install`
- Run Server: `npm run start`
  Server should be started on `http://localhost:5000`

### Book Directory
- Node.js Skills Practiced: <code>Database Management, RESTful API</code>
- Create a book directory using Node.js by building an extensive database with the help of JSON, a JavaScript file for retrieving data from the server. Your goal with this basic project is to achieve a RESTful API. You can use basic methods such as GET, POST, PUT, and DELETE to create endpoints.


##### Routes:
| Path  | Method | Description | Params |
| ------------- | ------------- | ------------- | ------------- | 
| <code>/</code>  | GET  | Get all the books | None |
| <code>/get-book-by-id/:id</code>  | GET  | Get a book using its id | Book Id |
| <code>/add-book</code>  | POST  | Add new book to the collection | Refer [BookSchema](/book-directory/models/Books.js) for more Details. |
| <code>/update-book</code>  | PUT  | Update book details | Provide all fields and modify values. Refer [BookSchema](/book-directory/models/Books.js) for more Details. |
| <code>/delete-book/:id</code>  | DELETE  | Delete a book using its id | Book Id |