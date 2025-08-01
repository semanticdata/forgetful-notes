---
title: GitHub
compartir: false
---
## `.gitattributes`

```
# Apply override to all files in the directory
*.md linguist-detectable

# Auto detect text files and perform LF normalization
* text=auto eol=lf

# The above will handle all files NOT found below
# Documents
*.doc      diff=astextplain
*.DOC      diff=astextplain
*.docx     diff=astextplain
*.DOCX     diff=astextplain
*.dot      diff=astextplain
*.DOT      diff=astextplain
*.pdf      diff=astextplain
*.PDF      diff=astextplain
*.rtf      diff=astextplain
*.RTF      diff=astextplain
*.md       text diff=markdown
*.mdx      text diff=markdown
*.tex      text diff=tex
*.adoc     text
*.csv      text
*.txt      text
*.sql      text
*.epub     diff=astextplain

# Graphics
*.png      binary
*.jpg      binary
*.jpeg     binary
*.gif      binary
*.tif      binary
*.tiff     binary
*.ico      binary
# SVG treated as text by default.
*.svg    binary
# If you want to treat it as binary,
# use the following line instead.
# *.svg      text
*.eps      binary

# Scripts
*.bash     text eol=lf
*.sh       text eol=lf
# These are explicitly windows files and should use crlf
*.bat      text eol=crlf
*.cmd      text eol=crlf
*.ps1      text eol=crlf

# Serialisation
*.json     text
*.toml     text
*.xml      text
*.yaml     text
*.yml      text

# Archives
*.7z       binary
*.gz       binary
*.tar      binary
*.tgz      binary
*.zip      binary

# Text files where line endings should be preserved
*.patch    -text

# Lua Source files
*.lua       text

# Luadoc output
*.html      text diff=html
*.css       text diff=css

# Exclude files from exporting
.gitattributes export-ignore
.gitignore     export-ignore
.gitkeep       export-ignore
```

