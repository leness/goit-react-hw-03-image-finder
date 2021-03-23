// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import s from './Loader.module css'

const Loader = () => {
  return (
    <>
      <loader type="Hearts" className={s.Loader} ></loader>
    </>
  )
}

export default Loader




// export default class Loader extends React.Component {
//   //other logic
//   render() {
//     return (
//       <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs
//       />
//     );
//   }
// }