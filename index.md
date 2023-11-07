# Campus Cravings

## Table of contents

* [Overview](#overview)
* [Deployment](#deployment)
* [User Guide](#user-guide)
* [Community Feedback](#community-feedback)
* [Development History](#development-history)
* [Continuous Integration](#continuous-integration)
* [Example enhancements](#example-enhancements)
* [Team](#team)

## Overview

Campus Cravings is a database of restaurants on and near the campus of UH Manoa which will include the names, location, menus, prices, hours of operation, and payment methods of each.  This database will significantly benefit UH Manoa students by providing a convenient and easily accessible resource for all things related to on-campus dining.  Including accounts for eatery owners will help maintain up-to-date and accurate restaurant information, enhancing the overall dining experience on campus.

## User Guide

This section provides a walkthrough of the Campus Cravings user interface and its capabilities.

### Landing Page

The landing page is presented to users when they visit the top-level URL to the site.

![](images/landing-page.png)

### Home Pages (User, Vendor, Admin)

Campus Cravings provides three separate home pages that present the contents of the database organized in various ways.

The user home page allows regular users to view the various restaurants and menus and select their favorites.

![](images/user-home.png)

The vendor home page allows the users affiliated to specific restaurants to add/edit menu items and adjust the prices. These users will still be able to utilize the same functions that the regular user has access to.

![](images/vendor-home.png)

Finally, the admin home page allows the admin to add/edit restaurants and verify restaurant admin accounts. Admin users will be able to utilize all functions that Campus Cravings provides.

![](images/admin-home.png)

### Sign in and sign up

Click on the "Login" button in the upper right corner of the navbar, then select "Sign in" to go to the following page and login. You must have been previously registered with the system to use this option:

![](images/signin-page.png)

Alternatively, you can select "Sign up" to go to the following page and register as a new user:

![](images/signup-page.png)

Signing up as a new user requires them to first set up their profile with their preferences in food. Specifically, what types of food to include or exclude based on factors such as ethnicity of the food, or vegan friendly. 

### User Profile

After clicking on a profile icon/button, you will be taken to the user profile page. This page is where users can change their preferences, or where vendors can change their choices for the day or otherwise modify their profile.

### Add Vendor page

Admin users can define new vendors with the Add Vendor page:

![](images/add-restaurant-page.png)

### List Restaurant page

All users can view all of the restaurants in the system with the List Restaurant page:

![](images/list-restaurant-page.png)

Restaurants are sorted by the type of food that they sell, and users can control the restaurants they see by editing their preferences. However, only admin users have access to the “edit” button, which allows them to edit the status of the restaurant.

![](images/edit-restaurant-page.png)

### Add Menu Item page

Vendors can define new menu items within their restaurant with the Add Menu Item page:

![](images/add-menu-item-page.png)

### Restaurant Location page

The locations of various restaurants (including food trucks) will be shown on a UH campus map and marked by the restaurant's logo:

![](images/restauraunt-map-page.png)

## Community Feedback (NEED TO CHANGE FORM URL)

We are interested in your experience using Campus Cravings!  If you would like, please take a couple of minutes to fill out the [Campus Cravings Feedback Form](https://forms.gle/hBHdccQEbm4YNfPd6). It contains only five short questions and will help us understand how to improve the system.

## From mockup to production (TODO)

Bowfolios is meant to illustrate the use of Meteor for developing an initial proof-of-concept prototype.  For a production application, several additional security-related changes must be implemented:

* Use of email-based password specification for users, and/or use of an alternative authentication mechanism.
* Use of https so that passwords are sent in encrypted format.
* Removal of the insecure package, and the addition of Meteor Methods to replace client-side DB updates.

(Note that these changes do not need to be implemented for ICS 314, although they are relatively straightforward to accomplish.)

## Continuous Integration (TODO)

![ci-badge](https://github.com/bowfolios/bowfolios/workflows/ci-bowfolios/badge.svg)

BowFolios uses [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) to automatically run ESLint and TestCafe each time a commit is made to the default branch.  You can see the results of all recent "workflows" at [https://github.com/bowfolios/bowfolios/actions](https://github.com/bowfolios/bowfolios/actions).

The workflow definition file is quite simple and is located at
[.github/workflows/ci.yml](https://github.com/bowfolios/bowfolios/blob/main/.github/workflows/ci.yml).

## Development History

The development process for Campus Cravings conformed to [Issue Driven Project Management](https://courses.ics.hawaii.edu/ics314f23/modules/project-management/) practices. In a nutshell:

* Development consists of a sequence of Milestones.
* Each Milestone is specified as a set of tasks.
* Each task is described using a GitHub Issue, and is assigned to a single developer to complete.
* Tasks should typically consist of work that can be completed in 2-4 days.
* The work for each task is accomplished with a git branch named "issue-XX", where XX is replaced by the issue number.
* When a task is complete, its corresponding issue is closed and its corresponding git branch is merged into master.
* The state (todo, in progress, complete) of each task for a milestone is managed using a GitHub Project Board.

The following sections document the development history of Campus Cravings.

### Milestone 1: Mockup development

The goal of Milestone 1 was to create a set of HTML pages providing a mockup of the pages in the system.

Milestone 1 was managed using [Campus Cravings GitHub Project Board M1](https://github.com/campuscravings/campus-cravings.github.io/projects/1):

![](images/project-board-1.png)

### Milestone 2: Data model development

The goal of Milestone 2 was to implement the data model: the underlying set of Mongo Collections and the operations upon them that would support the Campus Cravings application.

Milestone 2 was managed using [Campus Cravings GitHub Project Board M2](https://github.com/campuscravings/campus-cravings.github.io/projects/2):

![](images/project-board-2.png)

## Milestone 3: Final touches

The goal of Milestone 3 was to clean up the code base and fix minor UI issues.

Milestone 3 was managed using [Campus Cravings GitHub Project Board M3](https://github.com/campuscravings/campus-cravings.github.io/projects/3):

![](images/project-board-3.png)

As of the time of writing, this screenshot shows that there is an ongoing task (i.e. this writing).

## Example enhancements

There are a number of simple enhancements you can make to the system to become better acquainted with the codebase:

* provide search functionality for specific menu items and let you compare prices
* create mobile app version
* recent restaurant or menu item changes automatically updated and displayed on home pages
* MORE TO BE ADDED LATER

## Team

Campus Cravings will be designed, implemented, and maintained by [Johnathan Callejo](https://github.com/johnnyC808), [Kyle Bueche](https://github.com/kylebueche), [Cody Kau](https://github.com/qckapiu), and [Travis Quesenberry](https://github.com/TravisQuesenberry).

[Team Contract](https://docs.google.com/document/d/1ysidk97ZZfze5XyUyViEq0-vuA007ZVoCBbuy5-fYkg/edit?usp=sharing)
