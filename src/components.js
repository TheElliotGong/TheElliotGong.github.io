// ...existing code...
// Project component without JSX
export function Project(props) {
  const children = [];

  // Title link
  children.push(
    React.createElement(
      "a",
      { href: props.link, target: "_blank", rel: "noreferrer" },
      React.createElement("h4", { className: "has-text-weight-bold is-size-4" }, props.name)
    )
  );

  // Thumbnail link
  children.push(
    React.createElement(
      "a",
      { href: props.link, target: "_blank", rel: "noreferrer" },
      React.createElement("img", { src: props.image, alt: props.name })
    )
  );

  // Details list
  const listItems = [];

  if (props.link) {
    listItems.push(
      React.createElement(
        "li",
        { key: "link" },
        React.createElement("strong", null, "Link: "),
        React.createElement(
          "a",
          { href: props.link, target: "_blank", rel: "noreferrer" },
          props.link
        )
      )
    );
  }

  listItems.push(
    React.createElement(
      "li",
      { key: "about" },
      React.createElement("strong", null, "About: "),
      props.description
    ),
    React.createElement(
      "li",
      { key: "teamSize" },
      React.createElement("strong", null, "Team Size: "),
      props.teamSize
    ),
    React.createElement(
      "li",
      { key: "role" },
      React.createElement("strong", null, "Role: "),
      props.role
    ),
    React.createElement(
      "li",
      { key: "status" },
      React.createElement("strong", null, "Status: "),
      props.status
    ),
    React.createElement(
      "li",
      { key: "tools" },
      React.createElement("strong", null, "Tools: "),
      props.tools
    )
  );

  children.push(React.createElement("ul", null, ...listItems));

  return React.createElement(
    "div",
    {
      className:
        "project column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen",
    },
    ...children
  );
}

// Job component without JSX
export function Job(props) {
  const header = React.createElement(
    "div",
    { className: "employmentInfo block" },
    React.createElement(
      "h2",
      { className: "has-text-weight-bold is-size-3-desktop is-size-5-touch" },
      props.jobTitle
    ),
    React.createElement(
      "div",
      { className: "jobInfo" },
      React.createElement(
        "h3",
        { className: "has-text-weight-bold is-size-4-desktop is-size-6-touch" },
        props.company
      ),
      React.createElement(
        "h3",
        { className: "has-text-weight-bold is-size-4-desktop is-size-6-touch" },
        props.duration
      )
    )
  );

  let dutiesList = null;
  if (Array.isArray(props.duties) && props.duties.length > 0) {
    dutiesList = React.createElement(
      "ul",
      null,
      ...props.duties.map((duty, idx) =>
        React.createElement("li", { className: "is-size-6-touch", key: `${props.jobTitle}-duty-${idx}` }, duty)
      )
    );
  }

  return React.createElement(
    "div",
    { className: "employment block" },
    header,
    dutiesList
  );
}
// ...existing code...