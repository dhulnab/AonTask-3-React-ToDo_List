import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  return <>
    <header>
      <div class="container">
        <div class="content">
          <h1 class="logo">To<span>D</span>o</h1>
          <div class="links">
            <ul>
              <li><a href="./index.html" class="active">Home</a></li>
              <li><a href="./about.html">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="title">
        <h1>Simple ToDo App</h1>
        <p>This todo app for test design.</p>
        <div class="form">
          <input
            class="input"
            type="text"
            name="text"
            id=""
            placeholder="Write your text here"
          />
          <input class="button container" type="submit" value="+ Add New" />
        </div>
      </div>
      <div className="list">
        <div className='item'>
          hello
          <svg width="33" height="33" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#FF0000" /><line x1="9.70711" y1="9.00002" x2="23" y2="22.2929" stroke="#FF0000" stroke-linecap="round" /><line x1="9" y1="22.2929" x2="22.2929" y2="9" stroke="#FF0000" stroke-linecap="round" /></svg>
        </div>
        <div className='item'>
          hello
          <svg width="33" height="33" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#FF0000" /><line x1="9.70711" y1="9.00002" x2="23" y2="22.2929" stroke="#FF0000" stroke-linecap="round" /><line x1="9" y1="22.2929" x2="22.2929" y2="9" stroke="#FF0000" stroke-linecap="round" /></svg>
        </div>

      </div>
      <div class="finall-div">Total List: <span id="totalSpan"> 2</span></div>
    </main>
  </>;
}

export default App;
