# Social Media Application

Snapgram is a modern social media clone project developed with cutting-edge web technologies. Designed to offer a native mobile-like experience on the web, Snapgram allows users to share posts, like content, and interact with other users in a dynamic and engaging environment. With a sleek and responsive UI, Snapgram combines powerful front-end architecture and a cloud-based backend, making it both scalable and high-performing for seamless social interactions.

## Technologies

* _TypeScript:_ Adds type safety to the codebase, making it more reliable and maintainable.
* _Tailwind CSS:_ Ensures a flexible user interface with fast, modular styling definitions.
* _React Context API:_ Provides global state management for the application.
* _React Router: Enables:_ fast and efficient navigation between in-app pages.
* _ShadCN:_ A component library used to create a consistent and elegant user interface.
* _TanStack Query (React Query):_ Utilized for data caching, automatic refetching, parallel queries, and state management.
* _Appwrite:_ Used as a Backend as a Service (BaaS) for server management, authentication, and data handling.

## Quick Start:
Follow these steps..

1.Clone this repository to your local machine:
```
  git clone https://github.com/selenkunkcu/snapgram.git
  cd snapgram
```

2. Install dependencies using npm or yarn:
```
npm install
```

4. Create a new file named .env in the root of your project and add set up the environment variables:
 ```
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```
Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the Appwrite website.

5. Start the development server:
```
npm run dev
```

6. Open your web browser and navigate to http://localhost:3000 to view the Snapgram.

# Features
* Post Sharing: Users can create and share posts with others.
* Like System: Users can like posts, enhancing interaction among users.
* User Profile: Users can edit their own profiles and view profiles of other users.
* State Management: User state is managed globally across the application using React Context API.
* Automatic Caching and Data Updates: TanStack Query ensures faster and more efficient data management through caching and background updates.
_More exciting features coming soon!_
