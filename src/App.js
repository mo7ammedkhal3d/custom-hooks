import React, { Fragment,useState } from 'react';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Counters from './components/counters/Counters';
import TaskSched from './components/taskSched/TaskSched';

function App() {

  const [showCounters,setShowCounters] = useState(true);
  const [showTaskSched,setShowTaskSched] = useState(false);



  const navigationHandler = () =>{
    if(showCounters){
      setShowCounters(false);
      setShowTaskSched(true);
    }else {
      setShowCounters(true);
      setShowTaskSched(false);
    }
  }

  const content = (showCounters ? <Counters /> : <TaskSched />);

  return (
    <Fragment>
      <Header onShowCounters={navigationHandler} onShowTaskSched={navigationHandler}/>
        <main>
          {content}
        </main>
      <Footer />
    </Fragment>
  );
}

export default App;
