function showResponse() {
    const question = document.getElementById('questionSelect').value;
    let response = '';

    switch(question) {
        case 'What is GCSE Engineering?':
            response = 'GCSE Engineering is a course that introduces students to the principles of engineering, covering design, manufacturing, materials, and sustainable practices. It provides a foundation for students who are interested in pursuing engineering at a higher level.';
            break;
        case 'What are the main topics in GCSE Engineering?':
            response = 'The main topics include materials science, mechanical systems, electrical systems, manufacturing processes, CAD (Computer-Aided Design), and sustainability in engineering.';
            break;
        case 'What is the structure of the GCSE Engineering exam?':
            response = 'The exam typically consists of multiple choice questions, short answer questions, and long answer questions that test your understanding of the core principles of engineering, design processes, and materials.';
            break;
        case 'What are the key skills needed for GCSE Engineering?':
            response = 'Key skills include problem-solving, creativity, critical thinking, technical drawing, CAD skills, knowledge of materials, and understanding manufacturing techniques.';
            break;
        case 'What is the importance of CAD in GCSE Engineering?':
            response = 'CAD (Computer-Aided Design) is important in engineering as it allows students to create accurate 2D and 3D models, visualise designs, and simulate performance, aiding in the development of engineering solutions.';
            break;
        case 'How can I prepare for the GCSE Engineering exam?':
            response = 'To prepare for the exam, focus on understanding the core concepts of engineering, practice using CAD software, review key materials and manufacturing processes, and work through past papers to familiarise yourself with the exam format.';
            break;
        case 'What is the significance of materials science in GCSE Engineering?':
            response = 'Materials science is crucial in engineering because it helps students understand the properties of different materials, which in turn informs decisions about which materials are best suited for specific applications in engineering projects.';
            break;
        case 'What are the key manufacturing processes in GCSE Engineering?':
            response = 'Key manufacturing processes include casting, welding, machining, additive manufacturing (3D printing), and assembly techniques. Understanding these processes is essential for designing and creating engineered products.';
            break;
        case 'What is the role of engineers in sustainable design?':
            response = 'Engineers play a vital role in sustainable design by ensuring that products and systems are energy-efficient, environmentally friendly, and use renewable resources. They work to reduce waste and improve the lifecycle of products.';
            break;
        case 'How is the GCSE Engineering coursework assessed?':
            response = 'The GCSE Engineering coursework is assessed through practical assignments where students apply their knowledge to real-world engineering problems. This includes designing, creating, and testing prototypes, as well as writing reports on the process.';
            break;
        case 'What are the exam techniques for GCSE Engineering?':
            response = 'Good exam techniques include reading each question carefully, using diagrams to support answers, managing your time efficiently, and reviewing your answers for any errors before submitting.';
            break;
        case 'What are the challenges in GCSE Engineering?':
            response = 'Challenges in GCSE Engineering may include mastering complex concepts, learning how to use CAD software, understanding the variety of materials and their properties, and keeping up with the practical aspects of coursework.';
            break;
        case 'What tools are commonly used in GCSE Engineering?':
            response = 'Common tools include hand tools like hammers, pliers, screwdrivers, precision tools for measuring and cutting, and CAD software for designing. Additionally, manufacturing tools like 3D printers, lathes, and CNC machines are also used in advanced coursework.';
            break;
        case 'What is the role of robotics in GCSE Engineering?':
            response = 'Robotics in GCSE Engineering teaches students about automation, programming, and the integration of robotics into manufacturing processes. Students learn to design, build, and program robots to perform specific tasks.';
            break;
        case 'What is the difference between mechanical and electrical engineering in GCSE?':
            response = 'Mechanical engineering focuses on designing and building machines, tools, and mechanical systems. Electrical engineering involves the design and implementation of electrical systems, circuits, and devices. Both branches require understanding of materials, design principles, and manufacturing processes.';
            break;
        case 'What are the ethical considerations in engineering design?':
            response = 'Ethical considerations in engineering design include ensuring safety, minimizing environmental impact, using sustainable materials, considering the welfare of users, and adhering to laws and regulations regarding engineering practices.';
            break;
        case 'How does sustainability impact engineering decisions?':
            response = 'Sustainability impacts engineering decisions by encouraging the use of renewable resources, energy-efficient designs, and materials that have a minimal environmental footprint. Engineers are encouraged to design solutions that reduce waste and promote long-term environmental health.';
            break;
        case 'What is the role of teamwork in GCSE Engineering projects?':
            response = 'Teamwork in GCSE Engineering projects is essential as it mirrors real-world engineering environments. Students collaborate, share ideas, and work together to solve problems, develop designs, and complete projects, mimicking the collaborative nature of professional engineering.';
            break;
        default:
            response = 'Sorry, please select a valid question from the dropdown menu.';
    }

    document.getElementById('response').innerText = response;
}