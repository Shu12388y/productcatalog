# NextJS E-commerce Product Gallery

A modern, responsive e-commerce product gallery built with Next.js, TypeScript, and Tailwind CSS. This application fetches products from the Fake Store API and displays them in an elegant, user-friendly interface.

![E-commerce Product Gallery Screenshot](https://via.placeholder.com/800x400)

## Features

- Responsive product grid with elegant card design
- Detailed product pages with ratings and descriptions
- Client-side state management with Zustand
- Type-safe data fetching with custom hooks
- Optimized image loading with Next.js Image component
- Performance optimizations using useMemo

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/Shu12388y/productcatalog.git
cd productcatalog

# Install dependencies
npm install

```

## Running the Project

```bash
# Development server
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
productcatalog/
├── app/
│   ├── page.tsx                 # Home page with product grid
│   └── product/[id]/page.tsx    # Dynamic product detail page
├── components/
│   └── ui/                      # UI components (cards, buttons, etc.)
├── hooks/
│   └── useFetch.ts              # Custom data fetching hook
├── store/
│   └── store.ts                 # Zustand state management
├── next.config.js               # Next.js configuration
└── tailwind.config.js           # Tailwind CSS configuration
```

## Data Fetching Strategy

This project uses a custom `useFetch` hook that:

1. Provides TypeScript generics for type safety across different API endpoints
2. Handles loading and error states elegantly
3. Uses React's useState and useEffect for component lifecycle management

The strategy allows for:
- Code reusability across components
- Proper separation of concerns
- Type safety with TypeScript generics
- Consistent error handling

Products data is managed centrally using Zustand for state management, allowing for efficient data sharing between components without prop drilling.

## Styling Approach

The project uses Tailwind CSS for styling with the following benefits:

- Utility-first approach for rapid UI development
- Consistent design language throughout the application
- Responsive design with mobile-first approach
- Integration with shadcn/ui component library
- Custom styling with minimal CSS overhead

The design emphasizes:
- Clean, minimalist product cards
- Proper spacing and visual hierarchy
- Responsive layout that works on mobile, tablet, and desktop
- Accessible color contrast and typography

## Bonus Features

- **Optimized Performance**: Used useMemo to prevent unnecessary re-renders
- **Enhanced Image Loading**: Implemented Next.js Image component for optimized image loading
- **Type Safety**: Complete TypeScript integration for all components and data structures
- **Error Handling**: Graceful error display with user-friendly messages
- **Loading States**: Elegant loading indicators during data fetching
- **Responsive Star Ratings**: Visual rating system that reflects product ratings


## Future Enhancements

- Add search functionality
- Implement filtering by category
- Add shopping cart functionality
- Create user authentication
- Implement product reviews section

## License

MIT