import { ContainerStyle } from "./styles";
import { ContainerProps } from "./types";

export default function Container({children}: ContainerProps){
  return(
    <ContainerStyle>
      {children}
    </ContainerStyle>
  )
}