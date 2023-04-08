export interface Skill {
	name: string;
	type: "icon" | "image";
	src: string;
	preserve?: boolean
}

export const skills: Skill[] = [
	{
		name: "JavaScript",
		type: "icon",
		src: "devicon-javascript-plain"
	},
	{
		name: "TypeScript",
		type: "icon",
		src: "devicon-typescript-plain"
	},
	{
		name: "Node.js",
		type: "icon",
		src: "devicon-nodejs-plain"
	},
	{
		name: "Express.js",
		type: "icon",
		src: "devicon-express-original"
	},
	{
		name: "Socket.io",
		type: "icon",
		src: "devicon-socketio-original"
	},
	{
		name: "GraphQL",
		type: "icon",
		src: "devicon-graphql-plain"
	},
	{
		name: "Apollo Server",
		type: "image",
		src: "/skills/icons/apollo-server.svg"
	},
	{
		name: "Mocha",
		type: "icon",
		src: "devicon-mocha-plain"
	},
	{
		name: "Chai.js",
		type: "image",
		src: "/skills/icons/chaijs.svg"
	},
	{
		name: "MySQL",
		type: "icon",
		src: "devicon-mysql-plain"
	},
	{
		name: "PostgreSQL",
		type: "icon",
		src: "devicon-postgresql-plain"
	},
	{
		name: "Sequelize",
		type: "icon",
		src: "devicon-sequelize-plain"
	},
	{
		name: "MongoDB",
		type: "icon",
		src: "devicon-mongodb-plain"
	},
	{
		name: "Prisma",
		type: "image",
		src: "/skills/icons/prisma.svg"
	},
	{
		name: "NGINX",
		type: "icon",
		src: "devicon-nginx-original"
	},
	{
		name: "Docker",
		type: "icon",
		src: "devicon-docker-plain"
	},
	{
		name: "Google Cloud",
		type: "icon",
		src: "devicon-googlecloud-plain"
	},
	{
		name: "Cloudinary",
		type: "image",
		src: "/skills/icons/cloudinary.svg",
		preserve: true
	},
	{
		name: "Pug",
		type: "image",
		src: "/skills/icons/pug.svg"
	},
	{
		name: "Handlebars",
		type: "icon",
		src: "devicon-handlebars-plain"
	},
	{
		name: "EJS",
		type: "image",
		src: "/skills/icons/ejs.svg"
	},
	{
		name: "Angular",
		type: "icon",
		src: "devicon-angularjs-plain"
	},
	{
		name: "React",
		type: "icon",
		src: "devicon-react-original"
	},
	{
		name: "Redux",
		type: "icon",
		src: "devicon-redux-original"
	},
	{
		name: "Firebase",
		type: "icon",
		src: "devicon-firebase-plain"
	},
	{
		name: "Material-UI",
		type: "icon",
		src: "devicon-materialui-plain"
	},
	{
		name: "Bootstrap",
		type: "icon",
		src: "devicon-bootstrap-plain"
	},
	{
		name: "TailwindCSS",
		type: "icon",
		src: "devicon-tailwindcss-plain"
	},
	{
		name: "webpack",
		type: "icon",
		src: "devicon-webpack-plain"
	},
	{
		name: "Python",
		type: "icon",
		src: "devicon-python-plain"
	},
	{
		name: "Django",
		type: "icon",
		src: "devicon-django-plain"
	},
	{
		name: "Perl",
		type: "icon",
		src: "devicon-perl-plain"
	}
];
