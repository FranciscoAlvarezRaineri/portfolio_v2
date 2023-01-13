import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isRobot, setIsRobot] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    if (!isRobot) {
      return alert(
        "You are a robot! Don't be sending me no Emails, you rusty robot!"
      );
    }
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  }

  return (
    <form
      onSubmit={(e) => sendEmail(e)}
      disable={submitted}
      className="flex items-center flex-col leading-loose text-lg font-mono py-4"
    >
      <div className="text-center m-2">
        <label for="name">Name</label> <br></br>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="John Doe"
          className="w-96 h-12 shadow-md shadow-gray-400 rounded-xl"
        />
      </div>
      <div className="text-center m-2">
        <label for="email">Email</label>
        <br></br>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="JhonDoe@email.com"
          className="w-96 h-12 shadow-md shadow-gray-400 rounded-xl"
        />
      </div>
      <div className="text-center m-2">
        <label for="message">Message</label>
        <br></br>
        <textarea
          type="text"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Do you want to come work with us?"
          className="w-96 h-36 shadow-md shadow-gray-400 rounded-xl"
        ></textarea>
      </div>
      {/*       <div className="text-center m-2">
        <label for="robot" class="cursor-pointer">
          Are you a robot?
          <br></br>
          <div className="flex items-center justify-center">
            <span className="mr-3 text-md font-medium text-gray-800">Yes</span>
            <input
              id="robot"
              name="robot"
              type="checkbox"
              value=""
              className="sr-only peer"
            ></input>
            <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-md font-medium text-gray-800">No</span>
          </div>
        </label>
      </div> */}
      <button
        type="submit"
        className="w-32 h-12  border-gray-400 bg-gray-800 text-gray-200 rounded-3xl m-2 shadow-md shadow-gray-400 hover:text-gray-800 hover:bg-gray-200 "
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
