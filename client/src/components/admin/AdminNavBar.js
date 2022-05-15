import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutRestaurant } from "../../redux/actions/restaurantActions";

function AdminNavBar() {
    const dispatch = useDispatch();

    function handleAdminLogout() {
        localStorage.removeItem("accessToken");
        dispatch(signOutRestaurant());
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/admin/restaurant"
                    aria-label="Brand Logo"
                >
                    <img src="/icon96.png" alt="brand logo" height="50" />
                </Navbar.Brand>
                <Nav>
                    <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={handleAdminLogout}
                    >
                        SIGN OUT
                    </button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AdminNavBar;
