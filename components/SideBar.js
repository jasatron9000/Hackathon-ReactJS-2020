export const SideBar = ({user}) =>{
    return(
        <div className = "w-1/5 bg-gray-400 absolute left-0 items-center rounded-md p-8 m-2" >
            <div>
                <img src = {user.picture} alt="User Picture"/>
            </div>
            <div>
                <h2 className ="text-3xl font-extrabold text-center">{user.name}</h2>
                <h1 className ="text-2xl font-extrabold text-center">{user.nickname}</h1>
            </div>
            <div>
                <CourseNavigation  courses = {school.courses}/>
            </div>
            <div>
                <Logging user={user}/>
            </div>
        </div>
    )
}

export default SideBar;