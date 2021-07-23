// import { React } from 'react';
// import ReactDOM from 'react-dom';
// import '../style/Modal.css';
// import TabMain from './../dashboardComponents/TabMain';


// const Secondmodal = ({ showModal, setModal, result, item}) => {



//   const toggleModal = () => {
//     setModal((prev) => !prev);
//     // console.log("clicked");
//   };

//     return ReactDOM.createPortal (
//       <div className = 'ModalWrap'>
        
//         {showModal ? <div className = "Modal">
//         <button className ='Modal_CloseButton' onClick = {toggleModal}>Close</button> 
          
//           {/* <TabMain tabType = 'Tab--Modal2' /> */}
//           {result.length ? result[0].slice(0, 3).map(el => {
            
//             return <TabMain  tabType = 'Tab--Modal2' topic = {item} article = {el}  />
            
//           }): null}

//          </div>: null}
//       </div>,
//       document.getElementById('Modal-root')
    
//     )
//   }
  
//   export default Secondmodal
