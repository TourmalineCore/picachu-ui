import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>Header</header>

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
