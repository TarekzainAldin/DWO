
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <div className="h-24 w-24 rounded-full bg-nonprofit-100 flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="h-12 w-12 text-nonprofit-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          asChild
          className="bg-nonprofit-700 hover:bg-nonprofit-800"
        >
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
