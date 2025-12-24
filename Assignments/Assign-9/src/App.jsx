import React from 'react'
import Card from './components/Card'
import './index.css'

const App = () => {
  return (
    <div className='flex items-center justify-center flex-wrap'>
      <Card image = "https://imgs.search.brave.com/q4pME-C4V2gTAwMgH-wDqrWt7ILEJRRtP2r1X0KCbbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9v/ZmZpY2lhbC1ocS1h/bWF6b24tYS1sZXR0/ZXItc3ltYm9sLWxv/Z28taWNvbi03MDE3/NTE2OTQ3OTIxNDE4/NHVhdnQwdjFtLnBu/Zw" company="Amazon" job="Software Engineer" button_1="Part-Time" button_2="Senior Level" salary="$120/hr" city="Mumbai, India"/>
      <Card image = "https://imgs.search.brave.com/JDVOtZ7VUPl_IHBJdeevP76R0qQMLMBpmnPy8MlpzH4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG9nby1nb29n/bGVfNzk4NTcyLTIw/Ny5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA" company="Google" job="Graphic Designer" button_1="Part-Time" button_2="Flexible Schedule" salary="$150-220k" city="Kochi, India"/>
      <Card image = "https://imgs.search.brave.com/AaHZondVICJRFUfYZfIaE8rWyhsbLComZFhEpJ09oPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTgv/NzU3Lzc4My9zbWFs/bC9kcmliYmJsZS1s/b2dvLWRyaWJiYmxl/LWljb24tZnJlZS1m/cmVlLXZlY3Rvci5q/cGc" company="Dribble" job="Senior Designer" button_1="Contract" button_2="Remote" salary="$85/hr" city="Chennai, India"/>
      <Card image = "https://imgs.search.brave.com/ebiND_c3W1fQe5d7YWL72A3RIuQ57x38mPgFq4NCsQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvRmln/bWEtTG9nby1QTkct/SW1hZ2UucG5n" company="Figma" job="UX Designer" button_1="Full-Time" button_2="In office" salary="$200-250k" city="Banglore, India"/>
      <Card image = "https://imgs.search.brave.com/hUyQje8WBXh1e5rwx9luypnqm74pqwl0sqFMLMj_858/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2Fp/cmJuYi9haXJibmIt/dGlsZS5zdmc" company="Airbnb" job="Junior UI/UX Designer" button_1="Contract" button_2="Remote" salary="$100/hr" city="Delhi, India"/>
      <Card image = "https://imgs.search.brave.com/AND7k6Q_2ntdcv0WmIu0Wv5l9ge9e00IqabCkPKj2fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni81OTY5LzU5Njkw/NDcucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs" company="Apple" job="Graphic Designer" button_1="Full-Time" button_2="Flexible Schedule" salary="$85-120k" city="Kerala, India"/>
    </div>
  )
}

export default App
