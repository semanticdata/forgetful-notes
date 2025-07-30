---
title: PATH
compartir: false
---
You can run the following command to change the PATH or other Environment Variables: `"C:\Windows\system32\rundll32.exe" sysdm.cpl,EditEnvironmentVariables`

I use the following script to add portable tools such as Git, Node.js, and Python to Windows PATH.

```shell
@echo off

rem Set the directory paths for Portable Git, Node.js, and Python
set gitdir=%~dp0PortableGit\cmd
set nodedir=%~dp0PortableNode
set pythondir=%~dp0PortablePython
set pythonscripts=%~dp0PortablePython\Scripts

rem Append the directory paths to the system's PATH variable
set path=%PATH%;%pythondir%;%gitdir%;%nodedir%;%pythonscripts%

rem Figure out versions for Git, Node.Js, NPM, and Python. The first one breaks apart the Git version to make it look nicer.
for /f "tokens=3-6 delims=. " %%a in ('git --version') do (set gitver1=%%a&set gitver2=%%b&set gitver3=%%c)
for /f "tokens=1" %%v in ('node -v') do set nodever=%%v
for /f "tokens=1" %%n in ('npm -v') do set npmver=%%n
for /f "tokens=2" %%p in ('python --version') do set pyver=%%p

echo Git Version = v%gitver1%.%gitver2%.%gitver3%
echo Node Version = %nodever%
echo NPM Version = v%npmver%
echo Python Version = v%pyver%

git config --global user.name "semanticdata"
git config --global user.email "contact@miguelpimentel.do"
```

It lives within the `tools` directory inside a Portable installation of VSCode.

```shell
@echo off

rem Set the directory paths for Portable Git, Node.js, Python, and Go
set gitdir=%~dp0PortableGit\cmd
set nodedir=%~dp0PortableNode
set pythondir=%~dp0PortablePython
set pythonscripts=%~dp0PortablePython\Scripts
set godir=%~dp0PortableGo\bin

rem Append the directory paths to the system's PATH variable
set path=%PATH%;%pythondir%;%gitdir%;%nodedir%;%pythonscripts%;%godir%

rem Figure out versions for Git, Node.Js, NPM, Python, and Go
for /f "tokens=3-6 delims=. " %%a in ('git --version') do (set gitver1=%%a&set gitver2=%%b&set gitver3=%%c)
for /f "tokens=1" %%v in ('node -v') do set nodever=%%v
for /f "tokens=1" %%n in ('npm -v') do set npmver=%%n
for /f "tokens=2" %%p in ('python --version 2^>^&1') do set pyver=%%p
for /f "tokens=3 delims= " %%g in ('go version') do set gover=%%g

rem Clean up the Go version to isolate the numeric part
set gover=%gover:go=%

echo Git Version = v%gitver1%.%gitver2%.%gitver3%
echo Node Version = %nodever%
echo NPM Version = v%npmver%
echo Python Version = v%pyver%
echo Go Version = %gover%

git config --global user.name "semanticdata"
git config --global user.email "contact@miguelpimentel.do"
```
