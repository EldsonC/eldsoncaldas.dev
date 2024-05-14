import { useEffect, useState } from "react"
import { RightIcon } from "./assets/icons/right"
import { ContentHome, Section } from "./assets/style/App"
import { MobileSvg } from "./assets/svg/mobile"
import { HeaderComponent } from "./components/header"
import { TagComponent } from "./components/tag"
import { Desktop } from "./assets/svg/desktop"
import { EmailComponent } from "./components/email"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <>
      <HeaderComponent />
      <EmailComponent />
      <Section
        $paddingTop="55px"
        $paddingBottom="36px"
        $backgroundColor="#F9F9F9"
      >
        <TagComponent content="Welcome to my portfolio" />
        <ContentHome
          $h1MaxWidth={windowWidth <= 900 ? "20.625rem" : "50.75rem"}
          $h1Size={windowWidth <= 900 ? "22.5pt" : "33.75pt"}

          $pMaxWidth={windowWidth <= 900 ? "18.625rem" : "31.5rem"}
          $pSize={windowWidth <= 900 ? "7.5pt" : "9pt"}
        >
          <h1>Full-Stack Developer <span>Eldson Caldas</span></h1>
          <p>Sou um desenvolvedor full stack, especializado em construir interfaces front-end intuitivas (React, Angular) e desenvolver serviços back-end.</p>

          <a href="https://www.powtfy.com/port/EldsonC">
            <button>
              <p>Discover</p>

              <div className="go_right">
                <RightIcon />
              </div>
            </button>
          </a>

          {windowWidth <= 900 ? (<MobileSvg />) : (<Desktop />)}
        </ContentHome>
      </Section>
    </>
  )
}

export default App
