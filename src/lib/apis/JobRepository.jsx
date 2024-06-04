export const addJob = async (newJob) => {
  await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};

export const deleteJob = async (id) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};

export const updateJob = async (job) => {
  await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return;
};
