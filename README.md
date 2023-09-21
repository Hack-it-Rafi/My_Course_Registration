# Live link: https://vermillion-marigold-9178ad.netlify.app/
 
 # my-course-roster-Hack-it-Rafi


# Add at least 3 Project features:
1. If you select a course, it will be added in cart and show in a list form of all the selected courses.
2. Each course has a reading credit and total credit limit of selected courses is 20. So, you can't add more courses if credit exceeds total 20 credits.
3. The data of course details were fetched from a locally stored json file.
4. If you try to select more course that will exceed the credit limit, a toast will be shown with a message.

# Discuss how you managed the state in your assignment project.
1. I had used total 4 useState functions. 
    1. useState that return "courses, setCourses". It is to manage the course cards. First I fetch data from local json file, and use setCourses to store the information in courses. Then done mapping "courses".
    2. useState that return "selectCourses", "setSelectCourses". It is to add the selected courses in the right side of the website, in "Course name: " section. I used setSelectCourses to add courses in selectCourses, whenever user add select button of an available course.
    3. useState that return "totalCredit", "setTotalCredit". It is to count the total credit of the selected courses.
    4. useState that return "remainingCredit", "setRemainingCredit". It is to count the remaining credit.
    The "remainingCredit" is dependent on "totalCredit", so I used useEffect to calculate the remaining credit.
