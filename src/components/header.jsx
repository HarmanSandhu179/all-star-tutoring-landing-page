export function Header() {
  return (
    <>
      <div className="main-header">
        <header className="top-header">
          <div className="logo">
            <img
              src="../images/logo-no-background.png"
              alt="All-Star Tutoring Logo"
              className="logo"
            />
          </div>

          <div className="header-links">
            <ul>
              <li>
                <a href="#">⭐ - About </a>
              </li>
              <li>
                <a href="prices.html">💰 - Prices </a>
              </li>
              <li>
                <a href="#">❓ - FAQ</a>
              </li>
            </ul>
          </div>
        </header>

        <div className="main-header-content">
          <div className="left-main-content">
            <h1>All-Star Tutoring</h1>
            <p>
              Welcome to All-Star Tutoring, where academic excellence meets
              personalized learning! We are a premier tutoring company committed
              to helping students unlock their full potential and achieve their
              educational goals. Our mission is to empower students, boost their
              confidence, and foster a love for learning in a supportive and
              engaging environment. Join us at All Star Tutoring and discover
              the path to success through personalized instruction and
              outstanding academic support.
            </p>

            <button>Sign up</button>
          </div>

          <div className="right-main-image">
            <img
              src="../images/cover.png"
              alt="kids studying"
              className="main-picture"
            />
          </div>
        </div>
      </div>
    </>
  );
}
