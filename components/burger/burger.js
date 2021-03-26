import React from 'react';

const Burger = ({ open, setOpen }) => {
  function clickHandler(e){
    e.preventDefault()
    setOpen(!open)
  }
  console.log(`open:`, open)
  return (
    <div>
      <button onClick={clickHandler} className={open ? `open` : `closed`}>
        <span />
        <span />
        <span />
      </button>
      <style jsx>{`
        button {
          position: absolute;
          top: 3em;
          right: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }

        button:focus {
          outline: none;
        }
          
        span {
          width: 2rem;
          height: 0.25rem;
          background: var(--white);
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }

        .open span {
          background: var(--purple);
        }

        .open span:first-child {
          transform: rotate(45deg);
        }

        .open span:nth-child(2) {
          opacity: 0;
        }

        .open span:nth-child(3) {
          transform: rotate(-45deg);
        }
      `}</style>
    </div>
  )
}

export default Burger;
