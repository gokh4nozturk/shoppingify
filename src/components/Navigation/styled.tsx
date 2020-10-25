import styled from "styled-components";
import theme from "../../theme/theme";

export const NavContainer = styled.div`
  display: flex;
  width: 95px;
  background: ${({ theme }) => theme.colors.primary};
`;
