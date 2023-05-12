# WebsiteApplicationMod4

Project for creating a Full-Stack web-application for HBO-ICT quartile 1.4

# FRONTEND

## Application idea

A Jedi Archive web application that uses CRUD (Create, Read, Update, Delete) operations and REST (Representational State
Transfer) architecture could be a great way to organize and manage information related to the Star Wars universe. Here's
how such an application could work:

Data Model: The first step would be to define the data model for the Jedi Archive. This would involve identifying the
different types of entities that the archive will store, such as Jedi Masters, Padawans, Sith Lords, planets, starships,
weapons, and so on. For each entity, you would need to define the attributes that will be stored, such as name,
birthdate, homeworld, species, affiliations, etc.

CRUD Operations: Once the data model is defined, the application can implement CRUD operations for each entity. These
operations will allow authorized Jedi to create new records, read existing records, update existing records, and delete
records as needed. The authorized and the other Jedi can lend out one or more of these records. It could be seen as a
library system.

RESTful API: The application should expose a RESTful API that allows external clients to interact with the data stored
in the Jedi Archive. This API should adhere to REST principles such as using HTTP methods (GET, POST, PUT, DELETE) for
different types of operations, using resource URIs to identify each entity, and using JSON or XML as the data exchange
format.

Authentication and Authorization: Since the Jedi Archive will likely contain sensitive information, the application
should implement authentication and authorization mechanisms to ensure that only authorized users can access and modify
the data. This could be done using username/password authentication, OAuth, or other standard authentication protocols.

Frontend Interface: Finally, the application should provide a frontend interface that allows users to interact with the
Jedi Archive through a web browser. This interface should allow users to search, view, create, update, and delete
records as needed.

Overall, a Jedi Archive web application using CRUD and REST could be a powerful tool for managing information related to
the Star Wars universe. Whether used by fans, researchers, or storytellers, such an application could help organize and
make sense of the vast amount of information available in the Star Wars canon.
