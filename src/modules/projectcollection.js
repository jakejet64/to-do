import Project from './project.js'
import Task from './task.js'

export default class ProjectCollection {
  constructor() {
    this.projects = []
    this.projects.push(new Project('First Priority'))
    this.projects.push(new Project('Second Priority'))
    this.projects.push(new Project('Third Priority'))
  }

  setProjects(projects) {
    this.projects = projects
  }

  getProjects() {
    return this.projects
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName)
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName)
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name))
      return
    this.projects.push(newProject)
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find(
      (project) => project.getName() === projectName
    )
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
  }
}
