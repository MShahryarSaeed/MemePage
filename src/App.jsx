import React, { useEffect, useState } from "react";
// import { BsEmojiGrin } from "react-icons/bs";

const memes = {

  welcomeMeme: "/assets/Salam.mp4", // Initial video
  incorrectName: "/assets/whatsThatBrother.mp4",
  correctName: "/assets/CorrectName.mp4",
  emptyEmail: "/assets/Batao Batao Na _ Meme Template _ Altaf Hussain.mp4",
  correctEmail: "/assets/correctEmail.mp4",
  incorrectEmail: "/assets/Such Bolo _ Altaf Hussain _ Meme Template.mp4",
  incorrectPassword: '/assets/whatsThatBrother.mp4',
  correctPassword: "/assets/JobHolder.mp4",

  // User Types
  Hnyrr: "/assets/Bachpan Se Chutiya Kate Ja Ra Hai - Abhishek Upmanyu Meme Template.mp4",
  NiBhaii: "/assets/Such Bolo _ Altaf Hussain _ Meme Template.mp4",
  NiBataSakta: "/assets/ApWoBaatKuPochtyhen.mp4",

  // Material Status
  single: "/assets/Confirm Jannati Ha _ Meme Template.mp4",
  committed: "/assets/committed.mp4",
  NibbaNibbi: "/assets/NibbaNibbi.mp4",
  Broken: "/assets/Imrankhan.mp4",
};

const SignupPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userType, setUserType] = useState(null);

  const [relationshipStatus, setRelationshipStatus] = useState(null);

  const [currentMeme, setCurrentMeme] = useState('');

  const[message,setMessage]=useState("")

  const [mute, setMute] = useState(true);


  useEffect(() => {
    if(currentMeme === "") {
      setCurrentMeme(memes.welcomeMeme);  
      setTimeout(()=> setMute(false),5000);
      
    }
  }, [currentMeme])

  


  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
    const regex = /^[a-zA-Z ]+$/;
    if (name === "") {
      setCurrentMeme(memes.emptyEmail);
      setMessage("Apna  Naamhazoor likho");
    } else if (!regex.test(name)) {
      setCurrentMeme(memes.incorrectName);
      setMessage("Special characters na dall bhaee");
    } else {
      setCurrentMeme(memes.correctName);
      setMessage("Good Ho gya bhaee");
    }
  };

  const handleEmailChange = (event) => {

    const email = event.target.value;
    setEmail(email);

    if (email.trim() === "") {
      setCurrentMeme(memes.emptyEmail);
      setMessage("Email likh naw");

    } else if (validEmail(email)) {
       setMessage("Khara kamm ker gya ay")
      setCurrentMeme(memes.correctEmail);
    } else {
      setCurrentMeme(memes.incorrectEmail);
      setMessage("Galat Format Dalta hai")
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (password.length < 8) {
      setCurrentMeme(memes.incorrectPassword);
      setMessage("Password chota hai bhaee")
    } else {
      setCurrentMeme(memes.correctPassword);
      setMessage("Good Ho gya bhaee")
    }
  };

  const handleUserTypeChange = (event) => {
    setMessage('')

    setUserType(event.target.value);
    setCurrentMeme(memes[event.target.value]);


  };

  const handleRelationshipChange = (event) => {
    setMessage('')
    setRelationshipStatus(event.target.value);
    setCurrentMeme(memes[event.target.value]);
  };

  // Implement your form submission logic here (optional)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (name !== "" && email !== "" && password !== "") {
      
      console.log("Form submitted successfully!");
      setMessage("Aj k liye bss itna hi")
      setCurrentMeme(memes.correctName); // Assuming success meme on submit
    } else {
      setCurrentMeme(memes.emptyEmail); // Display empty field meme on submit if any field is empty
      setMessage("Sari  fields Fill ker")
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
              muted={mute}
              className=" w-full h-full "
              onError={() => setCurrentMeme(memes.welcomeMeme)}
              src={currentMeme}
              
            />
            
          </div>
        )}

        {message && <p className="text-red-500 text-center">{message}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
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
