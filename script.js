import { menuData, courses, future_of_e_learning, tests } from "./data.js";
const nav = document.querySelector("#nav");
const future_e_learning = document.querySelector("#future-e-learning");
const courses_test = document.querySelector("#course-tests");
const featured_courses_list = document.querySelector("#featured-courses-list");
const courses_list = document.querySelector("#courses-list");
const footer_menu = document.querySelector("#menu");

const LoadMenu = (menuItems, tag) => {
  menuItems.map((menuItem) => {
    if (
      menuItem.name === `<i id="signin" class="fa-solid fa-right-to-bracket">`
    ) {
      const element = `<a href="${menuItem.url}"
        >${menuItem.name}</i
      ></a>`;
      tag.insertAdjacentHTML("beforeend", element);
    } else {
      const element = `<a class="menuItem" href="${menuItem.url}">${menuItem.name}</a>`;
      tag.insertAdjacentHTML("beforeend", element);
    }
  });
};

const LoadTrends = (trends, tag) => {
  trends.map((trend) => {
    const element = `<li>
            <img
              src="${trend.src}"
              alt="${trend.title}"
            />
            <div class="course-info">
              <h3>${trend.title}</h3>
              <p>
                ${trend.info}
              </p>
            </div>
          </li>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadTests = (tests, tag) => {
  tests.map((test) => {
    const element = `<li class="reveal">
            <img
              src="${test.src}"
              alt="${test.title}"
            />
            <div class="course-info">
              <h3>${test.title}</h3>
              <p>
                ${test.info}
              </p>
              <input type="button" value="Start Test" />
            </div>
          </li>`;
    tag.insertAdjacentHTML("beforeend", element);
  });
};

const LoadCourses = (courses_list, featured, regular) => {
  courses_list.map((course) => {
    if (course.type === "featured") {
      const element = `<li class="reveal">
            <img
              src="${course.src}"
              alt="${course.name}"
            />
            <div class="course-info">
              <h3>${course.name}</h3>
              <p>
                ${course.info}
              </p>
              <input type="button" value="Enroll now" />
            </div>
          </li>`;
      featured.insertAdjacentHTML("beforeend", element);
    }
  });
  courses_list.map((course) => {
    const element = `<li class="reveal">
                <img
                  src="${course.src}"
                  alt="${course.name}"
                />
                <div class="course-info">
                  <h3>${course.name}</h3>
                  <p>
                    ${course.info}
                  </p>
                  <input type="button" value="Enroll now" />
                </div>
              </li>`;
    regular.insertAdjacentHTML("beforeend", element);
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

LoadMenu(menuData, nav);
LoadMenu(menuData, footer_menu);
LoadTrends(future_of_e_learning, future_e_learning);
LoadTests(tests, courses_test);
LoadCourses(courses, featured_courses_list, courses_list);
window.addEventListener("scroll", reveal);
