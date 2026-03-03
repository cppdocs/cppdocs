---
title: "operator>>(std::basic_istream)"
source_path: "cpp/io/basic_istream/operator"
header: "<istream>"
category: "io"
since: "C++20"
---

1,2) Performs character input operations.

## Declarations
```cpp
template< class CharT, class Traits >
basic_istream<CharT, Traits>&
operator>>( basic_istream<CharT, Traits>& st, CharT& ch );
template< class Traits >
basic_istream<char, Traits>&
operator>>( basic_istream<char, Traits>& st, signed char& ch );
template< class Traits >
basic_istream<char, Traits>&
operator>>( basic_istream<char, Traits>& st, unsigned char& ch );
```

```cpp
template< class CharT, class Traits>
basic_istream<CharT, Traits>&
operator>>( basic_istream<CharT, Traits>& st, CharT* s );
template< class Traits >
basic_istream<char, Traits>&
operator>>( basic_istream<char, Traits>& st, signed char* s );
template< class Traits >
basic_istream<char, Traits>&
operator>>( basic_istream<char, Traits>& st, unsigned char* s );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, std::size_t N >
basic_istream<CharT, Traits>&
operator>>( basic_istream<CharT, Traits>& st, CharT (&s)[N] );
template< class Traits, std::size_t N >
basic_istream<char, Traits>&
operator>>( basic_istream<char, Traits>& st, signed char (&s)[N] );
template< class Traits, std::size_t N >
basic_istream<char, Traits>&
operator>>( basic_istream<char, Traits>& st, unsigned char (&s)[N] );
```
_(since C++20)_

```cpp
template< class Istream, class T >
Istream&&
operator>>( Istream&& st, T&& value );
```
_(since C++11)_

## Parameters
- `st`: input stream to extract the data from
- `ch`: reference to a character to store the extracted character to
- `s`: pointer to(until C++20) a character array to store the extracted characters to

## Notes
Extracting a single character that is the last character of the stream does not set eofbit: this is different from other formatted input functions, such as extracting the last integer with operator>>, but this behavior matches the behavior of [std::scanf](/cpp/io/c/scanf/) with "%c" format specifier.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
int main()
{
    std::string input = "n greetings";
    std::istringstream stream(input);
 
    char c;
    const int MAX = 6;
    char cstr[MAX];
 
    stream >> c >> std::setw(MAX) >> cstr;
    std::cout << "c = " << c << '\n'
              << "cstr = " << cstr << '\n';
 
    double f;
    std::istringstream("1.23") >> f; // rvalue stream extraction
    std::cout << "f = " << f << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 13 | C++98 | the definition of n mentioned a non-existing name eos | replaced with CharT() |
| LWG 68 | C++98 | no null characters were stored at the end of the output for overload (2) | stores a null character |
| LWG 1203 | C++98 | overload for rvalue stream returned lvalue reference to the base class | returns rvalue referenceto the derived class |
| LWG 2328 | C++98 | overload for rvalue stream required another argument to be lvalue | made to accept rvalue |
| LWG 2534 | C++98 | overload for rvalue stream was not constrained | constrained |

## See also
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
