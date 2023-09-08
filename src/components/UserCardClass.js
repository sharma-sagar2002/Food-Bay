import React from "react";
class UserCardClass extends React.Component {
   constructor(props){
   
     super(props);

     this.state={
         userData:{
          name:"Sagar Sharma",
         },
         
     };
    
   }
  
  async  componentDidMount(){
      const data=await fetch("https://api.github.com/users/sharma-sagar2002");
      const json = await data.json();
     this.setState(
      {
        userData:json,
      }
     );
      
     
   }

  render() {

    return  (
        <div className="usercard">
        <img  alt="my photo"  src={this.state.userData.avatar_url}/>
        <h2>{this.state.userData.name}</h2>
        <h3>Software Engineer</h3>
        <h3>{this.props.location}</h3>
        <h3>{this.state.userData.html_url}</h3>
        </div>
      )
   }
};

export default UserCardClass;

