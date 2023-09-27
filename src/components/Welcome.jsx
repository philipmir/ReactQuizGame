// const Welcome = (props) => {


//     return (
//         <section>
//             <h2>Välkommen till denna quiz!</h2>
//             <p>Vill du sätta igång?</p>
//             <button onClick={props.nextScreen}>Ja!</button>
//         </section>
//     )
// }

// export default Welcome;

"EN LIKADAN MEN MED ROUTER"

import { Link } from "react-router-dom";

const Welcome = (props) => {


    return (
        <section>
            <h2>Välkommen till denna quiz!</h2>
            <p>Vill du sätta igång?</p>
            <Link to="/game">
                <button >Ja!</button>
            </Link>
        </section>
    )
}

export default Welcome;