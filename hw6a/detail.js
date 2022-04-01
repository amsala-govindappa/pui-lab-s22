const c05430 {
    cnum: "05-430"
    cname: "Programming Usable Interfaces"
    units: 15
    description: "This course is combines lecture, and an intensive programming lab and design studio. It is for those who want to express their interactive ideas in working prototypes. It will cover the importance of human-computer interaction/interface design, iterative design, input/output techniques, how to design and evaluate interfaces, and research topics that will impact user interfaces in the future. In lab, you will learn how to design and program effective graphical user interfaces, and how to perform user tests. We will cover a number of prototyping tools and require prototypes to be constructed in each, ranging from animated mock-ups to fully functional programs. Assignments will require implementing UIs, testing that interface with users, and then modifying the interface based on findings. Some class sessions will feature design reviews of student work. This course is for HCII Masters students and HCI dual majors with a minimal programming background. Students will often not be professional programmers, but will need to interact with programmers."
    length: 80
    time: [9, 11]
    days: [1, 3]
    added: false
}

const c05410 {
    cnum: "05-410"
    cname: "User-Centered Research and Evaluation"
    units: 12
    description: "This course provides and overview and introduction to the field of human-computer interaction (HCI). It introduces students to tools, techniques, and sources of information about HCI and provides a systematic approach to design. The course increases awareness of good and bad design through observation of existing technology, and teaches the basic skills of task analysis, and analytic and empirical evaluation methods. This is a companion course to courses in visual design (05-650) and software implementation (05-630, 05-631)."
    length: 80
    time: [13, 15]
    days: [1, 3]
    added: false
}

const c05651 {
    cnum: "05-651"
    cname: "Interaction Design Studio 1"
    units: 12
    description: "This studio course introduces students to design thinking and the basic practices of interaction design. We follow a human-centered design process that includes research, concept generation, prototyping, and refinement. Students must work effectively as individuals and in small teams to design mobile information systems and other interactive experiences. Assignments approach design on three levels: specific user interactions, contexts of use, and larger systems. Students will become familiar with design methodologies such as sketching, storyboarding, wire framing, prototyping, etc. No coding is required."
    length: 80
    time: [11]
    days: [2, 4]
    added: false
}

const c05650 {
    cnum: "05-650"
    cname: "Interaction Design Studio 2"
    units: 12
    description: "This course follows Interaction Design Studio 1 (05-651). Students are expected to apply what they have learned about design thinking and methodologies as a starting point for all assignments. Students will work in teams to perform guerrilla research, synthesize data, and consider the needs of multiple stakeholders in their design of mobile services and other intelligent systems. Design concepts go beyond user interfaces to include sensors, controls, and ubiquitous computing. Emphasis is placed on the quality of the students’ ideas and their ability to give form to their design concepts. By completing and presenting their work, students will gain skills related to professional UX design practice."
    length: 80
    time: [15]
    days: [2, 4]
    added: false
}

let courses = [c05430, c05410, c05651, c05650]

let added = []

function init() {
    localStorage.setItem(cn05430, false)
    localStorage.setItem(cn05410, false)
    localStorage.setItem(cn05651, false)
    localStorage.setItem(cn05650, false)
}
