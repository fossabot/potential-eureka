<script>
  import { LinkedinIcon, GithubIcon } from "svelte-feather-icons";
</script>

<style>
  #home {
    background: linear-gradient(45deg, #fe8c00, #f83600);
    background-size: 400% 400%;
    animation: gradientBG 15s ease-in-out infinite;
    height: 100vh;
  }

  #home .hero {
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
  }

  .hero .header {
    font-size: 6rem;
    font-weight: 900;
    line-height: 1.5;
    color: #ffffff;
  }

  .hero .footer {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.5;
    color: #ffffff;
  }

  .contact-links {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: auto auto 1fr;
    column-gap: 1rem;
  }

  .contact-links a {
    box-shadow: 0.4rem 0.4rem 1rem -1rem #000000;
  }

  @media only screen and (max-width: 1024px) {
    #home {
      width: 100%;
    }

    #home .hero .header {
      font-size: 3rem;
      line-height: 1.2;
    }

    #home .hero .footer {
      font-size: 1.5rem;
      line-height: 1.2;
    }
  }
</style>

<section id="home">
  <div class="hero">
    <div class="header">Hey there! My name is Dishant.</div>
    <div class="footer">
      I am a software engineer majoring in Web and Mobile Computing at the
      Rochester Institute of Technology.
    </div>
    <div class="contact-links">
      <a href="https://www.linkedin.com/in/damishra" target="_blank">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/damishra" target="_blank">
        <GithubIcon />
      </a>
      <div />
    </div>
  </div>
</section>
