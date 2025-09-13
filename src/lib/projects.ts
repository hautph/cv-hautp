export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
}



const manualProjects: Project[] = [
    {
        name: "Tran Dai Nghia Exam Score Lookup",
        demoLink: "https://tdn2025.cungnhauhoc.net/",
        description: "A web application for looking up 6th-grade entrance exam scores for Tran Dai Nghia High School for the Gifted for the 2025-2026 academic year. Built with a focus on speed and user experience.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Exam Score", "Education"],
    },
    {
        name: "Cung Nhau Hoc Website",
        demoLink: "https://cungnhauhoc.net/",
        description: "An online learning and knowledge-sharing platform. This project aims to connect students and educators, providing a comprehensive environment for collaborative learning and resource exchange.",
        tags: ["React", "Node.js", "MongoDB", "E-learning", "Community"],
    },
    {
        name: "Vinahost Online Support Portal",
        demoLink: "https://kb.vinahost.vn/",
        description: "Vinahost's knowledge base and customer support system. It provides extensive documentation, FAQs, and a ticketing system to assist users with their hosting and domain-related queries efficiently.",
        tags: ["Vue.js", "PHP", "MySQL", "Customer Support", "Knowledge Base"],
    },
    {
        name: "Vinahost DevOps Page",
        demoLink: "https://devops.vinahost.vn/",
        description: "A dedicated page showcasing Vinahost's DevOps services and solutions. It highlights various tools, practices, and benefits of implementing DevOps for improved software delivery and operational efficiency.",
        tags: ["Gatsby", "React", "GraphQL", "DevOps", "Cloud"],
    },
    {
        name: "IT Tools Page",
        demoLink: "https://tools.cloudtada.com/",
        description: "A collection of useful IT tools and utilities designed to assist developers and IT professionals in their daily tasks. This includes various calculators, converters, and diagnostic tools.",
        tags: ["HTML", "CSS", "JavaScript", "Utilities", "Developer Tools"],
    },
    {
        name: "Alibaba Cloud Community Contributions",
        demoLink: "https://community.alibabacloud.com/users/5820900997296328",
        description: "My contributions and activities within the Alibaba Cloud community, showcasing engagement in discussions, content creation, and knowledge sharing.",
        tags: ["Alibaba Cloud", "Community", "Cloud Computing", "Contributions", "Knowledge Sharing"],
    },
]

export const projects: Project[] = [...manualProjects];
