const Project = (props) => {
  return (
    <div className="project column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
      <a href={props.link} target="_blank" rel="noreferrer">
         <h4 className="has-text-weight-bold is-size-4">{props.name}</h4>
      </a>
     
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt={props.name} />
      </a>
      <ul>
        {props.link && (
          <li>
            <strong>Link:</strong>{" "}
            <a href={props.link} target="_blank" rel="noreferrer">
              {props.link}
            </a>
          </li>
        )}
        <li>
          <strong>About:</strong> {props.description}
        </li>
        <li>
          <strong>Team Size:</strong> {props.teamSize}
        </li>
        <li>
          <strong>Role:</strong> {props.role}
        </li>
        <li>
          <strong>Status:</strong> {props.status}
        </li>
        <li>
          <strong>Tools:</strong> {props.tools}
        </li>
      </ul>
    </div>
  );
};

const Job = (props) => {
  return (
    <div class="employment block">
      <div class="employmentInfo block">
        <h2 class="has-text-weight-bold is-size-3-desktop is-size-5-touch">
          {props.jobTitle}
        </h2>
        <div class="jobInfo">
          <h3 class="has-text-weight-bold is-size-4-desktop is-size-6-touch">
            {props.company}
          </h3>
          <h3 class="has-text-weight-bold is-size-4-desktop is-size-6-touch">
            {props.duration}
          </h3>
        </div>
      </div>
      {Array.isArray(props.duties) && props.duties.length > 0 && (
        <ul>
          {props.duties.map((duty, idx) => (
            <li
              className="is-size-6-touch"
              key={`${props.jobTitle}-duty-${idx}`}
            >
              {duty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export { Project, Job };
