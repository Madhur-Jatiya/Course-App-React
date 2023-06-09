package Rest_API.services;

import java.util.List;

import Rest_API.entity.Course;

public interface CourseService {
	public List<Course> getCourses();

	public Course getCourse(int courseId);

	public Course addCourse(Course course);

	public Course updateCourse(Course course);

	public String deleteCourse(Course course);
}
