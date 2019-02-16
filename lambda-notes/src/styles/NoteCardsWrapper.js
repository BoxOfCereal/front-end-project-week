import styled from "styled-components";

// wraps all of the note cards goes inside note list
const NoteCardsWrapper = styled.div`
  display: grid;
  /* 
    https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items
    https://stackoverflow.com/questions/52861086/how-come-minmax0-1fr-works-for-long-elements-while-1fr-doesnt
    https://stackoverflow.com/questions/52785750/prevent-grid-area-from-expanding-causing-whole-page-to-scroll
   */
  /* By default grid has a min of 'auto' this sets it to zero */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  grid-auto-flow: columns dense;
  grid-auto-columns: 1fr;
`;

export default NoteCardsWrapper;
