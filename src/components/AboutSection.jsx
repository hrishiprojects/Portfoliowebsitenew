import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me/<span className="text-primary"> Experience</span> 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Dynamic Web & Mobile Developer turning ideas into engaging digital experiences across every screen.
            </h3>

            <p className="text-muted-foreground">
            As a Pace University graduate with an MS in Computer Science,
             I have over a year of experience developing web and mobile applications, leveraging modern 
             technologies to deliver responsive, accessible, and high-performing digital solutions.
            </p>

            <p className="text-muted-foreground">
            I'm passionate about crafting elegant solutions to complex problems and continuously 
            learning new technologies to stay at the forefront of the tech landscape. I have built full-stack web applications using JavaScript, Python, and Next.js, 
            developed mobile apps with React Native, Kotlin, and iOS, and worked with a variety of databases including PostgreSQL, MongoDB, and Elasticsearch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase  className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Zevamp</h4>
                  <p className="text-muted-foreground">
                  I designed and integrated a scalable frontend using React.js and AWS, which improved platform performance by 25% and helped drive a 10% increase in sales.
                   Additionally, I optimized dynamic user interfaces with React.js and Tailwind CSS, resulting in an 18% boost in user engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase  className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Phurti.in</h4>
                  <p className="text-muted-foreground">
                  I developed a React Native app that leveraged the Google Distance Matrix API to optimize delivery routes, 
                  reducing logistics costs by 20% and boosting operational efficiency by 40%.
                   I also integrated Firebase Auth, which decreased sign-in times by 30% and significantly improved user satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Netaji Subhas University Of Technology</h4>
                  <p className="text-muted-foreground">
                  I led the development of an IoT prototype for campus water quality monitoring, increasing customer awareness by 30% and reducing complaints by 20%.
                   I also built a responsive React dashboard with Node.js for real-time sensor tracking and implemented a fast RESTful service with the ThingSpeak API, 
                   reducing system failures by 30%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};