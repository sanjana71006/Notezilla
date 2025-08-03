import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Upload, MessageSquare, Users, FileText, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Access Module Banks",
      description: "Browse through comprehensive study materials for all subjects and semesters."
    },
    {
      icon: FileText,
      title: "Previous Papers",
      description: "Download previous year question papers for T1, T2, T3, T4, T5 exams and more."
    },
    {
      icon: Upload,
      title: "Upload Resources",
      description: "Share your notes, PPTs, and study materials with fellow students."
    },
    {
      icon: MessageSquare,
      title: "Discuss & Comment",
      description: "Ask questions and help others in our collaborative comment sections."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by students, for students. Join our growing academic community."
    },
    {
      icon: Award,
      title: "Organized Content",
      description: "Well-categorized resources by year, semester, subject, and exam type."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-academic-blue/5 to-academic-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-academic-blue bg-clip-text text-transparent">
                Notezilla
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your one-stop platform for college resources. Access module banks, previous papers, 
              upload study materials, and collaborate with fellow students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Resources
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need for Academic Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic resources, collaborative learning, and organized study materials 
              all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-academic-blue/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who are already using Notezilla to excel in their studies.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-primary to-academic-blue hover:opacity-90">
              Join Notezilla Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;