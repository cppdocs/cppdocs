---
title: "std::istrstream::str"
source_path: "cpp/io/istrstream/str"
category: "io"
---

Returns the pointer to the beginning of the buffer, after freezing it. Effectively calls rdbuf()->str().

## Declarations
```cpp
char* str();
```
_(deprecated in C++98) (removed in C++26)_

## Return value
Pointer to the beginning of the buffer in the associated [std::strstreambuf](/cpp/io/strstreambuf/) or a null pointer if no buffer is available.

## Example
This section is incompleteReason: no example
