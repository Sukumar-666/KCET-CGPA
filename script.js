function selectDept(dept) {
  if (dept === 'CSE') {
    location.href = 'semesters.html';
  } else {
    alert('COMING SOON');
  }
}

function comingSoon() {
  alert('COMING SOON');
}

function selectSemester(n) {
  location.href = 'semester' + n + '.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('gradesForm');
  const cgpaForm = document.getElementById('cgpaForm');

  const gradePoints = {
    "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "RA": 0
  };

  const credits = {
    // Semester 1
    "SH2101": 3, "MA2101": 4, "PH2101": 3, "GE2101": 3,
    "EM2101": 3, "CY2101": 3, "GE2102": 1, "MA2102": 1,
    "PH2102": 1, "EM2102": 1,
    // Semester 2
    "SH2151": 3, "MA2151": 4, "CS2151": 3, "GE2151": 3, "GE2152": 3, "PH2151": 3,
    "GE2153": 1, "CY2151": 1, "CS2152": 1, "GE2153_lab": 2,
    // Semester 3
    "MA2201": 4, "IT2201": 3, "CS2201": 3, "CS2202": 3, "CS2203": 3, "EC2201": 4,
    "Audit": 0, "CS2204": 1, "EC2202": 2,
    // Semester 4
    "MA2251": 4, "CS2251": 3, "CS2252": 3, "CS2253": 3, "AI2201": 3, "GE2201": 3,
    "GE2251": 1, "CS2254": 2, "CS2255": 2, "EM2252": 1,
    // Semester 5
    "CS2301": 3, "CS2302": 3, "CS2303": 3, "CS2304": 3,
    "PE1": 3, "PE2": 3, "CS2305": 2, "CS2306": 2, "CS2307": 2, "EM2301": 1,
    // Semester 6
    "CS2351": 3, "PE3": 3, "PE4": 3, "PE5": 3, "PE6": 3, "OE1": 3,
    "CS2352": 1, "EM2351": 1,
    // Semester 7
    "CS2401": 3, "GE2401": 2, "ME1": 3, "OE2": 3, "OE3": 3, "OE4": 3, "CS2402": 2,
    // Semester 8
    "CS2451": 10
  };

  // GPA Calculation
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let total = 0, totalCredits = 0;

      Array.from(form.elements).forEach(sel => {
        if (sel.name && credits[sel.name] && gradePoints[sel.value] != undefined) {
          total += gradePoints[sel.value] * credits[sel.name];
          totalCredits += credits[sel.name];
        }
      });

      if (totalCredits > 0) {
        const gpa = (total / totalCredits).toFixed(2);
        document.getElementById('result').innerText = "Your GPA: " + gpa;
      } else {
        alert("Please select all grades!");
      }
    });
  }

  // CGPA Calculation
  if (cgpaForm) {
    cgpaForm.addEventListener('submit', e => {
      e.preventDefault();
      let sum = 0, count = 0;

      Array.from(cgpaForm.elements).forEach(input => {
        if (input.name && input.value) {
          const gpa = parseFloat(input.value);
          if (gpa > 0 && gpa <= 10) {
            sum += gpa;
            count++;
          }
        }
      });

      if (count > 0) {
        const cgpa = (sum / count).toFixed(2);
        document.getElementById('cgpaResult').innerText = "Your CGPA: " + cgpa;
      } else {
        alert("Please enter at least one semester GPA!");
      }
    });
  }
});
