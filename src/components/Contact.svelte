<script>
  import { SendIcon } from "svelte-feather-icons";
</script>

<style>
  #contact {
    background: linear-gradient(45deg, #000000, #333333);
    background-size: 400% 400%;
    animation: gradientBG 15s ease-in-out infinite;
    height: 100vh;
  }

  #contact .center {
    width: 80%;
    margin: auto;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
  }

  .fields {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;
    row-gap: 2rem;
    align-content: center;
  }

  .fields section {
    display: grid;
    grid-template-columns: auto;
    column-gap: 1rem;
    row-gap: 2rem;
  }

  h1 {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 900;
  }

  .input-wrapper {
    margin-top: 2rem;
    height: 65px;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .input-wrapper input,
  .input-wrapper textarea {
    height: 100%;
    resize: none;
    width: 100%;
    border: none;
    background: transparent;
    padding-top: 15px;
    padding-bottom: 0;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    outline: none;
  }

  .input-wrapper textarea {
    height: 100px;
    outline: none;
    padding-top: 50px;
  }

  #area-wrapper {
    height: 150px;
  }

  #area-label {
    height: 150px;
  }

  .input-wrapper label {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 65px;
    color: #ffffff;
    font-size: 0.8rem;
    pointer-events: none;
    border-bottom: 2px solid #ffffff;
    font-weight: 600;
  }

  .input-wrapper label::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #5fa8d3;
    left: 0px;
    bottom: -1px;
    transform: translateX(-100%);
    transition: all 300ms ease-in-out;
  }

  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 300ms ease-in-out;
  }

  .input-wrapper input:focus + .label-name .content-name,
  .input-wrapper input:valid + .label-name .content-name {
    transform: translateY(-200%);
    color: #5fa8d3;
  }

  .input-wrapper textarea:focus + .label-name .content-name,
  .input-wrapper textarea:valid + .label-name .content-name {
    transform: translateY(-700%);
    color: #5fa8d3;
  }

  .input-wrapper input:focus + .label-name::after,
  .input-wrapper input:valid + .label-name::after,
  .input-wrapper textarea:focus + .label-name::after,
  .input-wrapper textarea:valid + .label-name::after {
    transform: translateX(0%);
  }

  #top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    padding: 0rem 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 900;
    border: none;
    border-radius: 0.5rem;
    background: linear-gradient(45deg, #00c6ff, #0072ff);
    background-size: 400% 400%;
    animation: gradientBG 15s ease-in-out infinite;
    color: #ffffff;
    letter-spacing: 0.1rem;
    box-shadow: 1rem 1rem 2rem -2rem #000000;
    transition: all 300ms ease-in-out;
    height: 7vh;
  }

  button[type="submit"]:hover {
    filter: brightness(70%);
    cursor: pointer;
    box-shadow: none;
  }

  button span {
    line-height: 7vh;
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: 1024px) {
    #contact .center {
      margin-top: 10vh;
      background: transparent;
      display: block;
      position: static;
      box-shadow: none;
      width: 100%;
      transform: translate(0, 0);
      overflow-x: hidden;
    }

    #contact {
      overflow-x: hidden;
    }

    form {
      width: 90%;
      height: 100%;
      margin: 0 auto;
    }

    .fields {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
    }

    #top {
      grid-template-columns: auto;
      row-gap: 1rem;
    }
  }
</style>

<section id="contact">
  <div class="center">
    <form method="post">
      <h1>Contact Me!</h1>
      <section class="fields">
        <section id="top">
          <div class="input-wrapper">
            <input type="text" id="name" name="name" required />
            <label for="name" class="label-name">
              <span class="content-name">Name</span>
            </label>
          </div>
          <div class="input-wrapper">
            <input type="email" id="email" name="email" required />
            <label for="email" class="label-name">
              <span class="content-name">Email</span>
            </label>
          </div>
        </section>
        <section class="input-wrapper" id="area-wrapper">
          <textarea name="message" id="message" required cols="1" rows="1" />
          <label for="message" class="label-name" id="area-label">
            <span class="content-name">Message</span>
          </label>
        </section>
      </section>
      <button type="submit">
        <SendIcon />
        <span>Send it away!</span>
      </button>
    </form>
  </div>
</section>
