import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <main className="w-full bg-gray-200 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
