<template>
  <section class="profile">
    <header class="header">
      <div class="details">
        <img
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a"
          alt="John Doe"
          class="profile-pic"
        />
        <h1 class="heading">Claire Doe</h1>
        <div class="location">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"
            ></path>
          </svg>
          <p>Kochi, India</p>
        </div>
        <div class="stats">
          <div class="col-4">
            <h4>20</h4>
            <p>Book Post</p>
          </div>
          <div class="col-4">
            <h4>10</h4>
            <p>Communities</p>
          </div>
          <div class="col-4">
            <h4>100</h4>
            <p>Discussions</p>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");

body {
  margin: 0;
  font-family: "Lato", sans-serif;
}

.header {
  min-height: 60vh;
  background: #009fff;
  background: linear-gradient(to right, #ec2f4b, #009fff);
  color: white;
  clip-path: ellipse(100vw 60vh at 50% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.details {
  text-align: center;
}

.profile-pic {
  height: 12rem;
  width: 12rem;
  object-fit: center;
  border-radius: 50%;
  border: 2px solid #fff;
}

.location p {
  display: inline-block;
}

.location svg {
  vertical-align: middle;
}

.stats {
  display: flex;
}

.stats .col-4 {
  width: 10rem;
  text-align: center;
}

.heading {
  font-weight: 400;
  font-size: 1.3rem;
  margin: 1rem 0;
}
</style>
