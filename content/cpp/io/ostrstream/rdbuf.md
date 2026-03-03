---
title: "std::ostrstream::rdbuf"
source_path: "cpp/io/ostrstream/rdbuf"
category: "io"
---

Returns a pointer to the associated [std::strstreambuf](/cpp/io/strstreambuf/), casting away its constness (despite the const qualifier on the member function).

## Declarations
```cpp
strstreambuf* rdbuf() const;
```
_(deprecated in C++98) (removed in C++26)_

## Return value
Pointer to the associated [std::strstreambuf](/cpp/io/strstreambuf/), with constness cast away.

## Example
```cpp
#include <strstream>
 
int main()
{
    const std::ostrstream buf;
    std::strstreambuf* ptr = buf.rdbuf();
}
```
