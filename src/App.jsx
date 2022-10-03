import { useEffect, useState } from 'react'
import './App.css'
import LoadingIndicator from './components/LoadingIndicator'

export default function App() {
  
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const stepDuration = 100;

  useEffect(() => {
    if(percent < 100 && loading){
      setTimeout(() => setPercent((p) => p + 1), stepDuration);
    }else{
      setLoading(false);
    }
  }, [loading, percent]);

  return (
    <div className="App">
      <div className='loading-indicator'>
          <LoadingIndicator percent={percent} width={400} height={400} stepDuration={stepDuration} />
      </div>
      <div className="flex">
        <button onClick={() => {setPercent(percent==100?0:percent);setLoading(true)}}>Start</button>
        <button onClick={() => setLoading(false)}>Pause</button>
      </div>
    </div>
  )
}
