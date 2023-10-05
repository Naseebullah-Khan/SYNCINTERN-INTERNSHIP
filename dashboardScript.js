import {
  menuData,
  announcements,
  featured_courses,
  courses,
  upcomingCourses,
  featured_teachers,
  teachers,
  featured_students,
  students,
  featured_tests,
  tests,
  upcomingAssignments,
  recentlyCompletedAssignments,
} from "./dashboardData.js";

const nav = document.querySelector("#menu");
const announcement = document.querySelector("#announcement");
const featured_course = document.querySelector("#featured_course");
const course = document.querySelector("#course");
const upcomingCourse = document.querySelector("#upcomingCourse");
const featured_teacher = document.querySelector("#featured_teacher");
const teacher = document.querySelector("#teacher");
const featured_student = document.querySelector("#featured_student");
const student = document.querySelector("#student");
const featured_test = document.querySelector("#featured_test");
const test = document.querySelector("#test");
const upcomingAssignment = document.querySelector("#upcomingAssignment");
const recentlyCompletedAssignment = document.querySelector(
  "#recentlyCompletedAssignment"
);

const LoadNav = (menuData, tag) => {
  menuData.map((menuItem) => {
    const element = `<a href="${menuItem.url}">${menuItem.name}</a>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadAnnouncements = (announcements, tag) => {
  announcements.map((announcement1) => {
    const element = `<tr>
                <td>${announcement1.date}</td>
                <td>${announcement1.announcement}</td>
              </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadFeaturedCourses = (courses, tag) => {
  courses.map((course) => {
    const element = `<tr>
                <td>${course.courseCode}</td>
                <td>${course.courseName}</td>
                <td>${course.instructor}</td>
              </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadDashboardCourses = (courses, tag) => {
  courses.map((course) => {
    const element = `<tr>
              <td>${course.code}</td>
              <td>${course.name}</td>
              <td>${course.creditHours}</td>
            </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadDashboardUpcomingCourses = (courses, tag) => {
  courses.map((course) => {
    const element = `<tr>
              <td>${course.code}</td>
              <td>${course.name}</td>
              <td>${course.startDate}</td>
              <td>${course.endDate}</td>
              <td>${course.instructor}</td>
            </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadFeaturedTeachers = (teachers, tag) => {
  teachers.map((teacher) => {
    const element = `<tr>
                <td>${teacher.teacherName}</td>
                <td>${teacher.yearsOfExperience}</td>
                <td>${teacher.education}</td>
                <td>${teacher.awardsAndRecognition}</td>
              </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadDashboardTeachers = (teachers, tag) => {
  teachers.map((teacher) => {
    const element = `<tr>
            <td>${teacher.name}</td>
            <td>${teacher.institution}</td>
            <td>${teacher.areaOfExpertise}</td>
          </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadFeaturedStudents = (students, tag) => {
  students.map((student) => {
    const element = `<tr>
                <td>${student.studentName}</td>
                <td>${student.year}</td>
                <td>${student.major}</td>
                <td>${student.achievements}</td>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadDashboardStudents = (students, tag) => {
  students.map((student) => {
    const element = `<tr>
              <td>${student.name}</td>
              <td>${student.institution}</td>
              <td>${student.year}</td>
              <td>${student.researchInterests}</td>
            </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadFeaturedTests = (tests, tag) => {
  tests.map((test1) => {
    const element = `<tr>
                <td>${test1.test}</td>
                <td>
                  ${test1.description}</td>
                <td>${test1.link}</td>
              </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadDashboardTests = (tests, tag) => {
  tests.map((test) => {
    const element = `<tr>
                    <td>${test.testName}</td>
                    <td>${test.description}</td>
                    <td>${test.difficulty}</td>
                    <td>${test.topicsCovered}</td>
                  </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadUpcomingAssignments = (assignments, tag) => {
  assignments.map((assignment1) => {
    const element = `<tr>
              <td>${assignment1.course}</td>
              <td>${assignment1.assignment}</td>
              <td>${assignment1.dueDate}</td>
            </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadRecentlyCompletedAssignments = (assignments, tag) => {
  assignments.map((assignment1) => {
    const element = ` <tr>
              <td>${assignment1.course}</td>
              <td>${assignment1.assignment}</td>
              <td>${assignment1.dueDate}</td>
              <td>${assignment1.grade}</td>
            </tr>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

LoadNav(menuData, nav);
LoadAnnouncements(announcements, announcement);
LoadFeaturedCourses(featured_courses, featured_course);
LoadDashboardCourses(courses, course);
LoadDashboardUpcomingCourses(upcomingCourses, upcomingCourse);
LoadFeaturedTeachers(featured_teachers, featured_teacher);
LoadDashboardTeachers(teachers, teacher);
LoadFeaturedStudents(featured_students, featured_student);
LoadDashboardStudents(students, student);
LoadFeaturedTests(featured_tests, featured_test);
LoadDashboardTests(tests, test);
LoadUpcomingAssignments(upcomingAssignments, upcomingAssignment);
LoadRecentlyCompletedAssignments(
  recentlyCompletedAssignments,
  recentlyCompletedAssignment
);
window.addEventListener("scroll", reveal);
