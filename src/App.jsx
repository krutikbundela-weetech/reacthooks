import UseStateHook from './Hooks/State'
import UseEffectHook from './Hooks/Effect';
import UseReffHook from './Hooks/Reff';
import MemoHook from './Hooks/Memo';
import CallBack from './Hooks/CallBack'
import Profile from './components/Profile';
import Reducer from './Hooks/Reducer';
import LayoutEffect from './Hooks/LayoutEffect';
import Custom from './Hooks/Custom';
const App = () => {

  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseReffHook /> */}
      {/* <MemoHook/> */}
      {/* <CallBack/> */}

      {/* Context */}
      {/* <Profile/>  */}
      {/* <Reducer/> */}
      {/* <LayoutEffect/> */}
      <Custom/>
    </>
  );
}

export default App