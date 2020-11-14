import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  padding: 2rem 0;
  border-radius: 3rem;
  background: none;
  display: grid;
  place-items: center;
`;

export const ChartWrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;

interface LabelProps {
  isVisible: boolean;
}

export const ChartLabel = styled.div<LabelProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875rem;
  color: rgba(25, 25, 25, 0.7);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  text-align: center;
  transition: opacity 0.25s;
`;

export const ChartLabelValue = styled.div`
  font-size: 1.75rem;
  color: rgba(25, 25, 25, 1);
`;
