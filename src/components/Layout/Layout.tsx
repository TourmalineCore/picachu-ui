import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header>Header</header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
