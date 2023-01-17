## Spring Boot information

Official Spring Boot Documentation - https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/
Spring Boot Project Information - https://spring.io/projects/spring-boot

Official Spring packages - https://repo.spring.io/ui/packages



### Steps to add Spring Jars to Java Projects in Eclipse  
1. Create a Java Project in Eclipse
2. To store the Spring jar files, create a new folder [say 'lib'] inside the project folder.
3. Download the jar files from Spring Repository -  
    a. Visit - https://repo.spring.io/ui/packages
    b. Artifactory -> Artifacts -> libs_release -> org -> springframework -> spring -> versionNumber[Folder]
    c. Open the latest version folder and download the 'dist.zip' file.
4. Unzip the downloaded file
5. Identify the jars in the 'lib' folder, inside the unzipped folder.
6. Copy all the jars from "unzipped_folder/lib" -> "project_folder/lib" inside Eclipse.

Additional step for "STANDALONE JAVA PROJECTS"
7. Add the JAR files to JAVA BUILD PATH. Steps-
    a. Select Project Name -> Right Mouse Click -> Properties[last option] -> Java Build Path -> Libraries 
    b. Select Classpath/Modulepath as required [If no modules are created select "Classpath"]
    c. Select "Add JARs"
    d. In the pop up choose, Project Name -> Expand lib -> Select all the jars present inside
    e. Click Ok
    f. Click "Apply and Close"

## Developing the new Spring Project
1. Create a new package
    a. Right Click on "src" folder inside the project directory.
    b. New -> Package
    c. Provide the necessary package name. Example- "com.<something>.<something>"
    d. Click Finish

2. Create classes in the new package
    a. Right click on the package name
    b. New -> Class
    c. Provide class Name

