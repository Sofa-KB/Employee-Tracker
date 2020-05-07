const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
// const db = require("./db")

runApp();

function runApp() {
    const Logo = logo({ name: "Employee Management System" }).render();
    console.log(Logo);

    startInquirer();
};

async function startInquirer() {
    const choice = await prompt([
        {
            type: "list",
            name: "choice",
            message: "Make a selection:",
            choices: [
                {
                    name: "View All Employees",
                    value: "All_Emp"
                },
                {
                    name: "View All Employees By Department",
                    value: "All_Dept"
                },
                {
                    name: "View All Employees By Manager",
                    value: "All_Mgr"
                },
                {
                    name: "Add Employee",
                    value: "Add_Emp"
                },
                {
                    name: "Remove Employee",
                    value: "Rmv_Emp"
                },
                {
                    name: "Update Employee Role",
                    value: "Upd_Emp_Role"
                },
                {
                    name: "Update Employee Manager",
                    value: "Upd_Emp_Mgr"
                },
                {
                    name: "View All Roles",
                    value: "All_Roles"
                },
                {
                    name: "Add Role",
                    value: "Add_Role"
                },
                {
                    name: "Remove Role",
                    value: "Rmv_Role"
                },
                {
                    name: "View All Departments",
                    value: "All_Dept"
                },
                {
                    name: "Add Department",
                    value: "Add_Dept"
                },
                {
                    name: "Remove Department",
                    value: "Rmv_Dept"
                },
                {
                    name: "Exit",
                    value: "terminate"
                }

            ]
        }
    ]);


    switch (choice) {
        case "All_Emp":
            return allEmp();
        case "All_Dept":
            return allDept();
        case "All_Mgr":
            return allMgr();
        case "Add_Emp":
            return addEmp();
        case "Rmv_Emp":
            return rmvEmp();
        case "Upd_Emp_Role":
            return updEmpRole();
        case "Upd_Emp_Mgr":
            return updEmpMgr();
        case "All_Roles":
            return allRoles();
        case "Add_Role":
            return addRole();
        case "Rmv_Role":
            return rmvRole();
        case "All_Dept":
            return allDept();
        case "Add_Dept":
            return addDept();
        case "Rmv_Dept":
            return rmvDept();
        case "terminate":
            return terminate();

    };
};


function allEmp() {
    // This is where the allEmployees() function will go.
};

function allDept() {
    // This is where the empByDept() function will go.
};

function allMgr() {
    // This is where the emp?ByMgr() function will go.
};

function addEmp() {
    // This is where the allEmp() function will go.
};

function rmvEmp() {
    // This is where the rmvEmp() function will go.
};

function updEmpRole() {
    // This is where the updEmp() function will go.
};

function updEmpMgr() {
    // This is where the updEmpMgr() function will go.
};

function allRoles() {
    // This is where the allRoles() function will go.
};

function addRole() {
    // This is where the addRole() function will go.
};

function rmvRole() {
    // This is where the rmvRole() function will go.
};

function allDept() {
    // This is where the allDept() function will go.
};

function addDept() {
    // This is where the addDept() function will go.
};

function rmvDept() {
    // This is where the rmvEmp() function will go.
};

function terminate() {
    console.log("Goodbye");
    process.exit();
};
