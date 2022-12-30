import cn from "@styles/cssUtils";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ButtonComponent from "./Button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
};

export const Button = () => (
  <div className={cn("flex gap-4 items-center p-8", "flex-row")}>
    <ButtonComponent label="dark" to="https://timjames.dev/" />
    <ButtonComponent isLight label="light" to="https://timjames.dev/" />
    <ButtonComponent
      icon={<BsFillArrowRightCircleFill />}
      label="icon"
      to="https://timjames.dev/"
    />
    <ButtonComponent
      icon={<BsFillArrowRightCircleFill />}
      to="https://timjames.dev/"
    />
  </div>
);