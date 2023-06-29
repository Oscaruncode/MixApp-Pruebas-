import { Link } from "react-router-dom";


export default function DefaultLayout({children}){
    return (
<>
<header>
        <nav className="container-fluid navbar-light bg-light text-center">
            <ul className=" row list-unstyled border border-danger border-5">
                <li className="col-3 bg-dark">
                <Link to="/" className="text-decoration-none ">Home</Link>
                </li>
                <li className="col-3 bg-success ">
                <Link to="/first" className="text-decoration-none text-black">FirstPage</Link>
                </li>
                <li className="col-3 bg-secondary">
                <Link to="/second" className="text-decoration-none text-black">SecondPage</Link>
                </li>
                <li className="col-3 bg-warning">
                <Link to="/third" className="text-decoration-none text-black">PrivateThirdPage</Link>
                </li>
            </ul>
        </nav>
</header>
<main>
    {children}
</main>

</>

    )

}