<script>
  import { GithubIcon, ArchiveIcon, GlobeIcon } from "svelte-feather-icons";

  const projects = [
    {
      id: 0,
      name: "All The News",
      stack: ["PHP", "MongoDB"],
      description: `Designed and developed a website in PHP with a MongoDB 
      backend with over 1.4 million records. Implemented a custom Bulma template
      for the front-end and a custom optimized search feature.`,
      repository: "https://github.com/damishra/all-the-news",
      website: "archived"
    },
    {
      id: 1,
      name: "SIS Redesign",
      stack: ["PHP", "MariaDB", "Laravel", "NGINX", "Fedora"],
      description: `Worked in a team as the project manager and lead developer to 
      develop a new prototype for the student management system in the form of 
      a dynamic web app based on the existing student information system.`,
      repository: "https://github.com/damishra/SISReDesign",
      website: "archived"
    },
    {
      id: 2,
      name: "Project Dialogue",
      stack: ["Java", "JavaFX"],
      description: `An encrypted SMPT server/client system written in Java. The 
      server is multi-threaded to facilitate multiple clients networking at
      once. All the encryption is handled on the client side ensuring
      end-to-end encryption.`,
      repository: "https://github.com/damishra/smtpV2.0",
      website: ""
    },
    {
      id: 3,
      name: "Timekeeping API",
      stack: ["Node", "Express", "Mongoose", "MongoDB"],
      description: `Timekeeping REST API made with Node and Express connecting to 
      a remote Mongo database over a pre-built Mongoose bridge for the Server
      Programming final project.`,
      repository: "https://github.com/damishra/MishraDP3",
      website: "archived"
    }
  ];
</script>

<style>
  #projects {
    background: linear-gradient(45deg, #00c6ff, #0072ff);
    background-size: 400% 400%;
    animation: gradientBG 15s ease-in-out infinite;
  }

  .center {
    width: 90%;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: 4fr 4fr 4fr 4fr;
    column-gap: 2rem;
    color: #ffffff;
  }

  .project {
    height: 100%;
    row-gap: 1rem;
  }

  .project section {
    margin-top: 1rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 900;
  }

  .stack {
    display: inline-flex;
  }

  .stack-item {
    margin-right: 1rem;
    padding: 1rem 1.5rem;
    background-color: #000000;
    border-radius: 0.5rem;
    box-shadow: 1rem 1rem 2rem -2rem #000000;
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .links {
    display: inline-flex;
  }

  .links a {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 1024px) {
    .center {
      position: relative;
      margin-top: 5vh;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      margin-bottom: 10rem;
    }
  }
</style>

<section id="projects">
  <div class="center">
    {#each projects as project}
      <div class="project" id={project.id}>
        <section class="title">{project.name}</section>
        <section class="stack">
          {#each project.stack as stackItem}
            <div class="stack-item">{stackItem}</div>
          {/each}
        </section>
        <section class="description">{project.description}</section>
        <section class="links">
          <a class="github" href={project.repository} target="_blank">
            <GithubIcon />
          </a>
          {#if project.website === 'archived'}
            <a class="website archived" href="#projects" disabled>
              <ArchiveIcon />
            </a>
          {:else if project.website !== ''}
            <a class="website" href={project.website} target="_blank">
              <GlobeIcon />
            </a>
          {/if}
        </section>
      </div>
    {/each}
  </div>
</section>
