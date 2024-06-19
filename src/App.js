import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LegalNotice, MainPage, PrivacyPolicy, TermsOfUse } from "./pages";
import { Footer, Hero } from "./components";
import { Outlet, useNavigation } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <Outlet />,
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "legal-notice",
        element: <LegalNotice />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
