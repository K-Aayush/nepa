import BlogDetailPage from "@/components/pages/blog-detail-page";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <BlogDetailPage blogId={id} />;
};

export default Page;
