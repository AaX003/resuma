import '../css/About.css';

// SVGS
import { RiRobot2Fill } from "react-icons/ri";
import { MdOutlineLiveHelp, MdOutlineAutoFixHigh, MdOutlineIntegrationInstructions } from "react-icons/md";
import { TbPackageExport } from "react-icons/tb";
import { HiOutlineUpload } from "react-icons/hi";
import { BsPencilSquare, BsDatabaseFillCheck } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";

function About() {
  const cards = [
    {
      icon: <MdOutlineAutoFixHigh />,
      title: "Professional Quality",
      desc: "Choose from expert-designed templates that immediately pass ATS inspection and impress recruiters."
    },
    {
      icon: <RiRobot2Fill />,
      title: "AI-Powered Suggestions",
      desc: "Receive and reinforce your content based on intelligent recommendations from Resuma AI, enhancing formatting, keywords, and optimization for your resume."
    },
    {
      icon: <MdOutlineIntegrationInstructions />,
      title: "Seamless Tool Integration",
      desc: "Connect your resume with powerful tools such as Adobe Acrobat, Google Analytics, and more to improve logistic formatting."
    },
    {
      icon: <TbPackageExport />,
      title: "Multiple Export Formats",
      desc: "Various downloadable formats such as PDF and Word, that are compatible with all job application systems."
    },
    {
      icon: <BsDatabaseFillCheck />,
      title: "Data Privacy",
      desc: "Your data is important to us and will never be distributed without your explicit permissions. Strong encryption is enabled."
    },
    {
      icon: <MdOutlineLiveHelp />,
      title: "Live Tutorials",
      desc: "Receive live instructional feedback from our experts on your resume and best building practices."
    }
  ];

  const steps = [
    {
        icon: <HiOutlineUpload />,
        meta: 1,
        title: "Choose a Template",
        howTo: "Select from our professional, ATS-friendly templates meticulously designed be experts."
    },
    {
        icon: <BsPencilSquare />,
        meta: 2,
        title: "Add your information",
        howTo: "Fill in your details with an editor and get AI-powered suggestions as you type. Or sync a preexisting resume and Resuma will go from there."
    }, 
    {
        icon: <IoMdDownload />,
        meta: 3,
        title: "Download & Apply",
        howTo: "Export resume in your preferred format and start applying to your dream jobs."
    }
  ]

  return (
    <div className="container__about">
      <section className="hero__about">
        <main className="hero">
          <header className="title__hero">
            <h3 className="title__about">
                Land Your Dream Job, Expert Way
            </h3>
            <p className="subtitle__about">
              We're committed to providing the most powerful features
              and designs to make resume construction effortless and 
              effective. No more "ghosted" hell.
            </p>
          </header>
        </main>
      </section>
      <section className="showcase__about">
        <div className="about-display">
          {cards.map((card, idx) => (
            <div key={idx} className="about-card">
              <span className="about-icon">{card.icon}</span>
              <h4 className="about-title">{card.title}</h4>
              <p className="about-desc">{card.desc}</p>
            </div>
          ))}
        </div>
        <ul className="stats__about">
          <li className="stat__about">
            <span className="value__about">200K+</span>
            <span className="text__about">Happy Customers</span>
          </li>
           <li className="stat__about">
            <span className="value__about">4.9</span>
            <span className="text__about">Average Rating</span>
          </li>
        </ul>
      </section>
      <section className="showcase__about">
        <h3 className="title__about__showcase">
            How It Works
        </h3>
        <p className="subtitle__about__showcase">
            How to create your professional resume
            in just three simple steps
        </p>
        <div className="about-display">
            {steps.map((step, i) => (
                <div key={i} className="about-card">
                    <div className="icon-wrapper">
                        <span className="about-icon">{step.icon}</span>
                    </div>
                    <span className="about-meta">{step.meta}</span>
                    <h4 className="about-title">{step.title}</h4>
                    <p className="about-desc">{step.howTo}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default About;
