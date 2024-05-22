import React from 'react';

function Resume() {
  return (
    <div style={{ width: '800px', height: 'auto', display: 'flex', margin: '50px auto' }}>
      <div style={{ width: '280px', backgroundColor: 'rgb(245, 233, 238)' }}>
        <div style={{ width: '75%', height: '200px', backgroundColor: 'rgb(37, 230, 11)', margin: '0 auto' }}>
          <img src="img.png" alt="Profile" style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{ padding: '0 25px' }}>
          <div style={{ padding: '25px 0', borderBottom: '2px solid chocolate' }}>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold' }}>Contact</p>
              <hr style={{ border: 'none', height: '2px', backgroundColor: 'red' }} />
              <p>+123-456-7890</p>
              <p style={{ fontWeight: 'bold' }}>hello@reallygreatsite.com</p>
              <p style={{ fontWeight: 'bold' }}>123 Anywhere St., Any City</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold' }}>Language</p>
              <hr style={{ border: 'none', height: '2px', backgroundColor: 'red' }} />
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Telugu</li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold' }}>Technical Skills</p>
              <hr style={{ border: 'none', height: '2px', backgroundColor: 'red' }} />
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C Lang</li>
                <li>Adobe Premier Pro</li>
                <li>Adobe Photoshop</li>
                <li>PC Hardware</li>
                <li>MS Office</li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold' }}>Expertise</p>
              <hr style={{ border: 'none', height: '2px', backgroundColor: 'red' }} />
              <ul>
                <li>Smart Worker</li>
                <li>Creativity</li>
                <li>Time Management</li>
                <li>Interpersonal Skills</li>
                <li>Critical Thinking</li>
                <li>Leadership</li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold' }}>Certification</p>
              <hr style={{ border: 'none', height: '2px', backgroundColor: 'red' }} />
              <ul>
                <li>VLSI (Very Large Scale Integration)</li>
                <li>Digital Image Processing</li>
                <li>MS Office</li>
                <li>PC Hardware</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '520px', backgroundColor: 'aliceblue', padding: '25px', alignItems: 'center' }}>
        <div style={{ padding: '25px 0', borderBottom: '2px solid chocolate' }}>
          <div style={{ marginBottom: '20px' }}>
            <h1>GIREESH RAM SEPURI</h1>
            <h4>ELECTRONICS AND COMMUNICATION ENGINEER</h4>
          </div>
          <div style={{ marginBottom: '2px' }}>
            <h2>Education</h2>
            <hr style={{ border: 'none', height: '2px', backgroundColor: 'red' }} />
          </div>
          <ul>
            <li>
              <h3>2024<br />
                Guru Nanak Institutions Technical Campus, Ibrahimpatnam<br />
                Bachelor of Technology Electronics & Communication Engineering<br />
                70.0%</h3>
              <br />
              <h3>2020<br />
                Sri Gayatri Junior College, RK puram<br />
                Intermediate Education<br />
                MPC<br />
                82.7%</h3>
              <br />
              <h3>2018<br />
                Dilsukhnagar Public School, RK puram<br />
                Secondary School Certificate<br />
                97.0%</h3>
            </li>
            <li>
              <div style={{ marginBottom: '2px' }}>
                <h2 style={{ fontWeight: 'bold' }}>Projects</h2>
                <hr style={{ border: 'none', height: '1.5px', backgroundColor: 'brown' }} />
              </div>
              <h3>2020<br />
                STYLUS PEN<br />
                Science Fair Model Presentation - GNITC</h3>
              <div>
                <h3>Achievements</h3>
                <hr style={{ border: 'none', height: '1.5px', backgroundColor: 'brown' }} />
                <ul>
                  <li>STYLUS PEN<br />
                    Science Fair Model Presentation<br />
                    Guru Nanak Institution Technical Campus, Ibrahimpatnam<br />
                    2020
                  </li>
                </ul>
              </div>
              <div>
                <h3>Extra Curricular Activities</h3>
                <hr style={{ border: 'none', height: '1.5px', backgroundColor: 'brown' }} />
                <p>Worked as organizing member for our college annual fest “BRUMOUS FIESTA-2022” & “BRUMOUS FIESTA-2024”.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;