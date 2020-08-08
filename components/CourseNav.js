export const CourseNavigation = (school) =>{

    let list = school.courses;
    const listItems = list.map((item) =>  
        <a href=""><div className ='w-auto'>{item}</div></a>
    );

    return(
        <div className = "p-2">
            <h2 className = "mt-8 mb-4 border-t-4 border-black text-center">Courses</h2>
            <ul>{listItems}</ul>
        </div>
    )
} 

export default CourseNavigation