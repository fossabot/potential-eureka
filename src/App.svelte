<script>
  import Navigation from "./components/Navigation.svelte";
  import Home from "./components/Home.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";
</script>

<style>
  main {
    height: 300vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1024px) {
    main {
      height: 400vh;
    }
  }
</style>

<Navigation />
<main>
  <Home />
  <Projects />
  <Contact />
</main>
