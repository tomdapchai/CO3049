import React from "react";

const page = ({ params }: { params: { blogId: string } }) => {
    const blogId = params.blogId;
    return <div>page</div>;
};

export default page;
