import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/Home.jsx";
import MainLayout from "../layout/Main.jsx";
import JobsPage from "../pages/Jobs.jsx";
import JobPage, { jobLoader } from "../pages/Job.jsx";
import AddJobsPage from "../pages/AddJobs.jsx";
import NotFoundPage from "../pages/NotFound.jsx";
import EditJobsPage from "../pages/EditJob.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
        <Route
          path="/edit-job/:id"
          element={<EditJobsPage />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
