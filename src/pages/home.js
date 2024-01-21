const Home = () => {
    return (
        <>        
        <div class="container row align-items-center">
<div class="col-1">
<img src={require('../assets/logo.avif')} class="img-fluid" />
</div>
<nav class="navbar navbar-expand-md col-9">          
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="collapsibleNavbar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./contact">Contact</a>
</li>
<li class="nav-item">
<a class="nav-link" href="">About Me</a>
</li>
</ul>
</div>
</nav>
<div class="col-2">
<input placeholder="Search"/>
</div>
</div>

<div id="demo" class="carousel slide carousel-container" data-bs-ride="carousel">      
<div class="carousel-inner">
<div class="carousel-item active">
<img src={require('../assets/c-1.jpg')} class="d-block w-100" style={{height: '90vh'}}/>
</div>
<div class="carousel-item">
<img src={require('../assets/c-2.jpg')} class="d-block w-100" style={{height: '90vh'}}/>
</div>
<div class="carousel-item">
<img src={require('../assets/c-3.jpg')} class="d-block w-100" style={{height: '90vh'}}/>
</div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
<span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
<span class="carousel-control-next-icon"></span>
</button>
</div>

<div class="container jumbotron bg-danger p-5">
<h1 class="text-white">Music: My love! My life! My soul!</h1>
<p class="text-white">Each note plays a role in creating a masterpiece of melody in the soundtrack of life.</p>
<p class="text-white">Music is like a symphony of emotions.</p>
</div>

<div class="row mt-5">
<div class="col-lg-4">
<div class="card">
<img class="card-img-top m-auto" src={require("../assets/card-1.jpg")} style={{width:'50%'}} />
<div class="card-body">
<h4 class="card-title">Guitar</h4>
<p class="card-text">Magical on the field, Lionel Messi dances through defenses, leaving a trail of brilliance in his wake</p>
<a href="#" class="btn btn-primary">See more</a>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="card">
<img class="card-img-top m-auto" src={require("../assets/card-2.jpg")} style={{width:'50%'}} />
<div class="card-body">
<h4 class="card-title">Piano</h4>
<p class="card-text">A force of nature on the pitch, Cristiano Ronaldo combines power and finesse to dominate football with unmatched skill and determination.</p>
<a href="#" class="btn btn-primary">See more</a>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="card">
<img class="card-img-top m-auto" src={require("../assets/card-3.jpg")} style={{width:'50%'}} />
<div class="card-body">
<h4 class="card-title">Trumphet</h4>
<p class="card-text">Neymar, the samba sensation, mesmerizes with his dazzling footwork, bringing flair, creativity, and joy to the beautiful game</p>
<a href="#" class="btn btn-primary">See more</a>
</div>
</div>
</div>
</div>

<div class="row mt-5">
<div class="col-lg-6 mt-4">
<div class="d-flex align-items-center mb-1" style={{gap:'20px'}}>
<span class="language text-primary" style={{padding:'2px'}}>Guitar</span>
<div class="progress-bar bg-primary" style={{width:'80%'}}>80%</div>
</div>
<div class="d-flex align-items-center mb-1" style={{gap:'35px'}}>
<span class="language text-primary" style={{padding:'2px'}}>Piano</span>
<div class="progress-bar bg-danger" style={{width:'50%'}}>50%</div>
</div>
<div class="d-flex align-items-center mb-1" style={{gap:'28px'}}>
<span class="language text-primary" style={{padding:'2px'}}>Trumphet</span>
<div class="progress-bar bg-success" style={{width:'10%'}}>10%</div>
</div>
</div>
<div class="col-lg-6 mt-4">
<div class="row">
<div class="col-6">
  <h3>Guitar</h3>
  <span class="badge rounded-pill bg-primary">10</span>
</div>
<div class="col-6">
  <h3>Piano</h3>
  <span class="badge rounded-pill bg-primary">100</span>
</div>
</div>
<div class="row">
<div class="col-6">
  <h3>Flute</h3>
  <span class="badge rounded-pill bg-primary">50</span>
</div>
<div class="col-6">
  <h3>Trumphet</h3>
  <span class="badge rounded-pill bg-primary">5</span>
</div>
</div>
</div>
</div>

<div class="row mt-5">
<div class="accordion col-5" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Accordion Item #1
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
Music is the magical potion that turns the ordinary moments of life into extraordinary memories.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Accordion Item #2
</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body">
Like a timeless love story, music serenades the soul with melodies that echo through the corridors of time.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Accordion Item #3
</button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body">
The symphony of notes in music is like a cosmic dance, where each sound is a celestial partner in the grand choreography of emotions.
</div>
</div>
</div>
</div>
<div class="col-2"></div>
<div class="accordion col-5" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Accordion Item #1
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
If life is a journey, then music is the soundtrack that accompanies us through every twist and turn, making the adventure more enchanting.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Accordion Item #2
</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body">
n the grand tapestry of existence, music is the vibrant thread that weaves together the fabric of diverse emotions and experiences.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Accordion Item #3
</button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body">
Just as the stars illuminate the night sky, music illuminates the darkest corners of our hearts, filling them with the warmth of lyrical constellations.
</div>
</div>
</div>
</div>
</div>

<footer class="container-fluid row text-center align-items-center py-5" style={{backgroundColor: '#3f3f3f'}}>
<div class="col-lg-4">
<p style={{color: 'white'}}>Contact me at: sparliamankhan99@gmail.com</p>
</div>
<div class="col-lg-6">
<nav class="navbar navbar-expand-sm justify-content-center col-7">
<ul class="navbar-nav">
  <li class="navbar-item px-2">
      <a class="navbar-link" href="#home">Home</a>
  </li>
  <li class="navbar-item px-2">
      <a class="navbar-link" href="./contact">Contact</a>
  </li>
  <li class="navbar-item px-2">
      <a class="navbar-link" href="#services">My Music Blog</a>
  </li>
  <li class="navbar-item px-2">
      <a class="navbar-link" href="#about">About Me</a>
  </li>
</ul>
</nav>
</div>
  <div class="col-lg-2 d-flex justify-content-sm-between align-items-center">
  <img class="logo" src={require("../assets/linked_icon.gif")}/>
  <img class="logo" src={require("../assets/google_icon.gif")}/>
  <img class="logo" src={require("../assets/twitter_icon.gif")}/>
  <img class="logo" src={require("../assets/fb_icon.gif")}/>
</div>
</footer>
    </>
    )
}

export default Home