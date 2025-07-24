import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Server,
  Globe,
} from 'lucide-react';
import ImageSlider from './ImageSlider';
import { portfolioData } from '@/data/portfolio';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across frontend and backend
            development
          </p>
        </div>

        <Tabs defaultValue="backend" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="backend" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              Backend Projects
            </TabsTrigger>
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Frontend Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    <ImageSlider images={project.images} alt="Images" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {/* Conditionally show Live Demo button only if liveUrl exists */}
                      {project.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend">
            <div className="space-y-6">
              {portfolioData.backend.map((project, index) => (
                <Card
                  key={project.id}
                  className="hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <project.icon className="h-6 w-6" />
                        </div> */}
                        <div>
                          <CardTitle className="text-xl font-semibold">
                            {project.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">
                            {project.description}
                          </p>
                        </div>
                      </div>
                        <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleProject(project.id)}
                        className="ml-4 flex items-center gap-2"
                        aria-expanded={expandedProject === project.id}
                        >
                        {expandedProject === project.id ? (
                          <>
                          Collapse <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                          Expand <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                        </Button>
                      </div>
                      </CardHeader>
                      <CardContent>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 mb-4">
                        {project.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                          </a>
                        </Button>
                        )}
                        <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                        </Button>
                      </div>
                      {expandedProject === project.id && (
                        <div className="mt-6 space-y-6 border-t border-border pt-6 animate-fade-in">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Vision</h4>
                          <p className="text-muted-foreground">{project.expandedContent.vision}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Unique Value</h4>
                          <p className="text-muted-foreground">{project.expandedContent.uniqueValue}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Core Innovations</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {project.expandedContent.coreInnovations.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Technical Architecture</h4>
                          <div className="space-y-2 text-muted-foreground">
                            <div><strong>Overview:</strong> {project.expandedContent.technicalArchitecture.overview}</div>
                            <div>
                              <strong>Services:</strong>
                              <ul className="list-disc pl-5">
                                {project.expandedContent.technicalArchitecture.services.map((svc, i) => (
                                  <li key={i}>{svc}</li>
                                ))}
                              </ul>
                            </div>
                            <div><strong>Android App:</strong> {project.expandedContent.technicalArchitecture.androidApp}</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Business Model</h4>
                          <div className="space-y-2 text-muted-foreground">
                            <div><strong>Revenue Stream:</strong> {project.expandedContent.businessModel.revenueStream}</div>
                            <div><strong>Psychology Edge:</strong> {project.expandedContent.businessModel.psychologyEdge}</div>
                            <div><strong>Market Position:</strong> {project.expandedContent.businessModel.marketPosition}</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Development Journey</h4>
                          <div className="space-y-2 text-muted-foreground">
                            <div><strong>Conception:</strong> {project.expandedContent.developmentJourney.conception}</div>
                            <div><strong>Planning:</strong> {project.expandedContent.developmentJourney.planning}</div>
                            <div><strong>Execution:</strong> {project.expandedContent.developmentJourney.execution}</div>
                            <div><strong>Validation:</strong> {project.expandedContent.developmentJourney.validation}</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenges Solved</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {project.expandedContent.challengesSolved.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Future Roadmap</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {project.expandedContent.futureRoadmap.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Competitive Edge</h4>
                          <p className="text-muted-foreground">{project.expandedContent.competitiveEdge}</p>
                        </div>
                        </div>
                      )}
                      </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
