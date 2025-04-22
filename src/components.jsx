


const project = (props) => {
    <div class="project column is-full-mobile is-half-tablet is-one-third-desktop">
                        <h4 class="has-text-weight-bold is-size-4">{props.name}</h4>

                        <a href={props.url} target="_blank">
                            <img src={props.img} alt=""></img>
                        </a>
                        <ul>
                            <li><strong>Link:</strong> <a href="https://www.artstation.com/artwork/8b2D6O"
                                    target="_blank"> {props.linkDescription}</a></li>
                            <li><strong>About:</strong> {props.projectDescription}
                            </li>
                            <li><strong>Team Size:</strong> {props.teamSize}</li>
                            <li><strong>Project Length:</strong> {props.projectLength}</li>
                            <li><strong>Tools:</strong> {props.tools}</li>
                        </ul>
                    </div>
}