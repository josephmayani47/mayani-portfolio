import  {useEffect, useState} from "react"; 

 const Profile = () => {
  const profile=[{name:"JOSEPH MAYANI",
                 image:"profile.png",
                 title:"Software Engineer",
                 location:"Tanzania",
                 message:"Thank you for taking the time to explore my work. I hope this portfolio gives you a clear insight into who I am — not just as a developer, but as a problem solver and creator. Lets build something amazing together."}];
  
     
  const [showMessage, setShowMessage] = useState(false);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="profile" id="profile">
        
        <div className="profile-info">
             <p id="intro"><span>Hello!</span> I am,</p>
             <h1 id="name">{profile[0].name}</h1>
             <p id="title">{profile[0].title}</p>
              {showMessage && <p id="message">{profile[0].message}</p>}
        </div>

        <img src={profile[0].image} alt="profile picture" id="image"/>
    </div>
  )
}
export default Profile;
