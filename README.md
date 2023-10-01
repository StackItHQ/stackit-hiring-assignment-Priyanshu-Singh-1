# InSheet Flow 🧾
### Elevate Your Sheets✨✨, Elevate Your Data! ✨✨


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_IojtdoU)
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [x] My code's working just fine! 🥳
- [x] I have recorded a video showing it working and embedded it in the README ▶️
- [x] I have tested all the normal working cases 😎
- [x] I have even solved some edge cases (brownie points) 💪
- [x] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section

### My Approach 🔎

I have google a lot, and read about 100s of articles and youtube videos. From a ▶️ [youtube video](https://www.youtube.com/watch?v=4bLwqv6XcuQ), I got to know about App Scripts, and how to create Add-ons for google docs, sheets. I started refering these content and articles.
1. Started with the UI deisgn and finalising the minimal functionalities to have (later also added brownie points 🍪😋)
2. After this, I setup the code.gs file, and after this, I created the html file for uploading the files and javascript functions to handle it.
3. After, I created fucntionalities to allow users to upload a CSV file either by selecting it from their device or by dragging and dropping it into the designated area. Once uploaded, I parsed the CSV to read its contents. This will help in previewing the data and letting users select what they want.
4. I enabled and created div to display the headers of the CSV to the users. This gives them a preview of the data they're about to import. Thus providing the options for users to select specific rows and columns.
5. After the user made their selection, I imported the data in the active Gooogle Sheets. (Here I have used some *jugaad* - For large datasets, it was not able to insert the values, due to Google App Script limitation. So I used the chunking mechanism, to ensure breaking the data into chunks and inserting them sequentially. This reduced the error rate of uploading and parsing the file.

### Browie Points 🍪

1. Reduced the timing of uploading the large datasets, by using chunking method, in which instead of directly inserting all the data at the same time, I am taking size of 10 and inserting all it at once.
2. Added the method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet.

### Recorded Video 💪


https://github.com/StackItHQ/stackit-hiring-assignment-Priyanshu-Singh-1/assets/107169043/b86ce0fd-f586-4fb5-92fe-b387afe3f1d8


[Click Here](https://youtu.be/cADtHXwsFI4?si=XAXoWoAS2XFIBWg3) to watch the working!

**P.S** : In this video, I have explained it little detail, so the video length is little large😫, so I request you to please consider it.

