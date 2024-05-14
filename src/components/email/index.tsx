import { useEffect, useState } from "react";
import { EmailIcon } from "../../assets/icons/email";
import { Email } from "./styled";

export function EmailComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const myEmail = "eldson.caldasw@gmail.com";

    const handleEmailClick = () => {
        window.location.href = `mailto:${myEmail}`;
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);
    
    return (
        <Email
            $bottom={windowWidth <= 900 ? "0.313rem" : "2.313rem"}
            $right={windowWidth <= 900 ? "0.563rem" : "2.563rem"}
            onClick={handleEmailClick}
        >
            <EmailIcon />
        </Email>
    );
}