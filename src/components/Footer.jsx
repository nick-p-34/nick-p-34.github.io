import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nick Parke. All rights reserved.</p>
    </footer>
  );
}