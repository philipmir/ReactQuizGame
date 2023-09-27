// import { Link } from "react-router-dom";

// const Result = (props) => {

//     return (
//         <section>
//             <h2>Resultat</h2>
//             <p>Du fick {props.score} rätt svar!</p>
//             <button onClick={props.restartQuiz}>Börja om</button>
//         </section>
//     )
// }

// export default Result;


"EN LIKADAN MEN MED ROUTER"


import { Link } from "react-router-dom";

const Result = (props) => {

    return (
        <section>
            <h2>Resultat</h2>
            <p>Du fick {props.score} rätt svar!</p>
            <Link to="/">
                <button>Börja om</button>
            </Link>
        </section>
    )
}

export default Result;