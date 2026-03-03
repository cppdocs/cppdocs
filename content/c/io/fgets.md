---
title: "fgets"
source_path: "c/io/fgets"
header: "<stdio.h>"
category: "c"
---

Reads at most count - 1 characters from the given file stream and stores them in the character array pointed to by str. Parsing stops if a newline character is found (in which case str will contain that newline character) or if end-of-file occurs. If bytes are read and no errors occur, writes a null character at the position immediately after the last character written to str.

## Declarations
```cpp
char* fgets( char* str, int count, FILE* stream );
```
_(until C99)_

```cpp
char* fgets( char* restrict str, int count, FILE* restrict stream );
```
_(since C99)_

## Parameters
- `str`: pointer to an element of a char array
- `count`: maximum number of characters to write (typically the length of str)
- `stream`: file stream to read the data from

## Return value
str on success, null pointer on failure.

## Notes
[POSIX additionally requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fgets.html) that fgets sets [errno](/c/error/errno/) if a read error occurs.

Although the standard specification is [unclear](https://stackoverflow.com/questions/23388620) in the cases where count <= 1, common implementations do

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    FILE* tmpf = tmpfile();
    fputs("Alan Turing\n", tmpf);
    fputs("John von Neumann\n", tmpf);
    fputs("Alonzo Church\n", tmpf);
 
    rewind(tmpf);
 
    char buf[8];
    while (fgets(buf, sizeof buf, tmpf) != NULL)
          printf("\"%s\"\n", buf);
 
    if (feof(tmpf))
       puts("End of file reached");
}
```

## See also
- [scanffscanfsscanfscanf_sfscanf_ssscanf_s](/c/io/fscanf/)
- [stdin](/c/io/std_streams/)
- [getsgets_s](/c/io/gets/)
- [stdin](/c/io/std_streams/)
- [fputs](/c/io/fputs/)
- [getlinegetwlinegetdelimgetwdelim](/c/experimental/dynamic/getline/)
- [C++ documentation](/cpp/io/c/fgets/)
