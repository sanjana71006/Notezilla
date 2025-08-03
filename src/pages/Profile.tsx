import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Edit, Upload, BookOpen, MessageSquare, Award, Calendar } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@college.edu",
    year: "2",
    course: "cse",
    bio: "Computer Science student passionate about algorithms and machine learning.",
    joinDate: "January 2024"
  });

  const [editData, setEditData] = useState(profileData);

  // Mock data - will be replaced with Supabase data
  const userStats = {
    uploads: 15,
    downloads: 248,
    comments: 32,
    likes: 89,
    contributions: 15
  };

  const recentUploads = [
    {
      id: 1,
      title: "Data Structures T1 Paper",
      subject: "Data Structures",
      uploadDate: "2024-01-15",
      downloads: 25,
      comments: 5
    },
    {
      id: 2,
      title: "OS Module 3 Notes",
      subject: "Operating Systems",
      uploadDate: "2024-01-10",
      downloads: 18,
      comments: 3
    },
    {
      id: 3,
      title: "DBMS Lab Viva Questions",
      subject: "Database Management",
      uploadDate: "2024-01-08",
      downloads: 32,
      comments: 8
    }
  ];

  const achievements = [
    { title: "First Upload", description: "Uploaded your first resource", earned: true },
    { title: "Helpful Contributor", description: "Received 50+ downloads", earned: true },
    { title: "Community Helper", description: "Left 25+ helpful comments", earned: true },
    { title: "Subject Expert", description: "Uploaded 10+ resources in one subject", earned: false }
  ];

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    // TODO: Save to Supabase
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-academic-blue/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-foreground">{profileData.name}</h1>
                <p className="text-muted-foreground">{profileData.year}nd Year {profileData.course.toUpperCase()} Student</p>
                <p className="text-sm text-muted-foreground">Member since {profileData.joinDate}</p>
              </div>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-4 md:mt-0"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="uploads">My Uploads</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Upload className="w-6 h-6 mx-auto mb-2 text-academic-blue" />
                  <div className="text-2xl font-bold">{userStats.uploads}</div>
                  <div className="text-xs text-muted-foreground">Uploads</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-6 h-6 mx-auto mb-2 text-academic-green" />
                  <div className="text-2xl font-bold">{userStats.downloads}</div>
                  <div className="text-xs text-muted-foreground">Downloads</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <MessageSquare className="w-6 h-6 mx-auto mb-2 text-academic-orange" />
                  <div className="text-2xl font-bold">{userStats.comments}</div>
                  <div className="text-xs text-muted-foreground">Comments</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{userStats.likes}</div>
                  <div className="text-xs text-muted-foreground">Likes</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <User className="w-6 h-6 mx-auto mb-2 text-destructive" />
                  <div className="text-2xl font-bold">{userStats.contributions}</div>
                  <div className="text-xs text-muted-foreground">Contributions</div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Information */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your academic and personal details</CardDescription>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={editData.name}
                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({...editData, email: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year">Year</Label>
                        <Select value={editData.year} onValueChange={(value) => setEditData({...editData, year: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Course</Label>
                        <Select value={editData.course} onValueChange={(value) => setEditData({...editData, course: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cse">CSE</SelectItem>
                            <SelectItem value="ece">ECE</SelectItem>
                            <SelectItem value="eee">EEE</SelectItem>
                            <SelectItem value="mech">Mechanical</SelectItem>
                            <SelectItem value="civil">Civil</SelectItem>
                            <SelectItem value="it">IT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={editData.bio}
                        onChange={(e) => setEditData({...editData, bio: e.target.value})}
                        rows={3}
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSave}>Save Changes</Button>
                      <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div><strong>Email:</strong> {profileData.email}</div>
                    <div><strong>Academic Year:</strong> {profileData.year}nd Year</div>
                    <div><strong>Course:</strong> {profileData.course.toUpperCase()}</div>
                    <div><strong>Bio:</strong> {profileData.bio}</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="uploads" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Uploads ({recentUploads.length})</CardTitle>
                <CardDescription>Resources you've shared with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUploads.map(upload => (
                    <div key={upload.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{upload.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="secondary">{upload.subject}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            {upload.uploadDate} • {upload.downloads} downloads • {upload.comments} comments
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Delete</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your milestones and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 ${
                        achievement.earned 
                          ? "border-academic-green bg-academic-green/5" 
                          : "border-border bg-muted/30"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Award className={`w-6 h-6 ${
                          achievement.earned ? "text-academic-green" : "text-muted-foreground"
                        }`} />
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Email Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Privacy Settings
                </Button>
                <Button variant="destructive" className="w-full justify-start">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;