##ZombieFest redesign

Old site: https://zombiefest.org

new site: https://zombiefestlj.firebaseapp.com/

The goal is to replicate and improve the styling of the old site while improving performance metrics, provide hosting, authentication, and file storage. Authorized users will be able to change basic web layout, and upload photos and articles, regular users will be able to participate in commenting on photos and articles. 

Friday morning was spent creating a basic boilerplate app configured with firebase storage, authentication, hosting. 

The early afternoon was spent researching how to further configure and structure the database. After reading the firebase documentation on structuring data and other articles, I have decided to opt for a GraphQL structure as opposed to a RESTful structure. https://firebase.google.com/docs/database/web/structure-data?authuser=0
https://codeburst.io/graphql-on-cloud-functions-for-firebase-153fe7b02ea5
https://codeburst.io/learning-graphql-with-firebase-part-1-6cb0ae1499a4

During the rest of the evening I read through the graphql documentation and deployed the react boilerplate app on firebase. 
