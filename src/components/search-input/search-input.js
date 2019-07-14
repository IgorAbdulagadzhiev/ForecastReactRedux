import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ title, searchChange, value }) => {
  return (
    <StyledDiv>
    <StyledLabel>
      {title}
      <StyledInput type='text' value={value}
        onChange={(event) => {searchChange(event.target.value)}}></StyledInput>
    </StyledLabel>
  </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-top: 20px;
  margin-left: 50px;
`;

const StyledInput = styled.input`
  padding: 5px;
  margin-left: 20px;
  font-size: 20px;
`;

const StyledLabel = styled.label`
  font-size: 20px;
`;

export default SearchInput;