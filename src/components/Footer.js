import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-block">
          <p className="footer-title">Footer Title</p>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div className="footer-block">
          <p className="footer-title">Footer Title</p>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div className="footer-block">
          <p className="footer-title">Resources</p>
          <ul>
            <li>
              <a href="https://pixabay.com/" target="_blank">
                Pixabay
              </a>
            </li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
