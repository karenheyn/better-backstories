<template>
  <div class="bio-wrapper">
    <div class="for" v-for="person in people" v-bind:key="person.name">
      <h1>{{ person.name }} Backstory</h1>
      <div class="bio-flex-container">
        <div class="bio-container-right">
          <div class="bio-inner-container-right">
            <p>{{ person.bio }}</p>
            <ul>
              <li v-if="person.twitter">
                <a :href="person.twitter" target="_blank">
                  <i class="fab fa-twitter fa-fw"></i>
                </a>
              </li>
              <li v-if="person.instagram">
                <a :href="person.instagram" target="_blank">
                  <i class="fab fa-instagram fa-fw"></i>
                </a>
              </li>
              <li v-if="person.deviantart">
                <a :href="person.deviantart" target="_blank">
                  <i class="fab fa-deviantart fa-fw"></i>
                </a>
              </li>
              <li v-if="person.artstation">
                <a :href="person.artstation" target="_blank">
                  <i class="fab fa-artstation fa-fw"></i>
                </a>
              </li>
              <li v-if="person.facebook">
                <a :href="person.facebook" target="_blank">
                  <i class="fab fa-facebook fa-fw"></i>
                </a>
              </li>
              <li v-if="person.tiktok">
                <a :href="person.tiktok" target="_blank">
                  <i class="fab fa-tiktok fa-fw"></i>
                </a>
              </li>
              <li v-if="person.linkedIn">
                <a :href="person.linkedIn" target="_blank">
                  <i class="fab fa-linkedin fa-fw"></i>
                </a>
              </li>
              <li v-if="person.youtube">
                <a :href="person.youtube" target="_blank">
                  <i class="fab fa-youtube fa-fw"></i>
                </a>
              </li>
              <li v-if="person.website">
                <a :href="person.website" target="_blank">
                  <i class="fas fa-globe fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bio-img-border-left">
          <img :src="person.image" class="bio-img" :alt="person.alt" />
          <div>
            <h3>{{ person.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BioRight",
  el: "BioRight",
  data() {
    return {
      people: [
        {
          name: "Jay Stilipec's",
          title: "Founder",
          bio:
            "Jay has been playing video games and role-playing for more than 30 years. Originally from Alaska, they joined the U.S. Navy in 1995 to be a broadcast journalist. Jay assisted with the editing of a Mutants & Masterminds supplement by Brainstorm Studios called Hero Hooks in 2005. In 2013, they beta-tested D&D Next (D&D 5e) while deployed to Afghanistan. Jay retired from the Navy in 2015 and now works as a public affairs instructor for the Department of Defense. They also cosplay in Washington D.C. under the pseudonym Jazmine Cosplays. Better Backstories is their first Kickstarter and first private business venture.",
          image: require("@/assets/Jay.jpg"),
          alt: "Jay Stilipec",
          linkedIn: "https://www.linkedin.com/in/jamesstilipec/",
          facebook: "https://www.facebook.com/james.stilipec",
          instagram: "https://www.instagram.com/jazrae22/",
          twitter: "https://twitter.com/JazRae22",
          tiktok: "https://www.tiktok.com/@jazrae22",
          youtube: "https://www.youtube.com/user/JRpec",
        },
        {
          name: "Tim Mazurek'",
          title: "Layout",
          bio:
            "Tim has been teaching Graphic Design at colleges and universities all around the Baltimore beltway for the last 30 years. During the day, he leads a team of designers and photographers for Uncle Sam. At night, he runs a small design studio specializing in CD packaging design — A Little Fish, Graphic Design and Fine Typography. Tim is passionate and can be pretty geeky about design. Practicing graphic design is a fundamental part of his life.",
          image: require("@/assets/Tim.png"),
          alt: "Tim Mazurek",
        },
        {
          name: "Blazbaros'",
          title: "Illustrator",
          bio:
            "Taylor Schmidt has been working as a freelance artist for the last 10 years, bringing life to a multitude of RPG characters under the name “Blazbaros” on the internet. He has a deep love for world building and roleplaying games, perhaps running too many games in his free time. He is currently working with Cybermoose Games creating Payload, a pen-and-paper RPG centered around giant mecha combat.",
          image: require("@/assets/BlazCowboy.png"),
          alt: "Blazbaros",
          deviantart: "https://www.deviantart.com/blazbaros",
          twitter: "https://twitter.com/Blazbaros",
          instagram: "https://www.instagram.com/blazbaros",
          artstation: "https://www.artstation.com/blazbaros",
        },
        {
          name: "Shaneh Woods'",
          title: "Writer",
          bio:
            "An accountant with the secret heart of a writer, long-time friend, and quote generator extraordinaire. Sarcasm, it's how she hugs!",
          image: require("@/assets/Shaneh1.jpg"),
          alt: "Shaneh Woods",
          instagram: "https://www.instagram.com/numbertamer/",
        },
        {
          name: "Stef Wilsons'",
          title: "Pencils",
          bio:
            "Stef is a comic cover artist, sketch artist, and the Creative Director at Bad Kerry Studios. He works with Naughty Faeries, BDI, Outpost 426, Totally Rad Comics, Sacred Chaos Comics and others. He spent more than six years selling comic sketch art and developing a very unique style. He was discovered in mid-2019 by the comic world and now his work is exploding onto covers among leading independent publishers.",
          image: require("@/assets/Stef.jpg"),
          alt: "Stef Wilson",
          website: "https://www.stefwilsonart.com/",
          instagram: "https://www.instagram.com/thestefwilson/",
          facebook: "https://www.facebook.com/stef.wilson.98",
        },
        {
          name: "Kerry Anne's",
          title: "Colorist",
          bio:
            "Kerry is the Digital Color Artist and Director of Operations at Bad Kerry Studios. She works with Naughty Faeries, Outpost 426 Studios, Totally Rad Comics, Sacred Chaos Comics, and others. She has many years experience in both the IT and graphic design industry and began coloring comic covers in late-2019. Her work has been featured on nearly a dozen covers already.",
          image: require("@/assets/Kerry.jpg"),
          alt: "Kerry Anne",
          facebook: "https://www.facebook.com/kerry.anne.50999405",
        },

        {
          name: "Rick Ankney's",
          title: "Colorist",
          bio:
            "Rick is a retired Navy Corpsman, a former actor and a former roadie for Five Finger Death Punch. Was the Production Manager for Sapphire Studios (Home of PreviewsWorld and Game Trade Media). He works now as an independent hype-man for the gaming industry, traveling all over the country as Rick Rollz America.",
          image: require("@/assets/Rick.jpg"),
          alt: "Rick Ankney",
          facebook: "www.facebook.com/rickrollzamerica",
          instagram: "www.instagram.com/rickrollzamerica",
          tiktok: "https://www.tiktok.com/@rickrollzamerica",
        },
        {
          name: "Karen Heyn's",
          title: "Web Developer",
          bio:
            "Karen is a web developer who loves coding in javascript, traveling, and all things nintendo. She earned her bachelor's degree from Penn State University in 2017 and spent most of 2018 backpacking through Europe and the Middle East. Karen is based out of Arlington, VA where she lives with her significant other, Tom, their puggle, Daisy, and their cat, Bartholomew.",
          image: require("@/assets/Karen.png"),
          linkedIn: "https://www.linkedin.com/in/karenheyn/",
          website: "https://www.karenheyn.com/",
          facebook: "https://www.facebook.com/kheyn1",
        },
        {
          name: "Shenzhen XM Playing Cards Company's",
          title: "Manufacturer",
          bio:
            "This manufacturing company offers professional printing services for custom Tarot Cards, Oracle Cards and Playing Cards, including booklets and a wide selection of boxes and packaging options. They are dedicated in helping artists and creators find the best printing options available for their designs. Their experienced professional sales team will help you choose from a full range of services to find the best combination of materials and finishing styles for your project's unique requirements. It is an eye opening experience for creators to discover all the printing possibilities available for their work.",
          image: require("@/assets/Shenzhen.png"),
          alt: "Shenzhen XM Playing Cards Co. Ltd.",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  font-family: "Open Sans", sans-serif;
}
h1 {
  font-family: "IM Fell English", serif;
  color: #d2bf9e;
  font-size: 6.5vw;
  font-weight: 300;
  text-align: center;
  margin: 10px 65px;
  text-shadow: 1px 1px 1px black;
  margin: 30px 0;
}
.bio-wrapper {
  overflow: hidden;
}
.bio-flex-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1;
  width: 100%;
}
.bio-container-right {
  background: #d2bf9e;
  padding: 20px 20px 20px 120px;
  -webkit-box-shadow: 5px 5px 10px -5px black;
  -moz-box-shadow: 5px 5px 10px -5px black;
  box-shadow: 5px 5px 10px -5px black;
  grid-column: 3/12;
  grid-row: 1;
}

.for:nth-of-type(odd) .bio-container-right {
  grid-column: 2/11;
}
.for:nth-of-type(odd) .bio-container-right {
  padding: 20px 120px 20px 20px;
}
.for:nth-of-type(odd) .bio-img-border-left {
  grid-column: 9/12;
}
.bio-inner-container-right {
  background: #e3dcdc;
  text-align: right;
  padding: 125px;
  display: flex;
  flex-direction: column;
}
.bio-inner-container-right p,
.bio-inner-container-left p {
  align-self: center;
}

.bio-img-border-left {
  background: #1d5574;
  padding: 20px;
  -webkit-box-shadow: 0px 5px 10px -5px black;
  -moz-box-shadow: 0px 5px 10px -5px black;
  box-shadow: 0px 5px 10px -5px black;
  height: fit-content;
  align-self: center;
  grid-row: 1;
  grid-column: 2/5;
}
.bio-img {
  max-width: 100%;
  max-height: 100%;
}
p {
  text-align: left;
  font-family: "Oswald", sans-serif;
  color: #053475;
  font-size: 2.3vw;
  display: table-cell;
  vertical-align: middle;
}
h3 {
  color: #ffffff;
  font-family: "Cinzel", serif;
  margin-top: 8px;
}
ul {
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  font-size: 2em;
  flex-wrap: wrap;
}
ul li {
  margin: 8px;
  list-style: none;
}
a {
  color: #053475;
}
a:active {
  color: #053475;
}

@media only screen and (max-device-width: 1023px) and (min-device-width: 768px) {
  .bio-img-border-left {
    grid-column: 2/6;
  }
  .for:nth-of-type(odd) .bio-img-border-left {
    grid-column: 8/12;
  }
}
@media only screen and (max-width: 736px) {
  .bio-inner-container-right {
    padding: 70px;
  }
}
@media only screen and (max-width: 600px) {
  .bio-flex-container {
    grid-template-rows: auto;
    grid-row-gap: 20px;
  }
  .bio-container-right {
    grid-row: 2;
    padding: 20px;
    grid-column: 3/11;
  }
  .bio-img-border-left {
    grid-row: 1;
    grid-column: 3/11;
  }
  .bio-inner-container-right {
    background: #e3dcdc;
    text-align: right;
    padding: 20px;
    display: flex;
  }
  .for:nth-of-type(odd) .bio-container-right {
    grid-row: 2;
    padding: 20px;
    grid-column: 3/11;
  }
  .for:nth-of-type(odd) .bio-img-border-left {
    grid-row: 1;
    grid-column: 3/11;
  }
  p {
    font-size: 5vw;
    font-size: 1rem;
  }

  h1 {
    font-size: 9vw;
    margin-top: 20px;
  }
  .bio-img-border-right,
  .bio-img-border-left {
    padding: 15px;
  }
  .tiberius {
    height: 250px;
  }
  .about-div-wrapper {
    padding: 30px 50px 30px 20px;
  }
  .about-div {
    padding: 10px;
  }
  .hello {
    overflow: hidden;
  }
  .about-div p {
    display: inline;
    text-align: left;
  }
}

@media only screen and (min-width: 1400px) {
  .bio-inner-container-right {
    padding: 200px;
  }
}
</style>
