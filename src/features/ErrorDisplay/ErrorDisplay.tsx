import React from 'react';
import { StyledUl, StyledLi } from "./ErrorDisplay.styles";

interface ErrorDisplayProps {
  errors: string[];
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errors }) => {
  return (
    <div>
      {errors.length > 0 && (
        <div>
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
