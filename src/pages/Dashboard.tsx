import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Upload, Search, Filter, Calendar, User, MessageSquare } from "lucide-react";

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedExamType, setSelectedExamType] = useState("");

  // Mock data - will be replaced with Supabase data
  const mockResources = [
    {
      id: 1,
      title: "Data Structures T1 Question Paper",
      subject: "Data Structures",
      year: 2,
      semester: 3,
      examType: "T1",
      fileType: "PDF",
      uploadedBy: "John Doe",
      uploadDate: "2024-01-15",
      comments: 5
    },
    {
      id: 2,
      title: "Operating Systems Module 1 Notes",
      subject: "Operating Systems",
      year: 2,
      semester: 4,
      examType: "Module",
      fileType: "PDF",
      uploadedBy: "Jane Smith",
      uploadDate: "2024-01-10",
      comments: 12
    },
    {
      id: 3,
      title: "DBMS Lab External Viva Questions",
      subject: "Database Management",
      year: 3,
      semester: 5,
      examType: "Lab External",
      fileType: "DOCX",
      uploadedBy: "Mike Johnson",
      uploadDate: "2024-01-08",
      comments: 8
    }
  ];

  const years = [
    { value: "1", label: "1st Year" },
    { value: "2", label: "2nd Year" },
    { value: "3", label: "3rd Year" },
    { value: "4", label: "4th Year" }
  ];

  const examTypes = [
    "T1", "T2", "T3", "T4", "T5", "Summative", "Lab Internal", "Lab External", "Viva", "Module"
  ];

  const filteredResources = mockResources.filter(resource => {
    return (!selectedYear || resource.year.toString() === selectedYear) &&
           (!selectedSemester || resource.semester.toString() === selectedSemester) &&
           (!selectedSubject || resource.subject.toLowerCase().includes(selectedSubject.toLowerCase())) &&
           (!selectedExamType || resource.examType === selectedExamType);
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-academic-blue/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Browse and access academic resources</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-gradient-to-r from-primary to-academic-blue hover:opacity-90">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resource
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+20% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contributors</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">567</div>
              <p className="text-xs text-muted-foreground">Active this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,901</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comments</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
              <p className="text-xs text-muted-foreground">Questions answered</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter Resources
            </CardTitle>
            <CardDescription>
              Find specific resources by year, semester, subject, and exam type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year.value} value={year.value}>
                        {year.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Semester</label>
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                      <SelectItem key={sem} value={sem.toString()}>
                        Semester {sem}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="Search subjects..."
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Exam Type</label>
                <Select value={selectedExamType} onValueChange={setSelectedExamType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select exam type" />
                  </SelectTrigger>
                  <SelectContent>
                    {examTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedYear("");
                setSelectedSemester("");
                setSelectedSubject("");
                setSelectedExamType("");
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>

        {/* Resources List */}
        <Card>
          <CardHeader>
            <CardTitle>Available Resources</CardTitle>
            <CardDescription>
              {filteredResources.length} resources found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredResources.map(resource => (
                <div key={resource.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{resource.year}nd Year</Badge>
                        <Badge variant="secondary">Sem {resource.semester}</Badge>
                        <Badge variant="outline">{resource.examType}</Badge>
                        <Badge variant="outline">{resource.fileType}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span>Uploaded by {resource.uploadedBy}</span> • 
                        <span> {resource.uploadDate}</span> • 
                        <span> {resource.comments} comments</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Comments
                      </Button>
                      <Button size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;