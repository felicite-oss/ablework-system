const bcrypt = require('bcrypt');
const db = require('../db/db');

exports.registerApplicant = async (req, res) => {

  const {
    name,
    username,
    email,
    password,
    disability_type,
    skills,
    education,
    preferred_job
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const userSQL = `
    INSERT INTO users (name, username, email, password, role)
    VALUES (?, ?, ?, ?, 'applicant')
  `;

  db.query(userSQL, [name, username, email, hashedPassword], (err, result) => {

    if (err) return res.json({ message: "User registration failed" });

    const user_id = result.insertId;

    const applicantSQL = `
      INSERT INTO applicants 
      (user_id, disability_type, skills, education, preferred_job)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
      applicantSQL,
      [user_id, disability_type, skills, education, preferred_job],
      (err2) => {
        if (err2) {
          console.log('Applicant insert error:', err2);
          return res.json({ message: "Applicant profile failed" });
        }

        res.json({ message: "Registration successful" });

      }
    );

  });

};