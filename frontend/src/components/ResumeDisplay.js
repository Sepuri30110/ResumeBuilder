import React from 'react';
import "../style.css"

function ResumeDisplay() {
  return (
    <div className="container">
      <div className="box-left">
        <div className="profile">
          <img src="img.png" alt="Profile" />
        </div>
        <div className="content">
          <div className="resume-item">
            <div className="title">
              <p className="bold">Contact</p>
              <hr />
              <p className="regular">Phone:<br />123-456-7890</p>
              <p className="bold">Email<br />hello@reallygreatsite.com</p>
              <p className="bold">Address<br />123 Anywhere St., Any City</p>
            </div>
            <div className="title">
              <p className="bold">Education</p>
              <hr />
              <p className="regular">2008<br />Enter Your Degree<br />University/College</p>
              <p className="regular">2008<br />Enter Your Degree<br />University/College</p>
            </div>
            <div className="title">
              <p className="bold">Expertise</p>
              <hr />
              <ul>
                <li>UI/UX</li>
                <li>Visual Design</li>
                <li>Wireframes</li>
                <li>Storyboards</li>
                <li>User Flows</li>
                <li>Process Flows</li>
              </ul>
            </div>
            <div className="title">
              <p className="bold">Language</p>
              <hr />
              <ul>
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="box-right">
        <div className="resume-item">
          <div className="title">
            <h1>Mariana Anderson</h1>
            <h3>Marketing Manager</h3>
            <p className="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc.</p>
          </div>
          <div className="title">
            <h2>Experience</h2>
            <hr />
          </div>
          <ul>
            <li>
              <div>2019 - 2022</div>
              <div>Company Name | 123 Anywhere St., Any City</div>
              <h2>Job Position Here</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</p>
            </li>
            <li>
              <div>2017 - 2019</div>
              <div>Company Name | 123 Anywhere St., Any City</div>
              <h2>Job Position Here</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</p>
            </li>
            <li>
              <div>2015 - 2017</div>
              <div>Company Name | 123 Anywhere St., Any City</div>
              <h2>Job Position Here</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumeDisplay;
