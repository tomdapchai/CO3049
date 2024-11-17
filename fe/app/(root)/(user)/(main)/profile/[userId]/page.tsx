import React from "react";

const page = ({ params }: { params: { userid: string } }) => {
    const userId = params.userid;
    return <div>page</div>;
};

export default page;
