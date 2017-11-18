import argparse
import os
import fileinput


myList=[]

with open('input1.txt','r') as fin:
    for line in fin.readlines():
        myList.append(line)
line=myList[0]
content="kuch bhi"
test =r'''\documentclass{article}
\usepackage[utf8]{inputenc}
\begin{document}
	\begin{titlepage}
    \begin{center}
        \vspace*{2.5cm}
        
        \textbf{%s}
        
        \vspace{1.5cm}
        
        \textbf{%s}
        
        \vfill
        
        Project Given By\\
        %s
        
        \vspace{0.8cm}
        
        %s\\
        %s\\
        
    \end{center}
\end{titlepage}
\end{document}'''%(myList[0],myList[1],myList[2],myList[3],myList[4])

c=r'''\n means
 new {%s}''' % line
print(c)
with open('preamble.tex','w') as fout:
    fout.write(test)