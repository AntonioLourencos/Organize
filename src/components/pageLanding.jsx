import Button from "./button.jsx";
import { HomeImage } from "./svg/Home_to_do.jsx";
import {
  Container,
  ContainerMenssage,
  Menssage,
  Image,
} from "../styles/components/PageLanding";
import { useAuth } from "../context/Auth.js";

const PageLanding = () => {
  const { auth } = useAuth();

  return (
    <Container>
      <ContainerMenssage>
        <Menssage Tittle>Why do we use it?</Menssage>
        <div>
          <Menssage>
            Time goes very fast! We can not stop the clock. This application is
            a salvation for you!
          </Menssage>
        </div>
        {auth === null ? (
          <Button
            info={{
              type: "button",
              content: "Get start",
              fontSize: "1.2rem",
              paddingX: "10px",
              paddingY: "15px",
              borderRadius: "20px",
              Ghost: true,
            }}
          />
        ) : (
          <Button
            info={{
              type: "button",
              content: "Workspace",
              fontSize: "1.2rem",
              paddingX: "10px",
              paddingY: "15px",
              borderRadius: "20px",
              Ghost: true,
              url: "/workSpace",
            }}
          />
        )}
      </ContainerMenssage>
      <Image>
        <HomeImage Size={"20rem"} />
      </Image>
    </Container>
  );
};

export default PageLanding;
