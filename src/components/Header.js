import Nav from "/src/components/Nav.js";
const Header=()=>{
    return  (
            <div className="flex justify-between bg-slate-200 shadow-xl " >
                 <img className="w-40 h-24 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHjlcu880uhLv2JQQ5Swi20AhpRpoD8eDuglJ8HMGtO9u50recB0Ny3DP9Tlqt6AtfwU&usqp=CAU"></img>
                 <Nav/>
            </div>
      )
  };

  export default Header;