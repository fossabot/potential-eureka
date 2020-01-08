<script>
  import { MenuIcon } from "svelte-feather-icons";
  let vis = false;
  let pos = 130;

  const resp = () => {
    if (vis) {
      vis = false;
      pos = 130;
    } else {
      vis = true;
      pos = 10;
    }
  };
</script>

<style>
  nav {
    position: fixed;
    width: 100vw;
    height: 10vh;
    background-color: #ffffff;
    top: 0;
    z-index: 500;
    box-shadow: 0px 10px 20px -20px rgb(0, 0, 0);
  }

  .center {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 80%;
    margin: auto;
    background-color: #ffffff;
    font-weight: 800;
  }

  .links {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 0.5rem;
    position: static;
    height: 100%;
    line-height: 10vh;
    letter-spacing: 0.1rem;
  }

  .wrap {
    height: 100%;
    line-height: 10vh;
  }

  .link {
    display: block;
    height: 100%;
    text-transform: uppercase;
  }

  .branding-wrapper {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 0.3rem;
    font-size: 1.5rem;
    position: relative;
    line-height: 10vh;
    position: relative;
  }

  @media screen and (max-width: 1024px) {
    .center {
      width: 100%;
      margin: 0;
    }

    .links {
      position: absolute;
      top: 10vh;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      padding: 3rem;
      background-color: #ffffff;
      height: 90vh;
      width: 100vw;
    }

    .branding-wrapper {
      margin-left: 2rem;
    }

    nav div.icon {
      display: block;
      margin-right: 1rem;
    }

    button {
      border: none;
      background-color: #ffffff;
      cursor: pointer;
      padding: 0.75rem 1.5rem 0.75rem 1.5rem;
      border-radius: 0.5rem;
    }

    button:hover {
      filter: brightness(75%);
    }
  }

  .icon {
    display: none;
    margin-top: 0.5rem;
  }
</style>

<nav class="topnav">
  <div class="center">
    <div class="branding-wrapper">Dishant Mishra</div>
    <div class="spacer" />
    <div class="wrap">
      <div class="links" style="right: -{pos}vw;">
        <div class="link">
          <a href="#home" on:click={() => resp()}>Home</a>
        </div>
        <div class="link">
          <a href="#projects" on:click={() => resp()}>Projects</a>
        </div>
        <div class="link">
          <a href="#contact" on:click={() => resp()}>Contact</a>
        </div>
      </div>
      <div class="icon">
        <button on:click|preventDefault={() => resp()}>
          <MenuIcon />
        </button>
      </div>
    </div>
  </div>
</nav>
