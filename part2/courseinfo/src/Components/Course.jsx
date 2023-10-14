import { Fragment } from "react";
import { Header,Content,Total } from "./index";

const Course = ({courses}) => {
    return (
      <div>
      {courses.map(course=> 
        <Fragment key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
      </Fragment>
      )}  
    </div>
  )
}

export default Course;