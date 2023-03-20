import { ReactNode } from "react";

function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header>Header</header>
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
