import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
    const productId = params.productId;

    return <div>page</div>;
};

export default page;
