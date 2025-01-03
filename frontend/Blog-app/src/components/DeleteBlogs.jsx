import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBlog } from "../api/blogService";
import { Trash2, CheckCircle, XCircle } from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const DeleteBlogs = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleDelete = async () => {
    if (!blogId) {
        setError("Invalid blog ID. Please try again.");
        return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      await deleteBlog(blogId, token);
      setSuccess("Blog deleted successfully!");
      setError("");
      navigate("/blog");
    } catch (err) {
      setError(err.message || "Failed to delete the blog.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center text-xl text-gray-500">
        Please log in to delete the blog.
      </div>
    );
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="size-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      role="alert"
                      className="text-base font-semibold text-gray-900"
                    >
                      Delete Blog
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this blog? This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={handleDelete}
                  className={`inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                    loading
                      ? "cursor-not-allowed bg-opacity-75"
                      : "hover:bg-red-500"
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loader"></span>
                  ) : (
                    <Trash2 className="w-5 h-5 mr-2" />
                  )}
                  Delete
                </button>

                <button
                  type="button"
                  data-autofocus
                  onClick={() => {
                    setOpen(false);
                    navigate("/blog");
                  }}
                  disabled={loading}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {success && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-4">
          <CheckCircle className="w-6 h-6 text-white" />
          <p className="flex-1 text-sm">{success}</p>
          <button
            onClick={() => setSuccess("")}
            className="text-white text-xl font-semibold hover:bg-green-700 rounded-full p-1"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {error && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-4">
          <XCircle className="w-6 h-6 text-white" />
          <p className="flex-1 text-sm">{error}</p>
          <button
            onClick={() => setError("")}
            className="text-white text-xl font-semibold hover:bg-red-700 rounded-full p-1"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default DeleteBlogs;
