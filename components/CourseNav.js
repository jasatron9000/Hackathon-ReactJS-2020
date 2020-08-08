export const CourseNavigation = () =>{
    let school = {
        "courses" : ["CompSci 720", "CompSci 720", "CompSci 720", "CompSci 720"]
    }

    let list = school.courses;
    const listItems = list.map((item) =>  
        <a href=""><div className ='w-auto text-center underline'>{item}</div></a>
    );

    return(
        <div className = "p-2">
            <h2 className = "mt-8 mb-4 border-t-4 border-black text-center text-3xl">Courses</h2>
            <ul>{listItems}</ul>
        </div>
    )
} 

export default CourseNavigation