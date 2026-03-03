---
title: "gets, gets_s"
source_path: "c/io/gets"
header: "<stdio.h>"
category: "c"
---

1) Reads [stdin](/c/io/std_streams/) into the character array pointed to by str until a newline character is found or end-of-file occurs. A null character is written immediately after the last character read into the array. The newline character is discarded but not stored in the buffer.

## Declarations
```cpp
char* gets( char* str );
```
_(removed in C11)_

```cpp
char* gets_s( char* str, rsize_t n );
```
_(since C11)_

## Parameters
- `str`: a character array the characters from stdin to be written to
- `n`: maximum number of characters that can be written to the array pointed to by str

## Return value
str on success, a null pointer on failure.

## Notes
The gets() function does not perform bounds checking, therefore this function is extremely vulnerable to buffer-overflow attacks. It cannot be used safely (unless the program runs in an environment which restricts what can appear on stdin). For this reason, the function has been deprecated in the third corrigendum to the C99 standard and removed altogether in the C11 standard. [fgets()](/c/io/fgets/) and gets_s() are the recommended replacements.

WARNING: Never use gets().

## See also
- [scanffscanfsscanfscanf_sfscanf_ssscanf_s](/c/io/fscanf/)
- [stdin](/c/io/std_streams/)
- [fgets](/c/io/fgets/)
- [fputs](/c/io/fputs/)
- [getlinegetwlinegetdelimgetwdelim](/c/experimental/dynamic/getline/)
- [C++ documentation](/cpp/io/c/gets/)
