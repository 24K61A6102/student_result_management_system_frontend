const SUBJECTS = [
    {
        code: "23AMMAT3010",
        name: "Discrete Mathematics & Graph Theory",
        credits: 3.0
    },

    {
        code: "23CMMST3020",
        name: "Universal Human Values",
        credits: 3.0
    },

    {
        code: "23AMAMT3030",
        name: "Artificial Intelligence",
        credits: 3.0
    },

    {
        code: "23AMAMT3040",
        name: "Advanced Data Structures & Algorithm Analysis",
        credits: 3.0
    },

    {
        code: "23AMAMT3050",
        name: "Object Oriented Programming Through Java",
        credits: 3.0
    },

    {
        code: "23AMAML3060",
        name: "Advanced Data Structures& Algorithm Analysis Lab",
        credits: 1.5
    },

    {
        code: "23AMAML3070",
        name: "Object Oriented Programming Through Java  Lab",
        credits: 1.5
    },

    {
        code: "23AMAMS3080",
        name: "Python Programming",
        credits: 2.0
    },

    {
        code: "23AMAMS3090",
        name: "Environmental Science",
        credits: 0.0
    }

];




// STUDENT DATABASE


 const students = {

"24K61A6101":{
    name:"A.GAYATHRI SAI PRAVALLIKA",
    marks:[85,86,72,87,83,84,78,92,95]
},

"24K61A6102":{
    name:"A.PAVITHRA",
    marks:[87,96,78,98,92,94,91,97,92]
},

"24K61A6103":{
    name:"ANVITHA ELURI",
    marks:[67,78,91,83,85,94,67,82,77]
},

"24K61A6104":{
    name:"BS CHANDRIKA L",
    marks:[92,87,84,76,85,82,89,95,99]
},

"24K61A6105":{
    name:"B.ADITHYA",
    marks:[76,75,72,68,64,69,78,73,85]
},

"24K61A6106":{
    name:"B.RUPESH RAJU",
    marks:[56,62,47,58,64,69,47,49,55]
},

"24K61A6107":{
    name:"B PRINCE BABU",
    marks:[47,52,38,22,45,37,41,45,19]
},

"24K61A6108":{
    name:"CH.JAHNAVI",
    marks:[80,65,59,49,52,64,67,82,47]
},

"24K61A6109":{
    name:"D.CHANDRASEKHAR",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6110":{
    name:"D.RENUKA",
    marks:[93,96,98,89,94,96,84,92,99]
},

"24K61A6112":{
    name:"G.LAVANYA",
    marks:[56,62,48,47,55,52,63,49,76]
},

"24K61A6113":{
    name:"G.ROHITH",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6114":{
    name:"J.DURGA BHAVANI",
    marks:[92,87,83,76,69,73,80,77,71]
},

"24K61A6115":{
    name:"K.VAMSI PRABHU",
    marks:[45,62,55,50,48,46,40,50,41]
},

"24K61A6116":{
    name:"K.HARI SAI",
    marks:[43,39,40,65,29,60,51,44,40]
},

"24K61A6117":{
    name:"K.NANDU",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6118":{
    name:"K.SURYA PRAKASH",
    marks:[80,65,59,49,52,64,67,82,47]
},

"24K61A6119":{
    name:"K.SANJANA",
    marks:[92,87,84,76,85,82,89,95,99]
},

"24K61A6120":{
    name:"K.THANVITA",
    marks:[47,52,38,22,45,37,41,45,19]
},

"24K61A6121":{
    name:"K.NAGA SAI SUJATHA",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6122":{
    name:"L DEVI PRASANNA",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6123":{
    name:"M.LEELA PAVANI",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6124":{
    name:"M.K.S.PURNIMA",
    marks:[45,62,55,50,48,46,40,50,41]
},

"24K61A6125":{
    name:"M.YASWANTH",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6126":{
    name:"M.KARTHIKA",
    marks:[92,87,83,76,69,73,80,77,71]
},

"24K61A6127":{
    name:"M.SONAM RAJ",
    marks:[19,56,45,37,22,58,47,66,43]
},

"24K61A6128":{
    name:"M.MOHANA PRIYA",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6129":{
    name:"M.N.V.PADMAVATHI",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6130":{
    name:"M.R.G.BHAVANI",
    marks:[65,45,77,56,62,59,88,61,60]
},

"24K61A6131":{
    name:"M.KOWSHIK",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6132":{
    name:"N.PUNYA KEERTHANA",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6133":{
    name:"N.HEMASRI",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6134":{
    name:"P.TANUJA",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6135":{
    name:"P.ASHITHA",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6136":{
    name:"P.MONIKA TEENA",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6137":{
    name:"SAMUEL POLISETTI",
    marks:[65,45,77,56,62,59,88,61,60]
},

"24K61A6138":{
    name:"P.NAVYASRI",
    marks:[92,87,83,76,69,73,80,77,71]
},

"24K61A6139":{
    name:"P.HEMA DURGASRI",
    marks:[76,68,94,65,75,72,77,79,80]
},

"24K61A6140":{
    name:"RAGHURAMSAI.P",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6141":{
    name:"R.GRACE",
    marks:[92,87,83,76,69,73,80,77,71]
},

"24K61A6142":{
    name:"S.PRUDHVI CHARAN",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6143":{
    name:"DK.SARA KAUSER",
    marks:[99,95,86,73,95,92,94,99,96]
},
"24K61A6144":{
    name:"SK.ABDUL ASHRAFUL",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6145":{
    name:"S.SANTOSH",
    marks:[45,62,55,50,48,46,40,50,41]
},

"24K61A6146":{
    name:"S.BHAVYA GEETHIKA",
    marks:[92,87,83,76,69,73,80,77,71]
},

"24K61A6147":{
    name:"T.MOUNIKA JAYA LAKSHMI",
    marks:[45,62,55,50,48,46,40,50,41]
},

"24K61A6148":{
    name:"T.HARSHAVARDHINI",
    marks:[92,87,84,76,85,82,89,95,99]
},

"24K61A6149":{
    name:"TATAPUDI RAJ VISHVANTH",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6151":{
    name:"T.KRISHNA PRASAD",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6152":{
    name:"T.S.S.RAMA KRISHNA",
    marks:[55,56,45,39,76,56,64,52,44]
},

"24K61A6153":{
    name:"U.HARSHITHA",
    marks:[92,87,83,76,69,73,80,77,71]
},

"24K61A6154":{
    name:"U.MAHALAKSHMI",
    marks:[45,52,51,49,50,40,45,53,54]
},

"24K61A6155":{
    name:"V.KARTHIK",
    marks:[87,67,56,89,74,75,77,83,76]
},

"24K61A6156":{
    name:"V.SURYA",
    marks:[45,55,39,27,19,45,55,29,30]
},

"24K61A6157":{
    name:"V.JYOTHI VARSHITHA",
    marks:[92,87,84,76,85,82,89,95,99]
},

"24K61A6158":{
    name:"V.BALA NANDHINI",
    marks:[45,62,55,50,48,46,40,50,41]
},

"24K61A6159":{
    name:"V.KUSUMA KEERTHANA",
    marks:[92,87,83,76,69,73,80,77,71]
},

"24K61A6160":{
    name:"V DATTA SAI CHARAN",
    marks:[45,62,55,50,48,46,40,50,41]
},

"24K61A6161":{
    name:"Y.LEELA KRISHNA VAMSI",
    marks:[45,62,55,50,48,46,40,50,41]
},

"24K61A6162":{
    name:"Y.SOLOMAN RAJU",
    marks:[56,63,69,52,53,57,61,48,60]
},

"24K61A6163":{
    name:"Y.SRI CHAITANYA",
    marks:[45,39,22,38,56,76,65,36,49]
},

"24K61A6164":{
    name:"Y.SUHASINI",
    marks:[67,78,56,76,67,56,44,89,59]
},

"24K65A6102":{
    name:"D.MOKSHA PRADHA",
    marks:[92,87,83,76,69,73,80,77,71]
},

"25K65A6101":{
    name:"B.MAHESH VARDHAN BABU",
    marks:[56,63,69,52,53,57,61,48,60]
},

"25K65A6102":{
    name:"K.RAJASRI",
    marks:[92,87,83,76,69,73,80,77,71]
},

"25K65A6103":{
    name:"P.YASWANTH SAI",
    marks:[19,56,45,37,22,58,47,66,43]
},

"25K65A6104":{
    name:"P.CHARAN KUMAR",
    marks:[45,52,51,29,50,40,45,53,54]
},

"25K65A6105":{
    name:"S.PREM KUMAR",
    marks:[76,75,72,68,64,69,78,73,85]
},

"25K65A6106":{
    name:"T.PRIYA MADHURI",
    marks:[56,63,69,52,53,57,61,48,60]
},

"25K65A6107":{
    name:"Y.SRINIVASU",
    marks:[19,56,45,37,22,58,47,66,43]
},

"25K65A6108":{
    name:"Y.VINAY KUMAR",
    marks:[56,76,64,63,78,45,55,68,79]
},

"23K61A6119":{
    name:"G.DIVYASRI",
    marks:[46,62,55,50,62,61,73,54,77]
},

"23K61A6104":{
    name:"SANTHOSH",
    marks:[30,29,43,38,56,64,22,65,45]
}

};


// GRADE FUNCTION

function getGrade(marks){

    if(marks >= 90){

        return {
            grade:"S",
            point:10
        };
    }

    else if(marks >= 80){

        return {
            grade:"A",
            point:9
        };
    }

    else if(marks >= 70){

        return {
            grade:"B",
            point:8
        };
    }

    else if(marks >= 60){

        return {
            grade:"C",
            point:7
        };
    }

    else if(marks >= 50){

        return {
            grade:"D",
            point:6
        };
    }

    else if(marks >= 40){

        return {
            grade:"E",
            point:5
        };
    }

    else{

        return {
            grade:"F",
            point:0
        };
    }
}




// MAIN FUNCTION

function getResult(){

    let htno = document.getElementById("hallticket").value.trim();

    let student = students[htno];

    let result = document.getElementById("result");



    // STUDENT FOUND

    if(student){

        let totalCredits = 0;

        let totalPoints = 0;

        let finalResult = "PASS";



        let output = `

        <div class="details">

            <h2>Student Result</h2>

            <p><b>Hall Ticket Number :</b> ${htno}</p>

            <p><b>Student Name :</b> ${student.name}</p>

        </div>



        <table>

            <tr>

                <th>Subject Code</th>

                <th>Subject Name</th>

                <th>Marks</th>

                <th>Credits</th>

                <th>Grade</th>

                <th>Grade Point</th>

            </tr>
        `;



        SUBJECTS.forEach((sub,index) => {

            let marks = student.marks[index];

            let gradeData = getGrade(marks);

            let grade = gradeData.grade;

            let point = gradeData.point;



            // FAIL CONDITION

            if(grade === "F"){

                finalResult = "FAIL";
            }



            // SGPA CALCULATION

            totalCredits += sub.credits;

            totalPoints += sub.credits * point;



            output += `

            <tr>

                <td>${sub.code}</td>

                <td>${sub.name}</td>

                <td>${marks}</td>

                <td>${sub.credits}</td>

                <td>${grade}</td>

                <td>${point}</td>

            </tr>
            `;
        });



        // SGPA

        let sgpa = (totalPoints / totalCredits).toFixed(2);



        output += `

        </table>



        <div class="sgpa">

            <p>Total Credits : ${totalCredits}</p>

            <p>SGPA : ${sgpa}</p>

            <p>

                Final Result :

                <span style="
                    color:${finalResult === "PASS" ? "green" : "red"};
                    font-size:28px;
                ">

                    ${finalResult}

                </span>

            </p>

        </div>



        <div class="buttons">

            <button onclick="searchAgain()">
                Search Again
            </button>

            <button onclick="goBack()">
                Go Back
            </button>

            <button onclick="downloadResult()">
                Download Result
            </button>

        </div>
        `;



        result.innerHTML = output;
    }



    // STUDENT NOT FOUND

    else{

        result.innerHTML = `

        <h2 style="
            color:red;
            text-align:center;
        ">

            Student Record Not Found

        </h2>
        `;
    }
}




// SEARCH AGAIN

function searchAgain(){

    document.getElementById("hallticket").value = "";

    document.getElementById("result").innerHTML = "";
}




// GO BACK

function goBack(){

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });
}


// DOWNLOAD RESULT

function downloadResult(){

    window.print();
}