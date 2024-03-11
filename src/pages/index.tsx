import clsx from "clsx";
import React from "react";
import {} from "@docusaurus/router";
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
      title={`${siteConfig.title}`}
      description="Pathways to Digital Employment"
    >
      <HomepageHeader />
      <main>
        <WelcomeMessage />
        <CourseModules />
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

const CourseModules = () => {
  return (
    <div className={clsx("modules", styles.modules)}>
      <h1>Course Modules</h1>
      <br />
      <br />
      <div className={clsx("grid", styles.grid)}>
        <a
          href="/docs/category/basic-computer"
          className={clsx("card", styles.card)}
        >
          <img src="img/Microsoft365.png" alt="office" />
          <h3>Basic Microsoft 365</h3>
        </a>
        <a className={clsx("card", styles.card)}>
          <img src="img/img3.png" alt="office" />
          <h3>Navigating the Internet, Online Safety and Security</h3>
        </a>
        <a className={clsx("card", styles.card)}>
          <img src="img/img4.png" alt="office" />
          <h3>Creating a Polished Resume and Cover Letter</h3>
        </a>
        <a className={clsx("card", styles.card)}>
          <img src="img/img5.png" alt="office" />
          <h3>Develop Your Professional Network</h3>
        </a>
        <a className={clsx("card", styles.card)}>
          <img src="img/img6.png" alt="office" />
          <h3>Job Hunting</h3>
        </a>
        <a className={clsx("card", styles.card)}>
          <img src="img/img7.png" alt="office" />
          <h3>Preparing for a Job interviews</h3>
        </a>
      </div>
    </div>
  );
};
