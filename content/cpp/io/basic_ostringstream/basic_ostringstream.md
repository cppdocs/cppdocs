---
title: "std::basic_ostringstream<CharT,Traits,Allocator>::basic_ostringstream"
source_path: "cpp/io/basic_ostringstream/basic_ostringstream"
category: "io"
since: "C++11"
---

Constructs new string stream.

## Declarations
```cpp
explicit basic_ostringstream( std::ios_base::openmode mode =
std::ios_base::out );
```
_(until C++11)_

```cpp
explicit basic_ostringstream( std::ios_base::openmode mode );
```
_(since C++11)_

```cpp
basic_ostringstream()
: basic_ostringstream(std::ios_base::out) {}
```
_(since C++11)_

```cpp
explicit basic_ostringstream
( const std::basic_string<CharT, Traits, Allocator>& str,
std::ios_base::openmode mode =
std::ios_base::out );
```

```cpp
explicit basic_ostringstream
( std::basic_string<CharT, Traits, Allocator>&& str,
std::ios_base::openmode mode =
std::ios_base::out );
```
_(since C++20)_

```cpp
basic_ostringstream( std::ios_base::openmode mode, const Allocator& a );
```
_(since C++20)_

```cpp
template< class SAlloc >
basic_ostringstream( const std::basic_string<CharT, Traits, SAlloc>& str,
std::ios_base::openmode mode, const Allocator& a );
```
_(since C++20)_

```cpp
template< class SAlloc >
basic_ostringstream( const std::basic_string<CharT, Traits, SAlloc>& str,
const Allocator& a )
: basic_ostringstream(str, std::ios_base::out, a) {}
```
_(since C++20)_

```cpp
template< class SAlloc >
explicit basic_ostringstream
( const std::basic_string<CharT, Traits, SAlloc>& str,
std::ios_base::openmode mode =
std::ios_base::out );
```
_(since C++20)_

```cpp
template< class StringViewLike >
explicit basic_ostringstream
( const StringViewLike& t,
std::ios_base::openmode mode =
std::ios_base::out );
```
_(since C++26)_

```cpp
template< class StringViewLike >
basic_ostringstream( const StringViewLike& t,
std::ios_base::openmode mode, const Allocator& a );
```
_(since C++26)_

```cpp
template< class StringViewLike >
basic_ostringstream( const StringViewLike& t, const Allocator& a );
```
_(since C++26)_

```cpp
basic_ostringstream( basic_ostringstream&& other );
```
_(since C++11)_

## Parameters
- `str`: string to use as initial contents of the string stream
- `t`: an object (convertible to std::basic_string_view) to use as initial contents of the string stream
- `a`: allocator used for allocating the contents of the string stream
- `mode`: specifies stream open mode. It is a BitmaskType, the following constants are defined: Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode
- `other`: another string stream to use as source

## Notes
Construction of one-off basic_ostringstream objects in a tight loop, such as when used for string conversion, may be significantly more costly than calling [str()](/cpp/io/basic_ostringstream/str/) to reuse the same object.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    // default constructor (input/output stream)
    std::stringstream buf1;
    buf1 << 7;
    int n = 0;
    buf1 >> n;
    std::cout << "buf1 = " << buf1.str() << " n = " << n << '\n';
 
    // input stream
    std::istringstream inbuf("-10");
    inbuf >> n;
    std::cout << "n = " << n << '\n';
 
    // output stream in append mode (C++11)
    std::ostringstream buf2("test", std::ios_base::ate);
    buf2 << '1';
    std::cout << buf2.str() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | the default constructor was explicit | made implicit |

## See also
- [str](/cpp/io/basic_ostringstream/str/)
- [(constructor)](/cpp/io/basic_stringbuf/basic_stringbuf/)
