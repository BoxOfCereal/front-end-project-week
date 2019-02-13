import styled from "styled-components";

// wraps all of the note cards goes inside note list
const NoteCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export default NoteCardsWrapper;
