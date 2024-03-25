import styled from 'tailwind';

/* eslint-disable-next-line */
export interface GradeUiProps {}

const StyledGradeUi = styled.div`
  color: pink;
`;

export function GradeUi(props: GradeUiProps) {
  return (
    <StyledGradeUi>
      <h1>Welcome to GradeUi!</h1>
    </StyledGradeUi>
  );
}

export default GradeUi;
