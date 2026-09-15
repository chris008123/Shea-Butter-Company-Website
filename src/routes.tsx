import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Products from "./pages/Products";
import SheaButter from "./pages/SheaButter";
import SheaNuts from "./pages/SheaNuts";
import Sustainability from "./pages/Sustainability";
import Insights from "./pages/Insights";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import RequestQuote from "./pages/RequestQuote";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "what-we-do", Component: WhatWeDo },
      { path: "products", Component: Products },
      { path: "products/shea-butter", Component: SheaButter },
      { path: "products/shea-nuts", Component: SheaNuts },
      { path: "sustainability", Component: Sustainability },
      { path: "insights", Component: Insights },
      { path: "insights/:slug", Component: Article },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "request-a-quote", Component: RequestQuote },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms", Component: Terms },
    ],
  },
]);
