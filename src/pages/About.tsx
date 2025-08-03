import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Target, Heart, Lightbulb, Rocket, Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sanjana",
      role: "Founder & Developer",
      bio: "Computer Science student passionate about creating tools that help fellow students succeed.",
      avatar: "S"
    },
    {
      name: "Development Team",
      role: "Contributors",
      bio: "A growing community of student developers helping to build and improve Notezilla.",
      avatar: "DT"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access to question papers, notes, PPTs, and study materials for all subjects and semesters."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by students, for students. Every resource is contributed and verified by the community."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All uploads are reviewed and categorized to ensure high-quality, relevant content."
    },
    {
      icon: Target,
      title: "Exam Focused",
      description: "Resources organized by exam types (T1-T5, Summative, Labs) to match your study schedule."
    }
  ];

  const stats = [
    { number: "1000+", label: "Resources Shared" },
    { number: "500+", label: "Active Students" },
    { number: "50+", label: "Subjects Covered" },
    { number: "15+", label: "Courses Supported" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-academic-blue/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-academic-blue bg-clip-text text-transparent">
                Notezilla
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students with collaborative learning and comprehensive academic resources. 
              Built by students, for students.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Mission Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a collaborative platform where students can easily access, share, and contribute 
                academic resources. We believe in the power of peer-to-peer learning and aim to make 
                quality education materials accessible to all students, regardless of their background or resources.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Stats Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Story</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-8 h-8 text-academic-orange mr-3" />
                    <h3 className="text-xl font-semibold">The Beginning</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Notezilla was born from a simple observation: students everywhere were struggling to find 
                    quality study materials and previous year papers. As a computer science student, I realized 
                    the power of technology to solve this problem.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Rocket className="w-8 h-8 text-academic-green mr-3" />
                    <h3 className="text-xl font-semibold">The Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Today, Notezilla serves hundreds of students across multiple courses and years. 
                    Our vision is to become the go-to platform for academic resources, fostering a 
                    culture of knowledge sharing and collaborative learning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-academic-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-academic-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  Every decision we make is with our student community in mind.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-academic-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="text-muted-foreground">
                  We believe quality education should be accessible to everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-academic-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Together we learn faster and achieve more than alone.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary/5 to-academic-blue/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a growing community that's making education more accessible and collaborative. 
            Share your knowledge, help others, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-academic-blue hover:opacity-90">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </section>

        {/* Social Links */}
        <section className="text-center pt-8 border-t border-border">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;