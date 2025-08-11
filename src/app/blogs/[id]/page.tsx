import BlogDetailPage from "@/components/pages/blog-detail-page";
import React from "react";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: BlogPageProps) => {
  return <BlogDetailPage blogId={params.id} />;
};

export default page;
