import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GitHubLink() {
  return (
    <h3>
      Check out code on{" "}
      <a
        className="github-link"
        href="https://github.com/iagombermudez/sorting-algorithms-visualizer/"
      >
        Github <FaGithub />
      </a>
    </h3>
  );
}
