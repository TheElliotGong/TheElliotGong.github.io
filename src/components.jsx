


const project = (props) => {
    return <div className ="project column is-full-mobile is-half-tablet is-one-third-desktop">
                        <h4 className="has-text-weight-bold is-size-4">props.name</h4>
                        <div className="sketchfab-embed-wrapper">  </div>
                        <ul>
                            <li><strong>About:</strong>props.description</li>
                            <li><strong>Team Size:</strong>props.teamCount</li>
                            <li><strong>Project Length:</strong>props.length</li>
                            <li><strong>Tools:</strong>props.tools</li>
                        </ul>
                    </div>
}