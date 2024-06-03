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

const addJob = async (newJob) => {
  await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};
const deleteJob = async (id) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};

const updateJob = async (job) => {
  await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobsPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-job"
          element={<AddJobsPage addJobSubmit={addJob} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
