export const CourseNavigation = (school) =>{

    let list = school.courses;
    const listItems = list.map((items) =>  
        <a href=""><li>{items}</li></a>
    );

    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    )
} 

export default CourseNavigation