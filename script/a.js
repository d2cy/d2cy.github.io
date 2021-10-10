
function onLoad(){
    getTime();

}

const getTime = () => {
    setInterval(() => {
        let date = new Date().toString().split(" ");
        let str = "";
        for(let i=0; i<date.length; i++)
            if(i!=5)
                str += date[i] + " ";
                document.querySelector(".time-container #time").innerHTML = str;
    }, 950);
}

function getAbout()
{

    document.getElementById("cc").innerHTML = ` <section class="about" id="about">
    <div class="max-width">
        <h2 class="title">About me</h2>
        <div class="about-content">
            <div class="column left">
                <img src="./images/d.jpg" alt="bg">
            </div>
            <div class="column right" id="abtme">
                <div class="text">I'm Devansh </div>
                <p> I am Security Researcher and Bug Bounty Hunter.I am pursuing my Master's at International Institute of Information and Technology(Hyderabad),in the field of Computer Science and Information Security. I have completed my B.Tech from Bhilai Institute of Technology, Durg. I spend my time in Bug Bounty and solve CTF challenges to sharpen my skills.
</p>
                <a href="https://drive.google.com/file/d/1iqCYKXXFFGpogRqww9p0r6NmrszRvpyn/view?usp=sharing">Download CV</a>
                <a href="#" onClick="getHOF()">Achievements</a>
            </div>
        </div>
    </div>
</section> `

}
function getHOF()
{
    document.getElementById("abtme").innerHTML =   ` 
    <h1>Achievements</h1><br>
    <p> I have reported following security vulnerabilities in websites -</p><br><br>
    <table style="width:100%">
    <tbody>
    <tr>
    <th >Type of Vulnerability</th>
    <th>Website</th>
    </tr>
    <tr>
    <td rowspan="2" class="or_">Open Redirection</td>
    <td class="or_">www.kayak.com</td>
    </tr>
    <tr>
    <td class="or_">www.zolostays.com</td>
    </tr>
    <tr>
    <td>Stored XSS</td>
    <td>www.kayak.com</td>
    </tr>
    <tr >
    <td>Reflected XSS</td>
    <td >www.zolostays.com</td>
    </tr>
    <tr >
    <td >Information Disclosure</td>
    <td >TamTam Chat App ( ok.ru)</td>
    </tr>
    </tbody>
    </table>`
}
function getHome()
{

    document.getElementById("cc").innerHTML = ` <section class="home" id="home">
    <div class="max-width">
        <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Devansh Doshi</div>
            <div class="text-3">And I'm a <span>Security Researcher</span> </div>
            <a href="https://www.tryhackme.com/p/d2cy" target="_blank"><span class="iconify" data-icon="simple-icons:tryhackme" style="color: black;" data-width="24" data-height="24"> </span></a>
            <a href="https://app.hackthebox.eu/users/699464" target="_blank"><span class="iconify" data-icon="simple-icons:hackthebox" style="color: yellowgreen;" data-width="24" data-height="24"></span> </span></a>
            <a href="https://hackerone.com/devansh_doshi" target="_blank"><span class="iconify" data-icon="cib:hackerone" style="color: black;" data-width="24" data-height="24"></span> </a>
            <a href="https://www.linkedin.com/in/devanshdoshi4100/"  target="_blank"><span class="iconify" data-icon="entypo-social:linkedin-with-circle" style="color: blue;" data-width="24" data-height="24"></span></a>
        </div>
    </div>
</section>`


}

function getSkills()
{
    document.getElementById("cc").innerHTML = `<section class="skills" id="skills">
    <div class="max-width">
        <h2 class="title">My Skills</h2>
        
        <div class="skills-content">
                <div class="text">
                        <h3>Python</h3>
                        <div class="container">
                            <div class="py">80%</div>
                        </div>
                        <br>
                        <h3>Web Penetration Testing</h3>
                        <div class="container">
                            <div class="wpt">80%</div>
                        </div>
                        <br>
                        <h3>Reverse Engineering</h3>
                        <div class="container">
                            <div class="re">70%</div>
                        </div>
                        <br>
                        <h3>Malware Analysis</h3>
                        <div class="container">
                            <div class="ma">60%</div>
                        </div>
                        <br>
                        <h3>Cryptography</h3>
                        <div class="container">
                            <div class="c">60%</div>
                        </div>
                        <br>
                        <h3>Binary Exploitation</h3>
                        <div class="container">
                            <div class="be">55%</div>
                        </div>
                        <br>
                        <br>
                        <br>
                </div>
        </div>
    </div> 
</section>`
}


function getEdu(){
    document.getElementById("cc").innerHTML = ` 
    
   
    <section class="education" id="education">
    <div class="max-width">
        <h2 class="title">Education</h2>
    <div class="container">
    <main class="grid">
        <article>
            <img src="https://www.iiit.ac.in/img/iiit-new.png" width="200" height="200" alt="IIIT">
            <div class="text">
                 <h3>IIIT-H</h3>
                 <p>I am currently persuing my MTech from IIIT Hyderabad</p>
                 <a href="https://www.iiit.ac.in"> Read More</a>
             </div>
        </article>
        <article>
         <img src="./images/bit.jpg" width="200" height="200" alt="BIT">
         <div class="text">
              <h3>BIT ,DURG</h3>
              <p>I have completed my BTech from BIT Durg in year 2021</p>
              <a href="https://www.bitdurg.ac.in"> Read More</a>
          </div>
     </article>
     <article>
         <img src="./images/kps.png" width="200" height="200"  alt="IIIT">
         <div class="text">
              <h3>KPS ,Raipur</h3>
              <p>I have completed my 10th and 12th from KPS,Raipur</p>
              <a href="https://www.kpsraipur.com"> Read More</a>
          </div>
     </article>
    </main>
</div>
</div>
</section>
`

}


function getContact()
{

    document.getElementById("cc").innerHTML =   ` <section class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">Contact me</h2>
        <div class="contact-content">
            <div class="column left">
                <div class="text">Get in Touch</div>
                <div class="icons">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <div class="info">
                            <div class="head">Name</div>
                            <div class="sub-title">Devansh Doshi</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="info">
                            <div class="head">Address</div>
                            <div class="sub-title">Raipur, Chhattisgarh, INDIA</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">devanshdoshi24@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
}