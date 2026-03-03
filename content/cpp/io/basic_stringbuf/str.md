---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::str"
source_path: "cpp/io/basic_stringbuf/str"
category: "io"
since: "C++20"
---

Gets and sets the underlying string.

## Declarations
```cpp
std::basic_string<CharT, Traits, Allocator> str() const;
```
_(until C++20)_

```cpp
std::basic_string<CharT, Traits, Allocator> str() const&;
```
_(since C++20)_

```cpp
template<class SAlloc>
std::basic_string<CharT, Traits, SAlloc> str( const SAlloc& a ) const;
```
_(since C++20)_

```cpp
std::basic_string<CharT, Traits, Allocator> str() &&;
```
_(since C++20)_

```cpp
void str( const std::basic_string<CharT, Traits, Allocator>& s );
```

```cpp
template<class SAlloc>
void str( const std::basic_string<CharT, Traits, SAlloc>& s );
```
_(since C++20)_

```cpp
void str( std::basic_string<CharT, Traits, Allocator>&& s );
```
_(since C++20)_

```cpp
template< class StringViewLike >
void str( const StringViewLike& t );
```
_(since C++26)_

## Parameters
- `s`: a std::basic_string object holding the replacement character sequence
- `t`: an object (convertible to std::basic_string_view) holding the replacement character sequence
- `a`: allocator to use for all memory allocations of the returned std::basic_string

## Notes
This function is typically accessed through [std::basic_istringstream::str()](/cpp/io/basic_istringstream/str/), [std::basic_ostringstream::str()](/cpp/io/basic_ostringstream/str/), or [std::basic_stringstream::str()](/cpp/io/basic_stringstream/str/).

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    int n;
 
    std::istringstream in;  // could also use in("1 2")
    in.rdbuf()->str("1 2"); // set the get area
    in >> n;
    std::cout << "after reading the first int from \"1 2\", the int is " 
              << n << ", str() = \"" << in.rdbuf()->str() << "\"\n"; // or in.str()
 
    std::ostringstream out("1 2");
    out << 3;
    std::cout << "after writing the int '3' to output stream \"1 2\""
              << ", str() = \"" << out.str() << "\"\n";
 
    std::ostringstream ate("1 2", std::ios_base::ate); // C++11
    ate << 3;
    std::cout << "after writing the int '3' to append stream \"1 2\""
              << ", str() = \"" << ate.str() << "\"\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 432 | C++98 | 1. overload (1) did not specify the contentof the underlying character sequence2. overload (4) did not specify how theinput and output sequences are initialized | both specified |
| LWG 562 | C++98 | overload (4) set epptr() to point one past the last underlyingcharacter if bool(mode & std::ios_base::out) == true | epptr() can be setbeyond that position |

## See also
- [str](/cpp/io/basic_stringstream/str/)
- [view](/cpp/io/basic_stringbuf/view/)
