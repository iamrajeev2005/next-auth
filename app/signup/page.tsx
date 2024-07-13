import React from 'react'

const signup = () => {
  return (
    <div className="min-h-screen w-screen bg-blue-400 flex items-center justify-center">
      <div className="min-h-[70vh] w-[25vw] bg-white rounded-lg">
        <h1 className="text-center text-3xl mt-5">Signup</h1>
        <form action="">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="" id="" />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default signup