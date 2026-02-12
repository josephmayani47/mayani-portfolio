
 const Profile = () => {
  const profile=[{name:"JOSEPH MAYANI",
                 image:"pd.jpg",
                 title:"Software Engineer",
                 location:"Tanzania",
                 message:"Thank you for taking the time to explore my work. I hope this portfolio gives you a clear insight into who I am — not just as a developer, but as a problem solver and creator. Lets build something amazing together."}];
  
                
  return (
    <div className="profile" id="profile">
        
        <div className="profile-info">
             <p id="intro"><span>Hello!</span> I am,</p>
             <h1>{profile[0].name}</h1>
             <p id="title">{profile[0].title}</p>
             <p id="message">{profile[0].message}</p>
        </div>

        <img src={profile[0].image} alt="profile picture" id="image"/>
    </div>
  )
}
export default Profile;
