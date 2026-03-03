---
title: "std::strstreambuf::strstreambuf"
source_path: "cpp/io/strstreambuf/strstreambuf"
category: "io"
---

1) Constructs a std::strstreambuf object: initializes the base class by calling the default constructor of [std::streambuf](/cpp/io/basic_streambuf/), initializes the buffer state to "dynamic" (the buffer will be allocated as needed), initializes allocated size to the provided alsize, initializes the allocation and the deallocation functions to null (will use new[] and delete[]).

## Declarations
```cpp
explicit strstreambuf( std::streamsize alsize = 0 );
```
_(deprecated in C++98)(until C++11)_

```cpp
strstreambuf() : strstreambuf(0) {}
explicit strstreambuf( std::streamsize alsize );
```
_(since C++11)(removed in C++26)_

```cpp
strstreambuf( void* (*palloc)(std::size_t), void (*pfree)(void*) );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
strstreambuf( char* gnext, std::streamsize n, char* pbeg = 0 );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
strstreambuf( signed char* gnext, std::streamsize n, signed char* pbeg = 0 );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
strstreambuf( unsigned char* gnext, std::streamsize n, unsigned char* pbeg = 0 );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
strstreambuf( const char* gnext, std::streamsize n );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
strstreambuf( const signed char* gnext, std::streamsize n );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
strstreambuf( const unsigned char* gnext, std::streamsize n );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `alsize`: the initial size of the dynamically allocated buffer
- `palloc`: pointer to user-provided allocation function
- `pfree`: pointer to user-provided deallocation function
- `gnext`: pointer to the start of the get area in the user-provided array
- `pbeg`: pointer to the start of the put area in the user-provided array
- `n`: the number of bytes in the get area (if pbeg is null) or in the put area (if pbeg is not null) of the user-provided array

## Notes
These constructors are typically called by the constructors of [std::strstream](/cpp/io/strstream/).

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    std::strstreambuf dyn; // dynamic
    std::strstream dyn_s; // equivalent stream
    dyn_s << 1.23 << std::ends;
    std::cout << dyn_s.str() << '\n';
    dyn_s.freeze(false);
 
    char buf[10];
    std::strstreambuf user(buf, 10, buf); // user-provided output buffer
    std::ostrstream user_s(buf, 10); // equivalent stream
    user_s << 1.23 << std::ends;
    std::cout << buf << '\n';
 
    std::strstreambuf lit("1 2 3", 5); // constant
    std::istrstream lit_s("1 2 3"); // equivalent stream
    int i, j, k;
    lit_s >> i >> j >> k;
    std::cout << i << ' ' << j << ' ' << k << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |

## See also
- [(constructor)](/cpp/io/strstream/strstream/)
