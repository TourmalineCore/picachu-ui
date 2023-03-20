import { ReactNode } from "react";

function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="layout">
      <header>Header</header>

      <main>
        {children}
      </main>

    </div>
  );
}

export default Layout;
