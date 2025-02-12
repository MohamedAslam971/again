import { useRouteError } from "react-router";

const Error = () =>{
    const err = useRouteError();
    console.error(err);
    return(
        <div>
            <h1>Oops! Page Not Found</h1>
            <h2>Something went wrong</h2>
            <a href="/">Return to homepage</a>
        </div>
    );
};

export default Error;