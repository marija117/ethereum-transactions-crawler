import React from 'react';
import { StyledUl, StyledLi } from "./ErrorDisplay.styles";

interface ErrorDisplayProps {
  'data-testid': string,
  errors: string[];
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 'data-testid': testId, errors }) => {
  return (
    <div data-testid={testId}>
      {errors.length > 0 && (
        <div data-testid={testId}>
          <StyledUl>
            {errors.map((error, index) => (
              <StyledLi key={index}>
                {error}
              </StyledLi>
            ))}
          </StyledUl>
        </div>
      )}
    </div>
  );
};

export default ErrorDisplay;
