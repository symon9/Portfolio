import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/appPaytm.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Transact-Ease Payment App in MERN',
        description: "I Developed real-time money transaction app with Node.js, Express, React and MongoDB. Implemented JWT for secure user authentication and Recoil for state management. Utilized React Router DOM for seamless navigation. Transactions were managed securely with Mongo DB transaction sessions ensuring a dynamic and secure user experience. Achieved sleek UI design with Tailwind CSS. GitHub Repo:- https://github.com/akshitmittal20/transact-ease-payment-app.git",
        tools: ['Express', 'MongoDB', 'NodeJS', 'React', 'Recoil', 'JWT', 'Tailwind CSS'],
        role: 'Full Stack Developer',
        code: 'https://payment-app-lyart.vercel.app/Signin',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Python CPU-Monitoring Web App CI/CD',
        description: 'I have designed and developed a full-stack web app for CPU Monitoring Web Application in Python using flask module, containerising and setting up the CICD pipeline workflow to deploy image in GCR Google container registry and Google artifact registry on every commit with the updated tag. Tools: Docker, GitHub Actions, Shell Scripting.',
        tools: ['Python', 'Docker', "GitHub Actions", "Bash", "GCP", "Shell Scripting"],
        role: 'Full Stack Developer',
        code: 'https://github.com/akshitmittal20/MonitoringApp_Python.git',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Crypto Bridge Web App in MERN',
        description: 'Bridge is a full-stack application built using the MERN stack, that interacts with the XY Finance API to fetch and display cryptocurrency data. User can - Fetch supported tokens for a specified blockchain, Query XY Finance Quotes API for quotes, Fetch transaction parameters when a user accepts a quote, Fetch supported swap providers for a specified blockchain. Repo- https://github.com/akshitmittal20/XY_Finance_Frontend.git',
        tools: ['MongoDB', 'Express', 'NodeJS', 'React', 'JWT', 'Redux'],
        code: 'xy-finance-backend.vercel.app',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Java WAR file artifact deployment Automation',
        description: "Ansible integration with Jenkins CI server, to run and execute playbooks for deploying custom WAR files to a web container and then performing restart for the web container. Services included - Configuring Jenkins server as Ansible provisioning machine, Installing Ansible plugins in Jenkins CI server, Preparing Ansible playbook to run Maven build on Jenkins CI server to Build the .war file, Preparing Ansible playbook to execute deployment steps on the remote web container with restart of the web container post deployment. using Docker for building the image and running the container on tomcat server.",
        tools: ['Java', 'Ansible', 'Jenkins', 'Terraform', "AWS EC2", 'Docker', 'YAML'],
        code: 'https://github.com/akshitmittal20/CICD_JavaApplicationDeployment_Ansible_Docker_Jenkins.git',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
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