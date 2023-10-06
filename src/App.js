import './App.css';
import Accordion from './component/Accordion/Accordion';
import Tab from './component/Tab/Tab';
import Text from './component/Text/Text';
import Use from './component/Use/Use';
import Video from './component/Video/Video';
import './App.scss';
import Faq from './pages/Faq';
import Agreements from './pages/Agreements';
import Brand from './pages/Brand';

function App() {
  return (
    // <div className='home'>
    //   <div className='home-container'>
    //     <div className='home-aside'>
    //       <h4>Header</h4>
    //       <ul>
    //         <li>Introduction</li>
    //         <li>Introduction</li>
    //         <li>Introduction</li>
    //         <li>Introduction</li>
    //       </ul>
    //     </div>
    //     <div className='home-content'>
    //       <Text />
    //       <Use />
    //       <Video />
    //       <Tab />
    //       <Accordion />
    //     </div>
    //   </div>
    // </div>
    <>
      {/* <Faq/> */}
      {/* <Agreements /> */}
      <Brand />
    </>
  );
}

export default App;
