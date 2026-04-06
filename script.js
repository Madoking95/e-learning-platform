const courses = [
  { name: "JavaScript Basics", progress: 0 },
  { name: "HTML & CSS", progress: 0 },
  { name: "Python Beginner", progress: 0 }
];

function displayCourses(data) {
  let container = document.getElementById("courseList");
  container.innerHTML = "";

  data.forEach(course => {
    container.innerHTML += `
      <div class="course">
        <h3>${course.name}</h3>
        <p>Progress: ${course.progress}%</p>
        <button onclick="startCourse('${course.name}')">Start</button>
      </div>
    `;
  });
}

displayCourses(courses);

function startCourse(name) {
  alert("Starting " + name);
}

document.getElementById("search").addEventListener("input", function() {
  let value = this.value.toLowerCase();
  let filtered = courses.filter(c =>
    c.name.toLowerCase().includes(value)
  );
  displayCourses(filtered);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
