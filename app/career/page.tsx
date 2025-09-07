"use client";
import { useState } from "react";

export default function CareerPage() {
  type Job = {
    id: number;
    title: string;
    description: string;
  };

  const jobs: Job[] = [
    { id: 1, title: "Driver", description: "Responsible for safe and timely delivery of goods." },
    { id: 2, title: "Manager", description: "Oversee operations and manage logistics staff." },
    { id: 3, title: "Operations Executive", description: "Coordinate shipments and maintain client relationships." },
  ];

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) return alert("Please upload your resume");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("role", selectedJob?.title || "Unknown");
    formData.append("resume", resume);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      let data;
      try {
        data = await res.json();
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        setMessage("❌ Server returned invalid response");
        return;
      }

      if (res.ok) {
        setMessage(`✅ Application submitted! Resume link: ${data.link}`);
        setSelectedJob(null);
        setForm({ name: "", email: "", phone: "" });
        setResume(null);
      } else {
        setMessage(`❌ Error: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setMessage("❌ Upload failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Careers at JK CargoCare</h1>
      <p className="mb-6">Join our team! Browse openings below and apply.</p>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.description}</p>
            <button
              onClick={() => handleApply(job)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border p-2 w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border p-2 w-full"
                required
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                className="border p-2 w-full"
                required
              />
              <div className="flex gap-2">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {message && <p className="mt-6">{message}</p>}
    </div>
  );
}
