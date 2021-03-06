<%--
  Created by IntelliJ IDEA.
  User: MicroGT
  Date: 7/14/2020
  Time: 3:03 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<!--
CSE 190M, Section 7: Pet-It
original page idea and code by Stefanie Hatcher
-->

<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  <title>Pet-It</title>

  <link href="pets.css" type="text/css" rel="stylesheet" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
  <script src="pets.js" type="text/javascript"></script>
</head>

<body>
<div id="banner">
  <img src="banner.jpg" alt="Pet-It Banner by Sylvia" />
</div>

<div id="main">
  <div class="column">
    <img id="pet" src="puppy.png" alt="cute puppy" />

    <ul id="breeds">
      <li>None selected yet.</li>
    </ul>
  </div>

  <div class="column">
    <h2>Choose the pet you would like to <q>aw</q> at:</h2>

    <div>
      <label>Dog <input id="dogs" type="radio" name="animal" /></label>
      <label>Cat <input id="cats" type="radio" name="animal" /></label>
    </div>

    <div id="show"></div>
  </div>
</div>

<div id="nextblob" class="blob">
  <h1>Next</h1>
  <img id="next" src="puppy.png" alt="cute puppy" />
</div>

<div id="w3c">
  <a href="http://validator.w3.org/check/referer"><img src="http://www.cs.washington.edu/education/courses/cse190m/10su/images/w3c_xhtml11.png" alt="Valid XHTML 1.1" /></a>
  <a href="http://jigsaw.w3.org/css-validator/check/referer"><img src="http://www.cs.washington.edu/education/courses/cse190m/10su/images/w3c_css.png" alt="Valid CSS" /></a>
  <a href="https://webster.cs.washington.edu/jslint/?referer"><img src="http://www.cs.washington.edu/education/courses/cse190m/10su/images/jslint.png" alt="JavaScript Lint" /></a>
</div>
</body>
</html>
