* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #080b14;
  color: white;
}

header {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
  background: rgba(10, 14, 25, .95);
  border-bottom: 1px solid #20283a;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  color: #7c5cff;
}

nav {
  display: flex;
  gap: 30px;
}

nav a {
  color: #bbb;
  text-decoration: none;
}

nav a:hover {
  color: white;
}

button {
  border: 0;
  cursor: pointer;
  font-family: inherit;
}

.start-btn,
.main-btn {
  background: #7c5cff;
  color: white;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: bold;
}

.hero {
  min-height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background:
    radial-gradient(circle at top, #28205e, transparent 45%),
    #080b14;
}

.hero-content {
  max-width: 800px;
}

.badge {
  display: inline-block;
  background: #17152d;
  color: #a996ff;
  border: 1px solid #423878;
  padding: 8px 15px;
  border-radius: 30px;
  margin-bottom: 25px;
}

.hero h1 {
  font-size: clamp(42px, 7vw, 80px);
  line-height: 1.1;
  margin-bottom: 25px;
}

.hero h1 span {
  color: #8d75ff;
}

.hero p {
  color: #aaa;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 35px;
}

.main-btn {
  font-size: 18px;
  padding: 16px 30px;
}

.features {
  padding: 90px 7%;
  text-align: center;
}

.features h2,
.builder-section h2 {
  font-size: 38px;
  margin-bottom: 45px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature {
  background: #111625;
  border: 1px solid #222b40;
  border-radius: 18px;
  padding: 30px 20px;
}

.feature div {
  font-size: 40px;
  margin-bottom: 15px;
}

.feature h3 {
  margin-bottom: 10px;
}

.feature p {
  color: #999;
  line-height: 1.7;
}

.builder-section {
  padding: 80px 5%;
  background: #0c101c;
  text-align: center;
}

.builder {
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 220px 1fr 220px;
  gap: 15px;
  text-align: right;
}

.tools,
.settings {
  background: #111625;
  border: 1px solid #222b40;
  border-radius: 15px;
  padding: 18px;
}

.tools h3,
.settings h3 {
  margin-bottom: 20px;
}

.tools button {
  display: block;
  width: 100%;
  background: #1a2132;
  color: white;
  padding: 13px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: right;
}

.tools button:hover {
  background: #292f45;
}

main {
  background: #080b14;
  border: 1px solid #222b40;
  border-radius: 15px;
  overflow: hidden;
}

.canvas-header {
  height: 55px;
  background: #111625;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.canvas-header button {
  background: #7c5cff;
  color: white;
  padding: 8px 14px;
  border-radius: 7px;
}

.canvas {
  min-height: 500px;
  padding: 35px;
  background: #111827;
  color: white;
  transition: .3s;
}

.welcome {
  padding: 80px 20px;
  text-align: center;
  border: 2px dashed #38435c;
  border-radius: 15px;
}

.element {
  position: relative;
  margin: 12px 0;
  padding: 15px;
  border: 1px dashed transparent;
}

.element:hover {
  border-color: #7c5cff;
}

.element img {
  max-width: 100%;
  border-radius: 10px;
}

.site-button {
  background: #7c5cff;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
}

.box-element {
  min-height: 120px;
  border: 2px dashed #48536e;
  border-radius: 12px;
}

.settings label {
  display: block;
  margin: 20px 0 8px;
  color: #aaa;
}

.settings input {
  width: 100%;
}

footer {
  text-align: center;
  padding: 35px;
  color: #777;
}

@media (max-width: 900px) {

  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .builder {
    grid-template-columns: 1fr;
  }

  nav {
    display: none;
  }

}

@media (max-width: 500px) {

  .feature-grid {
    grid-template-columns: 1fr;
  }

  header {
    padding: 0 20px;
  }

  .start-btn {
    display: none;
  }

  .canvas {
    padding: 15px;
  }

  }
