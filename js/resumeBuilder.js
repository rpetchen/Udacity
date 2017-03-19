var bio = {
    "name": "Ryan petchenick",
    "role": "Systems Analyst/Front End Web Developer",
    "contacts": {
        "mobile": "703-380-5354",
        "email": "rpetchen@gmu.edu",
        "github": "Rpetchen",
        "location": "Leesburg, VA"
    },
    "welcomeMessage": "Welcome to My Resume!",
    "skills": ["Web Development", "HTML", "CSS", "Python", "JavaScript"],
    "bioPic": "images/ryan.png",
    display: function() {
        var myRole = bio.role;

        var formattedName = HTMLheaderName.replace("%data%", bio.name);

        $('#header').prepend('<span>' + myRole + '</span><hr>');
        $("#header").prepend(formattedName);

        var mobile = bio.contacts.mobile
        var formattedMobile = HTMLmobile.replace("%data%", mobile);
        var email = bio.contacts.email;
        var formattedEmail = HTMLemail.replace("%data%", email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").append(formattedMobile);

        $("#topContacts").append(formattedEmail);

        $("#topContacts").append(formattedGithub);

        $("#topContacts").append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

        $("#header").append(formattedBioPic);

        var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedwelcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skills) {
                var formattedSkills = HTMLskills.replace("%data%", (skills));
                $("#skills").append(formattedSkills);
            });
        }
    }
}

bio.display();


var work = {
    "jobs": [{
            "title": "Systems Analyst",
            "employer": "Freddie Mac",
            "location": "Mclean, VA",
            "dates": "2014-Current",
            "description": "Supported project initiation by evaluating for feasibility, level of effort, and scope",
            "moreDescription": ["Drove the requirements gathering process for a multiyear enterprise wide effort to productionalize EUC applications",
                "Served as product owner for the redesign of resecuritization systems using agile methodology as part of the the gov't mandated common securitization platform initiative"
            ]
        },
        {
            "title": "Systems Analyst",
            "employer": "Verizon",
            "location": "Ashburn, VA",
            "dates": "2012-2014",
            "description": "Managed and developed requirements for a state government contract estimated at over $100 million in additional revenue.",
            "moreDescription": ["Evaluated project requests to determine the following: feasibility, functional areas impacted, and dependencies.", "Coordinated and documented development efforts with the Portal's integrated and downstream applications and data stores."]
        }
    ],
    display: function() {
        work.jobs.forEach(function(entry) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", (entry.employer));
            var formattedTitle = HTMLworkTitle.replace("%data%", (entry.title));
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedworkDates = HTMLworkDates.replace("%data%", (entry.dates));
            var workDescription = HTMLworkDescription.replace("%data%", (entry.description));

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(workDescription);

            entry.moreDescription.forEach(function(descript) {
                var workDescription = HTMLworkDescription.replace("%data%", (descript));
                $(".work-entry:last").append(workDescription);
            });
        });
    }
}
work.display();


var education = {
    "schools": [{
            "name": "George Mason",
            "location": "Fairfax, VA",
            "degree": "BS",
            "major": "Management Information Systems",
            "dates": "2010-2012",
        },
        {
            "name": "Virginia Tech",
            "location": "Blacksburg, VA",
            "degree": "BA",
            "major": "History",
            "dates": "2005-2010",
        }
    ],
    "onlineCourses": [{
            "title": "Front End Developer NanoDegree",
            "school": "Udacity",
            "dates": "2017"
        },
        {
            "title": "Certified Mortgage Banker",
            "school": "Mortgage Bankers Association",
            "dates": "2016"
        }
    ],
    display: function() {
        education.schools.forEach(function(education) {
            $("#education").append(HTMLschoolStart);
            var name = HTMLschoolName.replace("%data%", (education.name));
            var degree = HTMLschoolDegree.replace("%data%", (education.degree));
            var dates = HTMLschoolDates.replace("%data%", (education.dates));
            var location = HTMLschoolLocation.replace("%data%", (education.location));
            var major = HTMLschoolMajor.replace("%data%", (education.major));
            var formattedEdu = name + degree + dates + location + major;
            $(".education-entry:last").append(formattedEdu);
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(online) {
            $("#education").append(HTMLschoolStart);
            var oName = HTMLonlineTitle.replace("%data%", (online.title));
            var oSchool = HTMLonlineSchool.replace("%data%", (online.school));
            var oDate = HTMLonlineDates.replace("%data%", (online.dates));



            $(".education-entry:last").append(oName + oSchool + oDate);


        });



    }
}

education.display();

var projects = {
    "projects": [{
            "title": "Portfolio Project",
            "dates": "2016-2017",
            "description": "Udacity Front End Developer Porfolio Project",
            "images": ["images/portfolio.png"]
        },

        {
            "title": "Online Resume",
            "dates": "2017",
            "description": "Udacity Front End Developer Resume",
            "images": ["images/resume.png"]
        }
    ],

    display: function() {
        projects.projects.forEach(function(proj) {
            $("#projects").append(HTMLprojectStart);
            var pTitle = HTMLprojectTitle.replace("%data%", (proj.title));
            var pDates = HTMLprojectDates.replace("%data%", (proj.dates));
            var pDesc = HTMLprojectDescription.replace("%data%", (proj.description));

            var formattedProj = pTitle + pDates + pDesc;

            $(".project-entry:last").append(formattedProj);

            proj.images.forEach(function(img) {
                var image = HTMLprojectImage.replace("%data%", (img));
                $(".project-entry:last").append(image);
            });

        });



    }
}

projects.display();

function inName(name) {
    name = name.split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    var intName = (name[0] + [" "] + name[1])
    return intName;
}

$('#main').append(internationalizeButton);


function locationizer() {
    var locationArray = [];


    work.jobs.forEach(function(job) {

        var newLocation = job.location;

        locationArray.push(newLocation);

    });

    return locationArray;

}


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
    // your code goes here
});


$("#education").append(HTMLschoolStart);



$("#mapDiv").append(googleMap);