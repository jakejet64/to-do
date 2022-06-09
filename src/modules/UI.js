import Task from './task.js';
import Project from './project.js';
import ProjectCollection from './projectCollection.js';

import projectCollection from '../index.js';

export default class UI {
    static loadHomepage(){
        UI.addNewItemMenuButtons();
        UI.refreshProjects();
    }

    static addNewItemMenuButtons(){
        const addTaskMenu = document.querySelector('#addTaskMenu');
        const doneAddingTasks = document.querySelector('#doneAddingTasks');

        addTaskMenu.addEventListener('click', UI.openAddTaskMenu);
        doneAddingTasks.addEventListener('click', UI.closeAddTaskMenu);

        const addProjectMenu = document.querySelector('#addProjectMenu');
        const doneAddingProjects = document.querySelector('#doneAddingProjects');

        addProjectMenu.addEventListener('click', UI.openAddProjectMenu);
        doneAddingProjects.addEventListener('click', UI.closeAddProjectMenu);
        
        const addTask = document.querySelector('#addTask');
        const addProject = document.querySelector('#addProject');

        addProject.addEventListener('click', UI.addProject);


    }

    static refreshProjects() {
        document.querySelector('#projectContainer').innerHTML = '';
        let projects = projectCollection.getProjects();
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            const projectNameSpan = document.createElement('span');
            projectNameSpan.classList.add('projectName');
            projectNameSpan.textContent = project.getName();
            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.classList.add('deleteProject');
            deleteProjectButton.textContent = 'X';
            projectDiv.appendChild(projectNameSpan);
            projectDiv.appendChild(deleteProjectButton);
            document.getElementById('projectContainer').appendChild(projectDiv);
        });
        UI.refreshProjectDeleteButtons();
    }

    static refreshProjectDeleteButtons() {
        const projectDeleteButtons = document.querySelectorAll('.deleteProject');
        projectDeleteButtons.forEach(projectDeleteButton => projectDeleteButton.addEventListener('click', UI.deleteProject));
    }

    static deleteProject() {
        projectCollection.deleteProject(this.parentNode.children[0].textContent);
        UI.refreshProjects();
    }

    static addProject(){
        const name = document.querySelector('#newProjectName').value;
        if(name == '' || projectCollection.contains(name)){
            return;
        }
        projectCollection.addProject(new Project(name));
        console.log(`Project: '${name}' was added`);
        UI.refreshProjects();
    }

    static openAddTaskMenu(){
        document.querySelector('.addTask p').classList.remove('active');
        document.querySelectorAll('.addTask *:not(p)').forEach(element => element.classList.add('active'));
    }

    static closeAddTaskMenu(){
        document.querySelectorAll('.addTask *:not(p)').forEach(element => element.classList.remove('active'));
        document.querySelector('.addTask p').classList.add('active');
    }

    static openAddProjectMenu(){
        document.querySelector('.addProject p').classList.remove('active');
        document.querySelectorAll('.addProject *:not(p)').forEach(element => element.classList.add('active'));
    }

    static closeAddProjectMenu(){
        document.querySelectorAll('.addProject *:not(p)').forEach(element => element.classList.remove('active'));
        document.querySelector('.addProject p').classList.add('active');
    }
}