import { Route, Switch } from "wouter";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Blog from "./pages/blog";
import Article from "./pages/article";
import Contact from "./pages/contact";
import Project from "./pages/project";
import { Layout, Eyebrow, TextLink } from "./components/site";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Article} />
          <Route path="/contact" component={Contact} />
          <Route path="/work/:slug" component={Project} />
          <Route>
            <section className="page-heading wrap">
              <Eyebrow>404 — PAGE NOT FOUND</Eyebrow>
              <h1>
                Let's find
                <br />a new direction.
              </h1>
              <TextLink to="/">Back to home</TextLink>
            </section>
          </Route>
        </Switch>
      </Layout>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
