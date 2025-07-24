/* --------------------------------------------------------------------------
 * Icon imports – leave exactly as you have them
 * ----------------------------------------------------------------------- */
import { JavaOriginal } from 'devicons-react';
import SpringOriginal from 'devicons-react/icons/SpringOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import AngularOriginal from 'devicons-react/icons/AngularOriginal';
import VuejsOriginal from 'devicons-react/icons/VuejsOriginal';
import NpmOriginalWordmark from 'devicons-react/icons/NpmOriginalWordmark';
import ApachekafkaOriginal from 'devicons-react/icons/ApachekafkaOriginal';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import Html5Original from 'devicons-react/icons/Html5Original';
import Css3Original from 'devicons-react/icons/Css3Original';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import MysqlOriginal from 'devicons-react/icons/MysqlOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';
import RedisOriginal from 'devicons-react/icons/RedisOriginal';
import DockerOriginal from 'devicons-react/icons/DockerOriginal';
import KubernetesOriginal from 'devicons-react/icons/KubernetesOriginal';
import GitOriginal from 'devicons-react/icons/GitOriginal';
import GithubactionsOriginal from 'devicons-react/icons/GithubactionsOriginal';
import SonarqubeOriginal from 'devicons-react/icons/SonarqubeOriginal';
import PostmanOriginal from 'devicons-react/icons/PostmanOriginal';
import IntellijOriginal from 'devicons-react/icons/IntellijOriginal';
import MavenOriginal from 'devicons-react/icons/MavenOriginal';
import JunitOriginal from 'devicons-react/icons/JunitOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark';
import JqueryOriginal from 'devicons-react/icons/JqueryOriginal';
import VscodeOriginal from 'devicons-react/icons/VscodeOriginal';
import SocketioOriginal from 'devicons-react/icons/SocketioOriginal';
import HibernateOriginal from 'devicons-react/icons/HibernateOriginal';
import GooglecloudOriginal from 'devicons-react/icons/GooglecloudOriginal';

/* --------------------------------------------------------------------------
 * Portfolio configuration – content untouched, shape fixed
 * ----------------------------------------------------------------------- */
export const portfolioData = {
  /* ---------- Personal Information ---------- */
  personal: {
    name: 'Jeet Solanki',
    title: 'Software Developer',
    tagline:
      'Backend-focused developer specializing in Java, Spring Boot, and cloud-native architectures.',
    location: 'india',
    email: 'solankijeet285@gmail.com',
    phone: '+91 8815591858',
    resumeFileName: 'Jeet-Solanki-Resume',
  },

  /* ---------- About ---------- */
  about: {
    introduction:
      `I'm a software engineer with research oriented mind building robust backend systems, scalable microservices, and efficient cloud-native applications. My expertise lies in Java, Spring Boot, RESTful APIs, and modern backend architecture. Having worked across projects mentor by senior developer, I like to go deeper and think how can i do this without using the library.`,
    whatIDo:
      `In my current role, I Observer, think recorsively, and learn, while building Unique projects backend by self frontend by ai, using Java, Spring Boot, and MySql. I'm experienced in designing secure APIs, implementing microservices, and Prefer to make generic services to achive 'Do not write by yourself' . I also have also some knowledg in Dockerized deployments, and CI/CD pipeline setup via GitHub Actions. On the frontend, I’ve worked with React, but not like to build by self at all, and TypeScript yes its kidn of kotlin and kotlin kind of java when needed.`,
    philosophy:
      `I believe in writing code like to provide placeholders means you can use anywhere just generic. I'm a strong to make modualar and independent code, extract codes that not change, and play with those remaining bouncy codes. I regularly engage in refactoring, automated testing (JUnit/Mockito), and using simulations with user perspective to figure out which is likeable and which is not. For me, engineering is being the creator of non-living civilialization.`,
    beyondCode:
      `Outside of work, I Observe present time with a third persion eye, i like nature that's why i chose to be a backend developer, becouse software can simulate nature, I write thesis on brain, machine counciouseness, and recursive obervation believe is my persional novel.`,
  },

  /* ---------- Social Links ---------- */
  social: {
    github: 'https://github.com/Jeet-solanki-1',
    email: 'solankijeet285@gmail.com',
    portfolio: 'https://Jeet-Solanki-portfolio.netlify.app/',
  },

  /* ---------- Technical Skills ---------- */
  skills: {
    backend: [
      { name: 'Java', icon: JavaOriginal },
      { name: 'Spring Boot', icon: SpringOriginal },
      { name: 'Spring Security', icon: SpringOriginal },
      { name: 'JPA/Hibernate', icon: HibernateOriginal },
      { name: 'Microservices', icon: SpringOriginal },
      { name: 'REST APIs', icon: PostmanOriginal },
      { name: 'GCP', icon: GooglecloudOriginal },
      { name: 'Maven', icon: MavenOriginal },
      { name: 'JUnit', icon: JunitOriginal },
      { name: 'npm', icon: NpmOriginalWordmark },
    ],
    frontend: [
      { name: 'I Dont like it', icon: Css3Original },
    ],
    database: [{ name: 'MySQL', icon: MysqlOriginal }],
    devops: [
      { name: 'Docker', icon: DockerOriginal },
      { name: 'Git', icon: GitOriginal },
      { name: 'GitHub Actions', icon: GithubactionsOriginal },
    ],
    tools: [
      { name: 'IntelliJ IDEA', icon: IntellijOriginal },
      { name: 'VS Code', icon: VscodeOriginal },
      { name: 'Postman', icon: PostmanOriginal },
    ],
  },

  /* ---------- Professional Experience ---------- */
  experience: [
    {
      id: 1,
      title: 'Founder & Lead Developer',
      company: 'Brainz (Student-led Tech Organization)',
      location: 'Remote / India',
      period: 'July 2025 – Present',
      type: 'Independent / Leadership',
      liveUrl: 'https://brainz-docs.netlify.app/',
      githubUrl: 'https://github.com/All-Origin',
      description:
        'Currently leading the design and development of Brainz, a multi-team AI-first product ecosystem, while simulating real-world engineering workflows across a student-led organization.',
      responsibilities: [
        'Building Brainz, an AI-powered social platform where users create, train, and engage with digital personalities ("Brainz") across mobile, web, and desktop platforms.',
        'Leading and coordinating 6 structured technical teams: Backend (Java), Frontend Web, Frontend Native, Desktop, DevOps, and LLM Core — with clear roles, ownership, and tasks.',
        'Actively developing full-stack features including secure authentication systems, voice-based data entry, OCR scanning, and personalized dashboards.',
        'Managing technical documentation using Docusaurus to ensure consistency, cross-team onboarding, and architectural transparency.',
        'Designing microservice-based backend APIs using Spring Boot with scalable data models and secure token authentication.',
        'Developing Jetpack Compose-based Android app using Room DB, ViewModels, and biometric + PIN-based app lock for offline-first use cases.',
        'Collaborating with peers to simulate agile sprints, Git-based workflows, and CI/CD practices, preparing for production-level engineering environments.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Kotlin',
        'Jetpack Compose',
        'Room DB',
        'Docusaurus',
        'Git & GitHub Projects',
        'React',
        'Node.js',
        'LLM APIs',
        'CI/CD',
        'Docker',
      ],
    },
  ],

  /* ---------- Projects ---------- */
  projects: [
    {
        id: 'placelive',
        title: 'PlaceLive',
        description:
          'Revolutionary location-aware platform that transforms how people discover places and connect with friends through real-time geofencing, AI-driven behavioral psychology, and monetized shop sponsorships.',
        images: [
          '/projects/placelive-1.jpg',
          '/projects/placelive-2.jpg',
          '/projects/placelive-3.jpg',
          '/projects/placelive-4.jpg',
        ],
        technologies: [
          'Android (Kotlin)',
          'Spring Boot Microservices',
          'PostgreSQL',
          'Docker',
          'Geofencing APIs',
          'Background Location Services',
          'JPA/Hibernate',
          'Custom Generic CRUD Library',
        ],
        githubUrl: 'https://github.com/orgs/JLSS-virtual/repositories',
        liveUrl: '', // will be added when deployed
        status: 'Prototype Complete: But private repository you can ask for access',

        /* --------Extended content left as-is -------- */
        features: [
          'Real-time geofencing with dynamic radius detection',
          'Friend-based live tracking with privacy controls',
          'Shop sponsorship and monetization system',
          'Role-based place access (public/private)',
          'Request system for nearby friend assistance',
          'Background location tracking with battery optimization',
        ],
        expandedContent: {
          vision:
            'PlaceLive emerged from a real college frustration - calling friends one by one asking "Are bhai kaha ho?" when needing something from nearby shops. This sparked a vision to create the world\'s most comprehensive place-aware ecosystem, competing directly with Google\'s location dominance by owning hyperlocal interaction data.',
          uniqueValue:
            'Unlike existing location apps that are either privacy-focused (Find My Friends) or business-focused (Google Maps ads), PlaceLive uniquely combines three game-changing elements: real-time friend visibility at specific places, AI-powered psychological manipulation for shop recommendations, and a monetization model that makes local businesses pay to "go live" in users\' proximity.',
          coreInnovations: [
            ' Geofenced Shop Sponsorship - Businesses pay to make their location "live". When users enter the 200-500m radius, they receive psychologically-crafted notifications like "Best mobile shop in 2km range for quality + price" based on their behavioral profile.',
            ' Friend-Request Ecosystem - Solving the "photocopy problem": Users search what they need, the app finds friends near relevant shops, and automatically sends requests. No more manual calling and asking who\'s where.',
            ' Three-Layer Privacy Architecture - Friend circle restrictions, place-specific visibility controls, and role-based access for private places (parents see kids\' home activity, workers see availability status).',
            ' AI Behavioral Profiling - Planned feature to analyze user emotions (sad, normal, happy) and generate personalized manipulation messages that build trust and drive purchasing decisions at sponsored locations.',
            ' Generic Microservice Foundation - Built a reusable Spring Boot CRUD library where services just extend GenericService and inherit all database operations, dramatically accelerating development.',
          ],
          technicalArchitecture: {
            overview:
              'Designed as a scalable microservices ecosystem with 10+ days of architectural planning, then executed full prototype in 30 days.',
            services: [
              'placelive-api-gateway - Unified entry point handling routing, authentication, and rate limiting for all client requests',
              'placelive-user-service - Manages user profiles, friend relationships, following/followers system, and authentication with mobile/email verification',
              'placelive-geofencing - Core location intelligence detecting when users enter/exit shop radius with dynamic range calculations',
              'placelive-tracker - Real-time presence management, movement logging, and privacy-controlled visibility based on place types and user permissions',
              'common-library - Revolutionary generic CRUD framework where any new service inherits complete database operations by extending GenericService class',
            ],
            androidApp:
              'Built with Kotlin, implementing battery-efficient background location tracking, real-time notifications, and seamless user experience for complex privacy controls.',
          },
          businessModel: {
            revenueStream:
              'Primary monetization through shop sponsorships - businesses pay subscription fees to make their locations "live" and appear in user recommendations when they\'re nearby.',
            psychologyEdge:
              'Planned AI integration will analyze user data patterns to determine emotional states and craft manipulation messages that feel personal and trustworthy, dramatically increasing conversion rates.',
            marketPosition:
              'Direct competition with Google by owning hyperlocal place data - knowing not just where places are, but who\'s there, what they think of it, pricing insights, and user behavior patterns.',
          },
          developmentJourney: {
            conception:
              'Started from personal college experience needing photocopies urgently and having to call friends individually to find who was near the shop.',
            planning:
              'Spent 10+ days designing complete microservice data flow, UI mockups, and privacy models on paper before writing any code.',
            execution:
              'Built fully functional Android app with complete backend in just 30 days using the generic service architecture.',
            validation:
              'Tested with college students who confirmed the pain point and showed strong interest in the solution.',
          },
          challengesSolved: [
            'Battery Optimization - Implemented intelligent background tracking that preserves battery while maintaining real-time accuracy',
            'Privacy Paradox - Solved the conflict between useful location sharing and privacy through granular place-based permissions',
            'Development Speed - Created reusable generic services that eliminated repetitive CRUD code across microservices',
            'Scalability Design - Architected for thousands of concurrent users with efficient database queries and caching strategies',
            'Trust Building - Designed psychology-based recommendation system to make sponsored suggestions feel genuine rather than promotional',
          ],
          futureRoadmap: [
            'AI personality modeling for emotion-aware shop recommendations',
            'Payment gateway integration for commission-based purchases',
            'Expansion beyond colleges to urban commercial areas',
            'Advanced analytics dashboard for business sponsors',
            'Integration with delivery services for request fulfillment',
          ],
          competitiveEdge:
            'While apps like Life360 focus only on family tracking and Google Maps only shows business locations, PlaceLive uniquely combines social connection, real-time commerce, and psychological personalization. The vision extends beyond app success to owning comprehensive place-intelligence data worldwide.',
        },
      },
    ],
  
    /* --- Backend projects (array expected by ProjectsSection) --- */
    backend: [
      {
        id: 'placelive',
        title: 'PlaceLive',
        description:
          'Revolutionary location-aware platform that transforms how people discover places and connect with friends through real-time geofencing, AI-driven behavioral psychology, and monetized shop sponsorships.',
        images: [
          '/projects/placelive-1.jpg',
          '/projects/placelive-2.jpg',
          '/projects/placelive-3.jpg',
          '/projects/placelive-4.jpg',
        ],
        technologies: [
          'Android (Kotlin)',
          'Spring Boot Microservices',
          'PostgreSQL',
          'Docker',
          'Geofencing APIs',
          'Background Location Services',
          'JPA/Hibernate',
          'Custom Generic CRUD Library',
        ],
        githubUrl: 'https://github.com/orgs/JLSS-virtual/repositories',
        liveUrl: '', // will be added when deployed
        status: 'Prototype Complete: But private repository you can ask for access',

        /* --------Extended content left as-is -------- */
        features: [
          'Real-time geofencing with dynamic radius detection',
          'Friend-based live tracking with privacy controls',
          'Shop sponsorship and monetization system',
          'Role-based place access (public/private)',
          'Request system for nearby friend assistance',
          'Background location tracking with battery optimization',
        ],
        expandedContent: {
          vision:
            'PlaceLive emerged from a real college frustration - calling friends one by one asking "Are bhai kaha ho?" when needing something from nearby shops. This sparked a vision to create the world\'s most comprehensive place-aware ecosystem, competing directly with Google\'s location dominance by owning hyperlocal interaction data.',
          uniqueValue:
            'Unlike existing location apps that are either privacy-focused (Find My Friends) or business-focused (Google Maps ads), PlaceLive uniquely combines three game-changing elements: real-time friend visibility at specific places, AI-powered psychological manipulation for shop recommendations, and a monetization model that makes local businesses pay to "go live" in users\' proximity.',
          coreInnovations: [
            ' Geofenced Shop Sponsorship - Businesses pay to make their location "live". When users enter the 200-500m radius, they receive psychologically-crafted notifications like "Best mobile shop in 2km range for quality + price" based on their behavioral profile.',
            ' Friend-Request Ecosystem - Solving the "photocopy problem": Users search what they need, the app finds friends near relevant shops, and automatically sends requests. No more manual calling and asking who\'s where.',
            ' Three-Layer Privacy Architecture - Friend circle restrictions, place-specific visibility controls, and role-based access for private places (parents see kids\' home activity, workers see availability status).',
            ' AI Behavioral Profiling - Planned feature to analyze user emotions (sad, normal, happy) and generate personalized manipulation messages that build trust and drive purchasing decisions at sponsored locations.',
            ' Generic Microservice Foundation - Built a reusable Spring Boot CRUD library where services just extend GenericService and inherit all database operations, dramatically accelerating development.',
          ],
          technicalArchitecture: {
            overview:
              'Designed as a scalable microservices ecosystem with 10+ days of architectural planning, then executed full prototype in 30 days.',
            services: [
              'placelive-api-gateway - Unified entry point handling routing, authentication, and rate limiting for all client requests',
              'placelive-user-service - Manages user profiles, friend relationships, following/followers system, and authentication with mobile/email verification',
              'placelive-geofencing - Core location intelligence detecting when users enter/exit shop radius with dynamic range calculations',
              'placelive-tracker - Real-time presence management, movement logging, and privacy-controlled visibility based on place types and user permissions',
              'common-library - Revolutionary generic CRUD framework where any new service inherits complete database operations by extending GenericService class',
            ],
            androidApp:
              'Built with Kotlin, implementing battery-efficient background location tracking, real-time notifications, and seamless user experience for complex privacy controls.',
          },
          businessModel: {
            revenueStream:
              'Primary monetization through shop sponsorships - businesses pay subscription fees to make their locations "live" and appear in user recommendations when they\'re nearby.',
            psychologyEdge:
              'Planned AI integration will analyze user data patterns to determine emotional states and craft manipulation messages that feel personal and trustworthy, dramatically increasing conversion rates.',
            marketPosition:
              'Direct competition with Google by owning hyperlocal place data - knowing not just where places are, but who\'s there, what they think of it, pricing insights, and user behavior patterns.',
          },
          developmentJourney: {
            conception:
              'Started from personal college experience needing photocopies urgently and having to call friends individually to find who was near the shop.',
            planning:
              'Spent 10+ days designing complete microservice data flow, UI mockups, and privacy models on paper before writing any code.',
            execution:
              'Built fully functional Android app with complete backend in just 30 days using the generic service architecture.',
            validation:
              'Tested with college students who confirmed the pain point and showed strong interest in the solution.',
          },
          challengesSolved: [
            'Battery Optimization - Implemented intelligent background tracking that preserves battery while maintaining real-time accuracy',
            'Privacy Paradox - Solved the conflict between useful location sharing and privacy through granular place-based permissions',
            'Development Speed - Created reusable generic services that eliminated repetitive CRUD code across microservices',
            'Scalability Design - Architected for thousands of concurrent users with efficient database queries and caching strategies',
            'Trust Building - Designed psychology-based recommendation system to make sponsored suggestions feel genuine rather than promotional',
          ],
          futureRoadmap: [
            'AI personality modeling for emotion-aware shop recommendations',
            'Payment gateway integration for commission-based purchases',
            'Expansion beyond colleges to urban commercial areas',
            'Advanced analytics dashboard for business sponsors',
            'Integration with delivery services for request fulfillment',
          ],
          competitiveEdge:
            'While apps like Life360 focus only on family tracking and Google Maps only shows business locations, PlaceLive uniquely combines social connection, real-time commerce, and psychological personalization. The vision extends beyond app success to owning comprehensive place-intelligence data worldwide.',
        },
      },
    ],
  

  /* ---------- Education ---------- */
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science with Specialization in Ai/Ml',
      institution: 'Medicaps Institute of Technology & Management',
      location: 'Indore, India',
      period: '2024 - 2028',
      grade: '',
      description:
        'Software development Java as of now as i am in 2nd year currently .',
    },
  ],
};


// Blog Data
export const blogData = [
  {
    id: 1,
    title: "AI in Today's World: Transforming Industries and Daily Life",
    slug: 'ai-in-todays-world',
    excerpt:
      'Exploring how artificial intelligence is revolutionizing various industries and becoming an integral part of our daily lives.',
    content: `
      <h2>The AI Revolution</h2>
      <p>Artificial Intelligence has moved from science fiction to reality, transforming how we work, live, and interact with technology. From recommendation algorithms on Netflix to autonomous vehicles, AI is everywhere.</p>
      
      <h3>Key Areas of Impact</h3>
      <ul>
        <li><strong>Healthcare:</strong> AI-powered diagnostics and treatment recommendations</li>
        <li><strong>Finance:</strong> Fraud detection and algorithmic trading</li>
        <li><strong>Transportation:</strong> Autonomous vehicles and traffic optimization</li>
        <li><strong>Entertainment:</strong> Content recommendation and creation</li>
      </ul>
      
      <h3>The Future of AI</h3>
      <p>As we look ahead, AI will continue to evolve, bringing both opportunities and challenges. The key is to harness its power responsibly while addressing ethical concerns and ensuring equitable access to AI benefits.</p>
      
      <h3>Practical Applications</h3>
      <p>In software development, AI is already helping developers write better code through tools like GitHub Copilot, automated testing, and intelligent debugging. The integration of AI in development workflows is becoming essential for modern software teams.</p>
    `,
    category: 'AI/ML',
    tags: ['AI', 'Machine Learning', 'Technology', 'Future'],
    publishedDate: 'Dec 15, 2024',
    readTime: '8 min read',
    likes: 245,
    views: 1250,
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Java for Beginners: Your Gateway to Programming',
    slug: 'java-for-beginners',
    excerpt:
      'A comprehensive guide to getting started with Java programming, covering fundamentals and best practices.',
    content: `
      <h2>Why Choose Java?</h2>
      <p>Java remains one of the most popular programming languages, known for its "write once, run anywhere" philosophy. It's an excellent choice for beginners and professionals alike.</p>
      
      <h3>Setting Up Your Environment</h3>
      <p>Before diving into Java programming, you'll need to set up your development environment:</p>
      <ol>
        <li>Install the Java Development Kit (JDK)</li>
        <li>Choose an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse</li>
        <li>Write your first "Hello World" program</li>
      </ol>
      
      <h3>Core Concepts</h3>
      <ul>
        <li><strong>Object-Oriented Programming:</strong> Classes, objects, inheritance, and polymorphism</li>
        <li><strong>Data Types:</strong> Primitive and reference types</li>
        <li><strong>Control Structures:</strong> Loops, conditionals, and decision-making</li>
        <li><strong>Exception Handling:</strong> Try-catch blocks and error management</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>As you learn Java, focus on writing clean, readable code. Follow naming conventions, comment your code appropriately, and practice object-oriented design principles.</p>
    `,
    category: 'Java',
    tags: ['Java', 'Programming', 'Beginners', 'Tutorial'],
    publishedDate: 'Dec 10, 2024',
    readTime: '12 min read',
    likes: 189,
    views: 980,
    image:
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Java Multithreading: Mastering Concurrent Programming',
    slug: 'java-multithreading-guide',
    excerpt:
      'Deep dive into Java multithreading concepts, best practices, and common pitfalls to avoid.',
    content: `
      <h2>Understanding Multithreading</h2>
      <p>Multithreading is a powerful feature in Java that allows concurrent execution of multiple threads within a single program, enabling better resource utilization and improved performance.</p>
      
      <h3>Thread Lifecycle</h3>
      <p>A thread in Java goes through various states:</p>
      <ul>
        <li><strong>NEW:</strong> Thread created but not started</li>
        <li><strong>RUNNABLE:</strong> Thread executing or ready to execute</li>
        <li><strong>BLOCKED:</strong> Thread blocked waiting for a monitor lock</li>
        <li><strong>WAITING:</strong> Thread waiting indefinitely for another thread</li>
        <li><strong>TERMINATED:</strong> Thread has exited</li>
      </ul>
      
      <h3>Synchronization</h3>
      <p>When multiple threads access shared resources, synchronization becomes crucial to prevent data corruption and ensure thread safety.</p>
      
      <h3>Best Practices</h3>
      <ol>
        <li>Use thread-safe collections from java.util.concurrent package</li>
        <li>Avoid deadlocks by acquiring locks in a consistent order</li>
        <li>Use executor frameworks instead of creating threads manually</li>
        <li>Implement proper exception handling in threads</li>
      </ol>
      
      <h3>Modern Approaches</h3>
      <p>Consider using modern concurrency tools like CompletableFuture, parallel streams, and the Fork/Join framework for better performance and maintainability.</p>
    `,
    category: 'Java',
    tags: ['Java', 'Multithreading', 'Concurrency', 'Performance'],
    publishedDate: 'Dec 5, 2024',
    readTime: '15 min read',
    likes: 156,
    views: 745,
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Apache Kafka: Building Real-time Data Pipelines',
    slug: 'apache-kafka-guide',
    excerpt:
      'Learn how to use Apache Kafka for building robust, scalable real-time data streaming applications.',
    content: `
      <h2>What is Apache Kafka?</h2>
      <p>Apache Kafka is a distributed streaming platform that excels at handling real-time data feeds. It's designed to be fast, scalable, and fault-tolerant.</p>
      
      <h3>Core Concepts</h3>
      <ul>
        <li><strong>Topics:</strong> Categories of messages</li>
        <li><strong>Producers:</strong> Applications that publish messages</li>
        <li><strong>Consumers:</strong> Applications that subscribe to topics</li>
        <li><strong>Brokers:</strong> Kafka servers that store and serve data</li>
        <li><strong>Partitions:</strong> Scalability units within topics</li>
      </ul>
      
      <h3>Use Cases</h3>
      <p>Kafka is commonly used for:</p>
      <ol>
        <li>Real-time analytics and monitoring</li>
        <li>Event sourcing and CQRS patterns</li>
        <li>Log aggregation and centralized logging</li>
        <li>Microservices communication</li>
        <li>Data integration between systems</li>
      </ol>
      
      <h3>Spring Boot Integration</h3>
      <p>Integrating Kafka with Spring Boot is straightforward using Spring Kafka. You can easily create producers and consumers with minimal configuration.</p>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Design your topics with proper partitioning strategy</li>
        <li>Implement proper error handling and retry mechanisms</li>
        <li>Monitor consumer lag and cluster health</li>
        <li>Use schemas for message serialization</li>
      </ul>
    `,
    category: 'Backend',
    tags: ['Kafka', 'Streaming', 'Microservices', 'Real-time'],
    publishedDate: 'Nov 28, 2024',
    readTime: '10 min read',
    likes: 201,
    views: 1100,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
  },
  {
    id: 5,
    title: 'Modern Frontend Development with React and TypeScript',
    slug: 'modern-frontend-development',
    excerpt:
      'Exploring modern frontend development practices using React, TypeScript, and contemporary tooling.',
    content: `
      <h2>The Modern Frontend Landscape</h2>
      <p>Frontend development has evolved significantly with the introduction of modern frameworks, tooling, and development practices that prioritize developer experience and application performance.</p>
      
      <h3>Why React + TypeScript?</h3>
      <p>This combination offers several advantages:</p>
      <ul>
        <li><strong>Type Safety:</strong> Catch errors at compile time</li>
        <li><strong>Better Developer Experience:</strong> Enhanced IntelliSense and refactoring</li>
        <li><strong>Component-Based Architecture:</strong> Reusable and maintainable code</li>
        <li><strong>Rich Ecosystem:</strong> Extensive library support</li>
      </ul>
      
      <h3>Essential Tools</h3>
      <ol>
        <li><strong>Vite:</strong> Fast build tool and dev server</li>
        <li><strong>ESLint & Prettier:</strong> Code quality and formatting</li>
        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
        <li><strong>React Query:</strong> Data fetching and caching</li>
      </ol>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use custom hooks for reusable logic</li>
        <li>Implement proper error boundaries</li>
        <li>Optimize rendering with useMemo and useCallback</li>
        <li>Follow accessibility guidelines</li>
        <li>Write comprehensive tests</li>
      </ul>
    `,
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Frontend', 'Modern Development'],
    publishedDate: 'Nov 20, 2024',
    readTime: '9 min read',
    likes: 178,
    views: 892,
    image:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=450&fit=crop',
  },
  {
    id: 6,
    title: 'DevOps Best Practices: CI/CD with Docker and Kubernetes',
    slug: 'devops-best-practices',
    excerpt:
      'Implementing robust CI/CD pipelines using Docker containerization and Kubernetes orchestration.',
    content: `
      <h2>DevOps in the Modern Era</h2>
      <p>DevOps practices have become essential for delivering software efficiently and reliably. Container technologies like Docker and orchestration platforms like Kubernetes are at the forefront of this transformation.</p>
      
      <h3>Docker Fundamentals</h3>
      <p>Docker provides:</p>
      <ul>
        <li>Consistent environments across development, testing, and production</li>
        <li>Lightweight virtualization</li>
        <li>Easy application packaging and distribution</li>
        <li>Simplified dependency management</li>
      </ul>
      
      <h3>Kubernetes Orchestration</h3>
      <p>Kubernetes helps manage containerized applications at scale:</p>
      <ol>
        <li><strong>Service Discovery:</strong> Automatic load balancing</li>
        <li><strong>Auto-scaling:</strong> Horizontal and vertical scaling</li>
        <li><strong>Self-healing:</strong> Automatic container replacement</li>
        <li><strong>Rolling Updates:</strong> Zero-downtime deployments</li>
      </ol>
      
      <h3>CI/CD Pipeline Structure</h3>
      <p>A typical pipeline includes:</p>
      <ul>
        <li>Source code management (Git)</li>
        <li>Automated testing (unit, integration, e2e)</li>
        <li>Security scanning</li>
        <li>Container image building</li>
        <li>Deployment automation</li>
        <li>Monitoring and alerts</li>
      </ul>
      
      <h3>Security Considerations</h3>
      <p>Implement security at every stage: secure base images, vulnerability scanning, secrets management, and network policies.</p>
    `,
    category: 'DevOps',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
    publishedDate: 'Nov 15, 2024',
    readTime: '13 min read',
    likes: 234,
    views: 1340,
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop',
  },
];

export default portfolioData;
