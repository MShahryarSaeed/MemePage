import React, { useEffect, useState } from "react";
import { BsEmojiGrin } from "react-icons/bs";

const memes = {

  welcomeMeme: "../public/assets/Salam.mp4", // Initial video
  incorrectName: "/assets/whatsThatBrother.mp4",
  correctName: "../public/assets/CorrectName.mp4",
  emptyEmail: "../public/assets/Batao Batao Na _ Meme Template _ Altaf Hussain.mp4",
  correctEmail: "../public/assets/correctEmail.mp4",
  incorrectEmail: "../public/assets/Such Bolo _ Altaf Hussain _ Meme Template.mp4",
  incorrectPassword: '../public/assets/whatsThatBrother.mp4',
  correctPassword: "../public/assets/JobHolder.mp4",

  // User Types
  Hnyrr: "../public/assets/Confirm Jannati Ha _ Meme Template.mp4",
  NiBhaii: "../public/assets/Such Bolo _ Altaf Hussain _ Meme Template.mp4",
  NiBataSakta: "../public/assets/Aap Wo Baat Kyu Puchte Ho _ Attaullah Khan _ Meme Template.mp4",

  // Material Status
  single: "../public/assets/Confirm Jannati Ha _ Meme Template.mp4",
  committed: "../public/assets/committed.mp4",
  NibbaNibbi: "../public/assets/NibbaNibbi.mp4",
  Broken: "../public/assets/Imrankhan.mp4",
};

const SignupPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userType, setUserType] = useState(null);

  const [relationshipStatus, setRelationshipStatus] = useState(null);

  const [currentMeme, setCurrentMeme] = useState(memes.welcomeMeme);



  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
    const regex = /^[a-zA-Z ]+$/;
    if (name === "") {
      setCurrentMeme(memes.emptyEmail);
    } else if (!regex.test(name)) {
      setCurrentMeme(memes.incorrectName);
    } else {

      setCurrentMeme(memes.correctName);
    }
  };

  const handleEmailChange = (event) => {

    const email = event.target.value;
    setEmail(email);

    if (email.trim() === "") {
      setCurrentMeme(memes.emptyEmail);

    } else if (validEmail(email)) {

      setCurrentMeme(memes.correctEmail);
    } else {
      setCurrentMeme(memes.incorrectEmail);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (password.length < 8) {
      setCurrentMeme(memes.incorrectPassword);
    } else {
      setCurrentMeme(memes.correctPassword);
    }
  };

  const handleUserTypeChange = (event) => {

    setUserType(event.target.value);
    setCurrentMeme(memes[event.target.value]);


  };

  const handleRelationshipChange = (event) => {
    setRelationshipStatus(event.target.value);
    setCurrentMeme(memes[event.target.value]);
  };

  // Implement your form submission logic here (optional)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (name !== "" && email !== "" && password !== "") {
      // Make an API call or perform any other actions on successful form submission
      console.log("Form submitted successfully!");
      setCurrentMeme(memes.correctName); // Assuming success meme on submit
    } else {
      setCurrentMeme(memes.emptyEmail); // Display empty field meme on submit if any field is empty
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg p-8 rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4 flex gap-2 justify-center items-center italic">
          <span>  Fun SignUp</span>
          {/* <BsEmojiGrin className="text-2xl text-yellow-500"/> */}
        </h2>


        {/* Meme video */}
         {/* Meme video */}
        {currentMeme && (
          <div className="mx-auto   w-full sm:w-1/2">
            <video
              autoPlay
              className=" w-full h-full "
              onError={() => setCurrentMeme(memes.welcomeMeme)}
              src={currentMeme}
            />
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Name:</span>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email:</span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password:</span>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>
          {/* User Type */}
          <p className="text-gray-700">Ap ka b cutt gya k ni?</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Hnyrr"
                checked={userType === "Hnyrr"}
                onChange={handleUserTypeChange}
                className="w-4 h-4 mr-2 text-blue-500 rounded-full border-gray-300 focus:ring-0 focus:outline-none"
              />

              <span className="text-gray-700">Hn Bhaii</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="NiBhaii"
                checked={userType === "NiBhaii"}
                onChange={handleUserTypeChange}
                className="w-4 h-4 mr-2 text-blue-500 rounded-full border-gray-300 focus:ring-0 focus:outline-none"
              />
              <span className="text-gray-700">Ni Bhaii</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="NiBataSakta"
                checked={userType === "NiBataSakta"}
                onChange={handleUserTypeChange}
                className="w-4 h-4 mr-2 text-blue-500 rounded-full border-gray-300 focus:ring-0 focus:outline-none"
              />
              <span className="text-gray-700">Ni Bata Sakta</span>
            </label>
          </div>

          {/* RelationShip */}

          <p className="text-gray-700">RelationShip status?</p>

          <div className="flex gap-8 items-center ">

            <div className="flex flex-col items-start w-full">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="single"
                  checked={relationshipStatus === "single"}
                  onChange={handleRelationshipChange}
                  className="w-4 h-4 mr-2 text-blue-500 rounded-full border-gray-300 focus:ring-0 focus:outline-none"
                />
                <span className="text-gray-700">Single</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="committed"
                  checked={relationshipStatus === "committed"}
                  onChange={handleRelationshipChange}
                  className="w-4 h-4 mr-2 text-blue-500 rounded-full border-gray-300 focus:ring-0 focus:outline-none"
                />
                <span className="text-gray-700">Committed</span>
              </label>
            </div>

            <div className="flex flex-col items-start justify-center w-full">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="NibbaNibbi"
                  checked={relationshipStatus === "NibbaNibbi"}
                  onChange={handleRelationshipChange}
                  className="w-4 h-4 mr-2 text-blue-500 rounded-full border-gray-300 focus:ring-0 focus:outline-none"
                />
                <span className="text-gray-700">NibbaNibbi</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Broken"
                  checked={relationshipStatus === "Broken"}
                  onChange={handleRelationshipChange}
                  className="w-4 h-4 mr-2 text-blue-500 rounded-full border-gray-300 focus:ring-0 focus:outline-none"
                />
                <span className="text-gray-700">Broken</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

function validEmail(email) {
  // Implement basic email validation (replace with a more robust solution)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}