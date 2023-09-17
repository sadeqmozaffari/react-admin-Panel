import Course from "./course";

const CourseList = ({courses}) => {

  return (
    <>
      <div className="row">
        {courses.map((course) => (
          <div className="col-12 col-md-6 col-lg-3" key={course.id}>
            <Course {...course} />
          </div>
        ))}
      </div>
    </>
  );
};
export default CourseList;
