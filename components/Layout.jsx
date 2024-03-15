const React = require('react')
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



module.exports = function Layout({ title, heading, user, children }) {
    return (
        <>
            <html lang="en">
                <head>
                    <title>{title}</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="/css/style.css"></link>
                    <script src='/js/btn.js' defer></script>
                </head>
                <body>
                    <Navbar expand="lg" bg="red" data-bs-theme="" className="bg-body-tertiary justify-content-between">
                        <Container>
                            <Navbar.Brand href="/">Quiz</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Score:</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav >
                                    <Nav.Link href="/auth/reg">Registration</Nav.Link>

                                </Nav>
                                <Navbar.Text>
                                    Hello,<a href="#login">{user?.login}</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Container style={{ "marginBottom": "20px" }} >
                        {
                            { heading } ? <h2>{heading}</h2> : ''
                        }



                        {children}
                    </Container>

                </body>
            </html>
        </>
    );
};
