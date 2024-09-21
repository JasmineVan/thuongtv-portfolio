import './App.css';
import Particles from './components/Particle';
import NavigationBar from './components/NavigationBar';
import Introduction from './components/Introduction';
import School from './components/School';
import WorkExperience from './components/WorkExperience';
import Delimiter from './components/Delimiter';

function App() {
  const projects = [
    {
      image: './src/assets/images/projects/pj11.png',
      title: 'Dog Park',
      time: '2022',
      description: 'The Dog Park project is a community-oriented space designed for dogs and their owners to socialize and play. It features designated areas for small and large dogs, agility equipment for exercise, and plenty of shaded spots for relaxation. The park hosts regular events, including training workshops and social meetups, fostering a vibrant community of dog lovers.',
      techStack: ["React", "Flutter", "1C Enterprise", "Ale Pay"],
      techStackColors: ["#00d2f7", "#51c5fa", "#e8e33c", "#f7ce2f"],
      link: 'https://example.com/demo1'
    },
    {
      image: '/images/projects/pj22.png',
      title: 'Coffee Roastery',
      time: '2022',
      description: 'An e-commerce platform dedicated to artisanal coffee roasting. This project showcases a range of coffee beans sourced from around the world, complete with detailed tasting notes and brewing recommendations. Customers can subscribe for regular deliveries or purchase one-time bags, with a focus on sustainability and direct trade practices.',
      techStack: ["React", "Flutter", "1C Enterprise"],
      techStackColors: ["#00d2f7", "#51c5fa", "#e8e33c"],
      link: 'https://example.com/demo2'
    },
    {
      image: '/images/projects/pj33.png',
      title: 'CleverTap',
      time: '2023',
      description: 'An integration project with CleverTap, a leading customer engagement and analytics platform. This project involved implementing CleverTap\’s SDK into a mobile application, enabling real-time user engagement through personalized notifications, targeted campaigns, and comprehensive analytics to optimize user retention and growth.',
      techStack: ["CleverTap", "Flutter", "1C Enterprise"],
      techStackColors: ["#d92626", "#51c5fa", "#e8e33c"],
      link: 'https://example.com/demo2'
    },
    {
      image: '/images/projects/pj44.jpg',
      title: 'Japan Real Estate',
      time: '2023',
      description: 'An integration project with CleverTap, a leading customer engagement and analytics platform. This project involved implementing CleverTap\’s SDK into a mobile application, enabling real-time user engagement through personalized notifications, targeted campaigns, and comprehensive analytics to optimize user retention and growth.',
      techStack: ["React", "Flutter", "1C Enterprise", "Python"],
      techStackColors: ["#00d2f7", "#51c5fa", "#e8e33c", "#336e9c"],
      link: 'https://example.com/demo2'
    },
    {
      image: '/images/projects/pj55.jpg',
      title: 'Aquatics HUB',
      time: '2024',
      description: 'The Aquatic Hub is a modern facility focused on providing a variety of aquatic activities for all ages. It includes multiple swimming pools for lessons, fitness classes, and recreational use. The hub also emphasizes water safety education, offering programs that teach essential swimming skills and promote healthy, active lifestyles within the community.',
      techStack: ["React", "Flutter", "Node", "1C Enterprise", "Python", "VN Pay"],
      techStackColors: ["#00d2f7", "#51c5fa", "#87bf00", "#e8e33c", "#336e9c", "#0057a5"],
      link: 'https://example.com/demo2'
    },
    {
      image: '/images/projects/pj66.png',
      title: 'Motorcycle Retail Store',
      time: '2024',
      description: 'An online retail store specializing in motorcycle parts and accessories. This project includes a user-friendly interface for browsing products, detailed descriptions, customer reviews, and a secure checkout process. The platform also offers a blog with maintenance tips, riding safety advice, and the latest industry news.',
      techStack: ["React", "Python", "VN Pay", "SQLite"],
      techStackColors: ["#00d2f7", "#336e9c", "#0057a5", "#63b4e1"],
      link: 'https://example.com/demo2'
    },
  ];

  return (
    <div className="App">
      <Particles id="tsparticles" />
      <NavigationBar />
      <Introduction />
      <Delimiter title="Education" />
      <School />
      <Delimiter title="Expreience" />
      <WorkExperience
        time="2022-06-01"
        company="Hoang Thanh Capital & Partners"
        title="Software Developer"
        description="As a skilled backend developer, I specialize in crafting innovative applications that cater to diverse industries. My experience with Hoang Thanh Capital & Partners has honed my abilities to deliver tailored solutions for projects."
        projects={projects}
      />
      {/* <Delimiter title="My showcases" /> */}
    </div>
  );
}

export default App;
