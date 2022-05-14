import { Spinner } from "react-bootstrap";

function Loader() {
    return (
        <>
            <div className="text-center mt-5">
                <Spinner animation="grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </>
    );
}

export default Loader;
