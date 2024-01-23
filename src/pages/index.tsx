import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src={siteConfig.favicon}
          alt="logo"
          className={clsx("logo", styles.logo)}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <WelcomeMessage />
      </main>
    </Layout>
  );
}

const WelcomeMessage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center the container on the X-axis
        textAlign: "center",
        padding: "100px",
      }}
    >
      {/* Left */}
      <div
        style={{
          flex: "1",
          textAlign: "left",
        }}
      >
        <h1 style={{ fontWeight: "normal", fontSize: "3em" }}>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Upgrade
          </span>{" "}
          your skills and knowledge{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            with
          </span>{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "#2e8555",
            }}
          >
            our courses.
          </span>
        </h1>
      </div>
      {/* Right */}
      <div style={{ flex: "1" }}>
        <img
          src="img/students.png"
          alt="welcome"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  );
};
