// Javascript object to hold multiple sections of one course

// Below is an "Object" despite being a Const the values inside can be manipulated
const aCourse = {
    name: "Dynamic Web Funadamentals",
    code: "WDD131",
    sections: [
        { sectionNum: 1, 
          roomNum: 'STC 231', 
          enrolled: 12, 
          days: 'TTh', 
          instructor: 'Sister Anderson'},
        { sectionNum: 2, 
          roomNum: 'STC 347',
          enrolled: 0,
          days: 'TTh',
          instructor: 'Brother Warner'}
    ],

    enrollStudent: function(sectionNum) {
        // sectionNum represents the section the user wants to add student to
        // find that section in our array, add a student to it
        
        this.sections.forEach(function(section) {
            if(section.sectionNum == sectionNum) {
                section.enrolled++;
                return;
            }
        });
        // Alternative
        // this.sections.find(section => section.sectionNum == sectionNum).enrolled++;

        renderSections(this.sections);
    }
}


function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

