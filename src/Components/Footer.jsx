const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <section className="Footer">
      <div className="footerIcons">
        <div style={{ display: "flex" }}>
          <a href="/">
            <i class="fa-solid fa-futbol Logo" style={{ color: "#ffffff" }}></i>
          </a>
          <h5
            style={{
              marginTop: "11px",
              marginLeft: "8px",
              fontFamily: "Rubik",
            }}
          >
            Team Taverns
          </h5>
        </div>

        <div className="socialLinks">
          <a href="https://github.com/RJAttwell">
            <i class="fa-brands fa-github" style={{ color: "#ffffff" }}></i>
          </a>

          <a href="https://www.linkedin.com/in/richardattwell/">
            <i class="fa-brands fa-linkedin" style={{ color: "#ffffff" }}></i>
          </a>

          <a href="">
            <i class="fa-regular fa-envelope" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
      </div>
      <hr style={{ width: "80%", margin: "0 auto" }} />
      <p className="footerText"> © {currentYear} - Richard Attwell</p>
    </section>
  );
}

export default Footer;
