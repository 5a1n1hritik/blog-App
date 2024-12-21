export const fetchBlogs = async (page = 1, limit = 5) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/blogs/all-blogs?page=${page}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Blogs:", data);

    // Ensure the API response contains the data and pagination
    if (data && data.data) {
      return {
        data: data.data,
        pagination: data.pagination, // Ensure pagination details are returned
      };
    } else {
      console.error("Unexpected response structure:", data);
      return { data: [], pagination: { totalPages: 1 } }; // Return fallback pagination
    }
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return { data: [], pagination: { totalPages: 1 } }; // Return fallback pagination
  }
};

export const fetchBlogById = async (id) => {
  try {
    if (!id) throw new Error("No blog ID provided");
    const response = await fetch(
      `http://localhost:5000/api/blogs/${id}/Singleblog`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch blog with id: ${id}`);
    }
    const data = await response.json();
    console.log("Fetched Blog Data:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await fetch(`http://localhost:5000/api/blogs/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create blog");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    return { error: error.message };
  }
};

export const updateBlog = async (id, blogData) => {
  try {
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update blog");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    return { error: error.message };
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete blog");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    return { error: error.message };
  }
};
