<%--
  Created by IntelliJ IDEA.
  User: MicroGT
  Date: 7/14/2020
  Time: 12:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Boot loader</title>
  <link rel="stylesheet" type="text/css" href="bootloader.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
  <script type="text/javascript" src="bootloader.js"></script>
</head>

<body>
<h1>CSE 190 M Boot Loader</h1>

<div id="container">
  <div id="loading">
    <img src="http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loading.gif" alt="Loading..." /> Loading...
  </div>
  <div id="boot"></div>
</div>

<div><button id="load">Load boot</button></div>
</body>
</html>
