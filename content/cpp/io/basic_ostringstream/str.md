---
title: "std::basic_ostringstream<CharT,Traits,Allocator>::str"
source_path: "cpp/io/basic_ostringstream/str"
category: "io"
since: "C++20"
---

Manages the contents of the underlying string object.

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
template< class SAlloc >
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
template< class SAlloc >
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
- `s`: new contents of the underlying string
- `t`: an object (convertible to std::basic_string_view) to use as the new contents of the underlying string
- `a`: allocator used to construct the returned string

## Notes
The copy of the underlying string returned by [str](#top) is a temporary object that will be destructed at the end of the expression, so directly calling [c_str()](/cpp/string/basic_string/c_str/) on the result of str() (for example in auto *ptr = out.str().c_str();) results in a dangling pointer.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    int n;
 
    std::istringstream in; // could also use in("1 2")
    in.str("1 2");
    in >> n;
    std::cout << "After reading the first int from \"1 2\", the int is "
              << n << ", str() = \"" << in.str() << "\"\n";
 
    std::ostringstream out("1 2");
    out << 3;
    std::cout << "After writing the int '3' to output stream \"1 2\""
              << ", str() = \"" << out.str() << "\"\n";
 
    std::ostringstream ate("1 2", std::ios_base::ate);
    ate << 3;
    std::cout << "After writing the int '3' to append stream \"1 2\""
              << ", str() = \"" << ate.str() << "\"\n";
}
```

## See also
- [rdbuf](/cpp/io/basic_ostringstream/rdbuf/)
- [str](/cpp/io/basic_stringbuf/str/)
