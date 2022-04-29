// import styled from 'styled-components';

// export default function Modal({ component, closeAction, clickOutsideAction }) {
//   return (
//     <ModalWrapper onClick={clickOutsideAction}>
//       <div className="modal-overlay" />
//       <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
//         <div className="modal">
//           {component}
//           <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={closeAction}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//       </div>
//     </ModalWrapper>
//   )
// }

// const ModalWrapper = styled.div`
// .modal-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: #000;
//   opacity: .5;
// }

// .modal-wrapper {
//   position: fixed;
//   top: 25%;
//   left: 0;
//   z-index: 1;
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: auto;
//   outline: 0;
// }

// .modal {
//   display: flex;
//   justify-content: space-between;
//   z-index: 1;
//   background: #f3e4c3;
//   position: relative;
//   margin: 1.75rem auto;
//   border-radius: 3px;
//   max-width: 500px;
//   padding: 2rem;
// }

// .modal-close-button {
//   font-size: 1.4rem;
//   font-weight: 700;
//   line-height: 1;
//   color: #000;
//   opacity: .3;
//   cursor: pointer;
//   border: none;
// }

// .modal-text {
//   font-size: large;
//   font-weight: 600;
//   color: #6E8510;
//   text-align: center;
// }

// button {
//   font-size: .9rem;
//   font-weight: 700;
//   border: none;
//   border-radius: 3px;
//   padding: .3rem 1rem;
//   margin-left: .5rem;
// }

// .button-default {
//   background: #33d3c1;
//   color: #fff;
// }
// `;