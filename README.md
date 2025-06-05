# Movie App

A modern React-based movie application that allows users to browse popular movies, search for specific titles, and save their favorite movies to a personal list.

## Features

- Browse popular movies
- Search for movies by title
- Add/remove movies to/from favorites
- Responsive design for all screen sizes
- Fast and efficient loading with React and Vite
- Modern UI with smooth animations

## Technologies Used

- React 19.1.0
- React Router 7.6.2 for navigation
- Context API for state management
- Vite for fast development and building
- TMDB API for movie data
- Font Awesome for icons
- CSS3 for styling

## Project Structure

```
movie-app/
├── public/
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React context providers
│   ├── css/            # Styling files
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Application entry point
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd movie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Usage

- Use the search bar to find movies by title
- Click the heart icon to add/remove movies from your favorites
- Navigate to the Favorites page to view your saved movies

## Dependencies

- react@19.1.0
- react-dom@19.1.0
- react-router-dom@7.6.2

## Acknowledgments

- TMDB for providing the movie data API
- Vite for the amazing development experience
- React community for awesome tools and libraries
