//1.create your own resume data in JSON format:
//2.For the above JSON, iterate over all for loops (for, for in,for of,for Each):

const resumeData = {
    "name": "Suganya",
    "contact": {
      "email": "suganya@email.com",
      "phone": "123-456-7890",
      "address": "Chennai , india"
    },
    "summary": "Experienced software engineer with a passion for creating efficient ",
    "education": [
      {
        "degree": "Chemical Engineering",
        "colleage": "SEC",
        "graduationYear": "2015"
      }
    ],
    "experience": [
      {
        "title": " Software Engineer",
        "company": "Guvi",
        "dates": "2023",
        "responsibilities": [
          "Learning Software Development in Guvi"
        ]
      }
    ],
    "skills": {
      "programmingLanguages": ["Python", "JavaScript", "Java"],
      "technologies": ["Django", "React", "SQL"],
      "softSkills": ["Problem-solving", "Team collaboration", "Communication"]
    }
  };
  
  // Parsing using for loop
  console.log("Using for loop:");
  for (let i = 0; i < resumeData.education.length; i++) {
      const education = resumeData.education[i];
      console.log(`Degree: ${education.degree}`);
      console.log(`School: ${education.school}`);
      console.log(`Graduation Year: ${education.graduationYear}`);
  }
  
  // Parsing using for...in loop
  console.log("\nUsing for...in loop:");
  for (let key in resumeData.contact) {
      console.log(`${key}: ${resumeData.contact[key]}`);
  }
  
  // Parsing using for...of loop
console.log("\nUsing for...of loop:");
for (const education of resumeData.education) {
    console.log(`Degree: ${education.degree}`);
    console.log(`School: ${education.school}`);
    console.log(`Graduation Year: ${education.graduationYear}`);
}
  
// Parsing skills using forEach
  console.log("\nUsing forEach for skills:");
  resumeData.skills.programmingLanguages.forEach(language => {
      console.log(`Programming Language: ${language}`);
  });
  
  resumeData.skills.technologies.forEach(tech => {
      console.log(`Technology: ${tech}`);
  });
  
  resumeData.skills.softSkills.forEach(skill => {
      console.log(`Soft Skill: ${skill}`);
  });
  
  