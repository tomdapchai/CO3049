import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative w-full h-full flex flex-col justify-between ">
            <div className="flex min-w-full flex-grow">{children}</div>
        </main>
    );
};

export default layout;