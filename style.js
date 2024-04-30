
function yes() {
    document.getElementById('navline').innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid ps-5 opacity-50">
      <a class="navbar-brand border border-dark border-3 rounded-circle" href="index.html">
        <img src="aave_7829485.png" width="50px" height="50px">
      </a>
      <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
          <ul class="navbar-nav pe-3" style="font-size: 32px; font-weight: 600;">
          <li class="nav-item pe-4">
            <a class="nav-link" href="about.html">about</a>
          </li>
          <li class="nav-item pe-4">
            <a class="nav-link" href="contact.html">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
  document.getElementById('footer').innerHTML=`
  <div class="container-fluid" style="position: fixed; bottom: 20px;" >
  <div class="d-flex justify-content-between">
      <div class="git">
          <a href="https://github.com/Anmol992894">
              <img class="git-img ms-5" src="github_919847.png" width="50px" height="50px">
          </a>
      </div>
      <div class="linkedin">
          <a  href="https://www.linkedin.com/in/anmol-verma-b49a1a239">
              <img class="link-img me-5" src="linkedin_1384014.png" width="50px" height="50px">
          </a>
      </div>
  </div>
  </div>`
}