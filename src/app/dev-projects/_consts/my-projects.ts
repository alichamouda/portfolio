import {ProjectDescription} from "../_models/project-description";

export const MyProjects: ProjectDescription[] = [
  {
    title: "Anters: University Platform",
    description: "This platform was created as an End-Of-Year project. <br><br> This platform allows student and teachers to organize their workflow" +
      " by making uploading and finding files easy, whether it's a lecture material or assignments. It also makes communication easy:" +
      "teachers and students can chat over subjects to ask a question or to clarify a point. <br><br>" +
      " This platform offers student club " +
      "the ability to create a website and fill it dynamically as a mini Content Management System." +
      "Student can also find volunteering offers relative to their interest." +
      "<br><br>Anters was created as a monolithic application than migrated to a microservice architecture." +
      "We also implemented a cookie-based JWT Authentication protocol.",
    tags: ["Angular", "NestJS", "JWT", "MongoDB", "REDIS","Microservices"],
    displayOnMain: true,
  },
  {
    title: "Hotel Project v1",
    description: "This project was created as part of a school J2EE project.<br><br> This apps is an administration system for hotel managers" +
      " allocate rooms and manage bookings.",
    tags: ["Springboot", "Thymeleaf", "MVC", "MySQL"],
    displayOnMain: true,
  },
  {
    title: "E2E Chat Application",
    description: "This project was created as part of a school system security project.<br><br>" +
      "E2E Chat App consists of an end-to-end encryption application using RSA asymmetric cryptography protocol. We used LDAP and a python server to " +
      "handle user routing.",
    tags: ["Flutter", "Angular", "Python", "RSA"],
    displayOnMain: true,
  },
  {
    title: "Kerberos gRPC light implementation",
    description: "I wanted to discover how gRPC works, I also had to know more about Kerberos authentication protocol. I made my research and " +
      "found that gRPC provides multiple ways for authentication but none of them use Kerberos. <br>So I created a python server to" +
      "simulate basic Kerberos authentication using gRPC.",
    tags: ["Python", "gRPC"],
    displayOnMain: true,
  },
  {
    title: "Hotel Project v2",
    description: "Desc",
    tags: ["PHP", "MySQL","HTML","CSS","JS"],
    displayOnMain: false,
  },
  {
    title: "Cardiovascular Risk Calculator",
    description: "As part of my internship with INEAS, I created a static progress web application to help physicians evaluate the need" +
      " to prescribe statins. <br>Part of the decision making algorithm was based on data from a research that released its results" +
      "as PDF 6-dimensional matrix. I used python to automate data extraction and Angular for the PWD.",
    tags: ["Angular", "PWA","Python"],
    displayOnMain: true,
  },
  {
    title: "Personal website",
    description: "Desc",
    tags: ["Angular"],
    displayOnMain: false,
  },
];
