import React from "react";

export default function Footer() {
    let footerStyle = {
        margin: "35px 0 0 0",
        width: "100%",
        padding: "15px 0 1px 0",
        backgroundColor: "#212529",
        color: "white",
    };
    return (
        <footer style={footerStyle}>
            <p className="text-center">Copyright &copy; MyTodoList.com</p>
        </footer>
    );
}
