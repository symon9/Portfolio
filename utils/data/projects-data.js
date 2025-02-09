import drawFusion from "/public/image/drawFusion.png";
import gameHub from "/public/image/gameHub.png";
import exploreWildOasis from "/public/image/exploreWildOasis.png";
import baseBank from "/public/image/baseBank.png";

export const projectsData = [
  {
    id: 1,
    name: "DrawFusion: Drawing App",
    description:
      "DrawFusion is a drawing application that lets users create an account 📝, log in 🔑, edit their profile 🖊️, and draw effortlessly 🖌️ using powerful tools. With a sleek landing page 🌟 and a fully responsive design 📱💻, it works seamlessly on both mobile and large screens. Users can sketch, design, and download their artwork 📥, making it perfect for artists, and designers.🚀🔥",
    tools: ["React", "Supabase", "Tailwind", "Konvajs"],
    role: "Frontend Developer",
    code: "",
    demo: "https://drawfusion.vercel.app",
    image: drawFusion,
  },
  {
    id: 2,
    name: "Game Hub: Discover & Enjoy the Games",
    description:
      "Game Hub is a dynamic gaming platform where users can explore a wide selection of games, filter by genre, search for favorites, and view detailed game information. It also features light and dark mode 🌞🌙 for a customized experience. With a sleek and fully responsive design 📱💻, it offers an engaging experience for gamers on all devices. Dive into the world of gaming 🚀👾",
    tools: ["React", "Typescript", "ChakraUI"],
    code: "",
    demo: "https://game-hub-puce-rho.vercel.app",
    image: gameHub,
    role: "Frontend Developer",
  },
  {
    id: 3,
    name: "Explore Wild Oasis: Gateway to Nature",
    description:
      "Explore Wild Oasis is a travel and adventure platform that allows users to view cabins 🏕️, sign in with Google 🔑, make reservations 🏡, edit guest profile info 🖊️, and update reservation details 📅 for a seamless booking experience. Discover unique stays and plan your next getaway. 🚀🌍.",
    tools: ["Next JS", "Supabase", "Tailwind"],
    role: "Frontend Developer",
    code: "",
    demo: "https://explore-wild-oasis.vercel.app",
    image: exploreWildOasis,
  },
  {
    id: 4,
    name: "BaseBank: Modern Banking Made Simple",
    description:
      "BaseBank is a sleek and modern landing page for a banking platform, designed to showcase financial services with a clean and professional look. With a fully responsive design 📱💻, it provides a seamless experience across all devices. Explore it. 🚀💳",
    tools: ["React", "Tailwind"],
    code: "",
    role: "Frontend Developer",
    demo: "https://basebank.netlify.app",
    image: baseBank,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
