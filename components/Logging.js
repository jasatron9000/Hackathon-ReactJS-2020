export const Logging = (user) =>{
    return(
        <div className = "text-center mt-8">
        {user ? (
            <a href='/api/logout'>
                Logout
            </a>
            ) : (
              <a href='/api/login'>
                Login
              </a>
            )
                }
        </div>
    )
}
export default Logging