// API configuration and utility functions
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://182.93.94.210:5000/api/v1";

// Generic API fetch function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

// Blog API functions
export interface Blog {
  _id: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  views: number;
  comments: number;
  likes: number;
  link?: string;
  createdAt: string;
  updatedAt: string;
}

export const blogAPI = {
  // Get blogs with pagination
  getBlogs: async (page: number = 0): Promise<Blog[]> => {
    return apiRequest<Blog[]>("/blogs", {
      headers: {
        page: page.toString(),
      },
    });
  },

  // Get single blog by ID or link
  getBlogById: async (id: string): Promise<Blog> => {
    return apiRequest<Blog>(`/blogs/${id}`);
  },

  // Like a blog
  likeBlog: async (id: string): Promise<{ message: string }> => {
    return apiRequest<{ message: string }>(`/blogs/${id}`, {
      headers: {
        like: "true",
      },
    });
  },
};

// Gallery API functions
export interface GalleryItem {
  _id: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export const galleryAPI = {
  // Get gallery items with pagination
  getGallery: async (page: number = 0): Promise<GalleryItem[]> => {
    return apiRequest<GalleryItem[]>("/gallery", {
      headers: {
        page: page.toString(),
      },
    });
  },

  // Get single gallery item
  getGalleryById: async (id: string): Promise<GalleryItem> => {
    return apiRequest<GalleryItem>(`/gallery/${id}`);
  },
};

// Utility function to get full image URL
export const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return `${API_BASE_URL.replace("/api/v1", "/uploads")}${imagePath}`;
};
