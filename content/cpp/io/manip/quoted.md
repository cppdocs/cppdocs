---
title: "std::quoted"
source_path: "cpp/io/manip/quoted"
header: "<iomanip>"
category: "io"
since: "C++14"
---

Allows insertion and extraction of quoted strings, such as the ones found in [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) or [XML](https://en.wikipedia.org/wiki/XML).

## Declarations
```cpp
template< class CharT >
/*unspecified*/ quoted( const CharT* s,
CharT delim = CharT('"'), CharT escape = CharT('\\') );
```
_(since C++14)_

```cpp
template< class CharT, class Traits, class Allocator >
/*unspecified*/ quoted( const std::basic_string<CharT, Traits, Allocator>& s,
CharT delim = CharT('"'), CharT escape = CharT('\\') );
```
_(since C++14)_

```cpp
template< class CharT, class Traits>
/*unspecified*/ quoted( std::basic_string_view<CharT, Traits> s,
CharT delim = CharT('"'), CharT escape = CharT('\\') );
```
_(since C++17)_

```cpp
template< class CharT, class Traits, class Allocator >
/*unspecified*/ quoted( std::basic_string<CharT, Traits, Allocator>& s,
CharT delim=CharT('"'), CharT escape=CharT('\\') );
```
_(since C++14)_

## Parameters
- `s`: the string to insert or extract
- `delim`: the character to use as the delimiter, defaults to "
- `escape`: the character to use as the escape character, defaults to \

## Return value
Returns an object of unspecified type such that the described behavior takes place.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_quoted_string_io
201304L
(C++14)
std::quoted

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
void default_delimiter()
{
    const std::string in = "std::quoted() quotes this string and embedded \"quotes\" too";
    std::stringstream ss;
    ss << std::quoted(in);
    std::string out;
    ss >> std::quoted(out);
 
    std::cout << "Default delimiter case:\n"
                 "read in     [" << in << "]\n"
                 "stored as   [" << ss.str() << "]\n"
                 "written out [" << out << "]\n\n";
}
 
void custom_delimiter()
{
    const char delim{'$'};
    const char escape{'%'};
 
    const std::string in = "std::quoted() quotes this string and embedded $quotes$ $too";
    std::stringstream ss;
    ss << std::quoted(in, delim, escape);
    std::string out;
    ss >> std::quoted(out, delim, escape);
 
    std::cout << "Custom delimiter case:\n"
                 "read in     [" << in << "]\n"
                 "stored as   [" << ss.str() << "]\n"
                 "written out [" << out << "]\n\n";
}
 
int main()
{
    default_delimiter();
    custom_delimiter();
}
```

## See also
- [format](/cpp/utility/format/format/)
