# Wcat
"wcat" Command that perform similar to "cat" command in LINUX

1) To view a single file 
Command: wcat file_name(abc.txt)

2) To view multiple files 
Command: wcat file_name1(abc.txt) file_name2(def.txt)

3) To view contents of a file preceding with line numbers
Command: wcat num file_name(abc.txt)

4) Create a file 
Command: wcat cr file_name(ghi.txt)

5) To suppress repeated empty lines in output
Command: wcat ne file_name(def.txt)

6) To write in already existing file
Command: wcat a abc.txt "THIS IS APPENDED CONTENT"

8) To display content in reverse order
Command: wcat rev abc.txt

9) To write in a existing file an deleting previous content
Command: wcat w def.txt "Hello this is newly added content"

