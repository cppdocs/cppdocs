---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::basic_stringbuf"
source_path: "cpp/io/basic_stringbuf/basic_stringbuf"
category: "io"
since: "C++11"
---

The [std::basic_streambuf](/cpp/io/basic_streambuf/) base and the [exposition-only data members](/cpp/io/basic_stringbuf/#Exposition-only_members) buf and mode are initialized as follows.

## Declarations
```cpp
explicit basic_stringbuf( std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out );
```
_(until C++11)_

```cpp
explicit basic_stringbuf( std::ios_base::openmode which );
```
_(since C++11)_

```cpp
basic_stringbuf()
: basic_stringbuf( std::ios_base::in | std::ios_base::out ) {}
```
_(since C++11)_

```cpp
explicit
basic_stringbuf( const std::basic_string<CharT, Traits, Allocator>& s,
std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out );
```

```cpp
explicit basic_stringbuf( std::basic_string<CharT, Traits, Allocator>&& s,
std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out );
```
_(since C++20)_

```cpp
basic_stringbuf( std::ios_base::openmode which, const Allocator& a );
```
_(since C++20)_

```cpp
explicit basic_stringbuf( const Allocator& a )
: basic_stringbuf( std::ios_base::in | std::ios_base::out, a ) {}
```
_(since C++20)_

```cpp
template< class SAlloc >
explicit basic_stringbuf( const std::basic_string<CharT, Traits, SAlloc>& s,
std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out );
```
_(since C++20)_

```cpp
template< class SAlloc >
basic_stringbuf( const std::basic_string<CharT, Traits, SAlloc>& s,
std::ios_base::openmode which, const Allocator& a );
```
_(since C++20)_

```cpp
template< class SAlloc >
basic_stringbuf( const std::basic_string<CharT, Traits, SAlloc>& s,
const Allocator& a )
: basic_stringbuf( s, std::ios_base::in | std::ios_base::out, a ) {}
```
_(since C++20)_

```cpp
template< class StringViewLike >
explicit basic_stringbuf( const StringViewLike& t,
std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out );
```
_(since C++26)_

```cpp
template< class StringViewLike >
basic_stringbuf( const StringViewLike& t,
std::ios_base::openmode which, const Allocator& a );
```
_(since C++26)_

```cpp
template< class StringViewLike >
basic_stringbuf( const StringViewLike& t, const Allocator& a );
```
_(since C++26)_

```cpp
basic_stringbuf( basic_stringbuf&& rhs );
```
_(since C++11)_

```cpp
basic_stringbuf( basic_stringbuf&& rhs, const Allocator& a );
```
_(since C++20)_

```cpp
basic_stringbuf( const basic_stringbuf& rhs ) = delete;
```
_(since C++11)_

## Parameters
- `s`: a std::basic_string used to initialize the buffer
- `t`: an object (convertible to std::basic_string_view) used to initialize the buffer
- `a`: another allocator used to construct the internal std::basic_string
- `rhs`: another basic_stringbuf
- `which`: specifies stream open mode. It is bitmask type, the following constants are defined: Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode

## Notes
Typically called by the constructor of [std::basic_stringstream](/cpp/io/basic_stringstream/).

The level of support for the open modes other than [std::ios_base::in](/cpp/io/ios_base/openmode/) and [std::ios_base::out](/cpp/io/ios_base/openmode/) varies among implementations. C++11 explicitly specifies the support for [std::ios_base::ate](/cpp/io/ios_base/openmode/) in [str()](/cpp/io/basic_stringbuf/str/) and in this constructor, but [std::ios_base::app](/cpp/io/ios_base/openmode/), [std::ios_base::trunc](/cpp/io/ios_base/openmode/), and [std::ios_base::binary](/cpp/io/ios_base/openmode/) have different effects on different implementations.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    // default constructor (mode = in | out)
    std::stringbuf buf1;
    buf1.sputc('1');
    std::cout << &buf1 << '\n';
 
    // string constructor in at-end mode (C++11)
    std::stringbuf buf2("test", std::ios_base::in
                              | std::ios_base::out
                              | std::ios_base::ate);
    buf2.sputc('1');
    std::cout << &buf2 << '\n';
 
    // append mode test (results differ among compilers)
    std::stringbuf buf3("test", std::ios_base::in
                              | std::ios_base::out
                              | std::ios_base::app);
    buf3.sputc('1');
    buf3.pubseekpos(1);
    buf3.sputc('2');
    std::cout << &buf3 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 432 | C++98 | 1. overload (1) allocated no array object2. overload (3) did not specify how the input and output sequences are initialized | 1. removed the limitation2. specified |
| LWG 562 | C++98 | overload (3) set epptr() to point one past the last underlyingcharacter if bool(which & std::ios_base::out) == true | epptr() can be setbeyond that position |
| P0935R0 | C++11 | the default constructor was explicit | made implicit |

## See also
- [(constructor)](/cpp/io/basic_stringstream/basic_stringstream/)
