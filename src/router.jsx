import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/Identity/components/login/login";
import Register from "./features/Identity/components/register/register";
import IdentityLayout from "./layouts/identity-layout";
import { registerAction } from "./features/Identity/components/register/register";
import MainLayout from "./layouts/mainLayout/main-layout";
import Courses, { coursesLoader } from "./pages/courses";
import CourseCategories, { categoriesLoader } from "./pages/course-categories";
import CourseDetails, {
  courseDetailsLoader,
} from "./features/courses/components/course-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Courses />,
        loader: coursesLoader,
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
        loader: courseDetailsLoader,
      },
      {
        path: "course-categories",
        element: <CourseCategories />,
        loader: categoriesLoader,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
