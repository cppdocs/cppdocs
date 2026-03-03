---
title: "operator<<(std::basic_ostream)"
source_path: "cpp/io/basic_ostream/operator"
header: "<ostream>"
category: "io"
since: "C++11"
---

Inserts a character or a character string.

## Declarations
```cpp
basic_ostream and character
```

```cpp
template< class CharT, class Traits >
basic_ostream<CharT, Traits>&
operator<<( basic_ostream<CharT, Traits>& os, CharT ch );
```

```cpp
template< class CharT, class Traits >
basic_ostream<CharT, Traits>&
operator<<( basic_ostream<CharT, Traits>& os, char ch );
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, char ch );
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, signed char ch );
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, unsigned char ch );
```

```cpp
basic_ostream and character array
```

```cpp
template< class CharT, class Traits >
basic_ostream<CharT, Traits>&
operator<<( basic_ostream<CharT, Traits>& os, const CharT* s );
```

```cpp
template< class CharT, class Traits >
basic_ostream<CharT, Traits>&
operator<<( basic_ostream<CharT, Traits>& os, const char* s );
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, const char* s );
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, const signed char* s );
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, const unsigned char* s );
```

```cpp
basic_ostream rvalue
```

```cpp
template< class Ostream, class T >
Ostream&& operator<<( Ostream&& os, const T& value );
```
_(since C++11)_

```cpp
deleted overloads for basic_ostream and UTF character/array
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, wchar_t ch ) = delete;
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, char8_t ch ) = delete;
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, char16_t ch ) = delete;
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, char32_t ch ) = delete;
```

```cpp
template< class Traits >
basic_ostream<wchar_t, Traits>&
operator<<( basic_ostream<wchar_t, Traits>& os, char8_t ch ) = delete;
```

```cpp
template< class Traits >
basic_ostream<wchar_t, Traits>&
operator<<( basic_ostream<wchar_t, Traits>& os, char16_t ch ) = delete;
```

```cpp
template< class Traits >
basic_ostream<wchar_t, Traits>&
operator<<( basic_ostream<wchar_t, Traits>& os, char32_t ch ) = delete;
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, const wchar_t* s ) = delete;
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, const char8_t* s ) = delete;
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, const char16_t* s ) = delete;
```

```cpp
template< class Traits >
basic_ostream<char, Traits>&
operator<<( basic_ostream<char, Traits>& os, const char32_t* s ) = delete;
```

```cpp
template< class Traits >
basic_ostream<wchar_t, Traits>&
operator<<( basic_ostream<wchar_t, Traits>& os, const char8_t* s ) = delete;
```

```cpp
template< class Traits >
basic_ostream<wchar_t, Traits>&
operator<<( basic_ostream<wchar_t, Traits>& os, const char16_t* s ) = delete;
```

```cpp
template< class Traits >
basic_ostream<wchar_t, Traits>&
operator<<( basic_ostream<wchar_t, Traits>& os, const char32_t* s ) = delete;
```

## Parameters
- `os`: output stream to insert data to
- `ch`: reference to a character to insert
- `s`: pointer to a character string to insert

## Notes
Before [LWG issue 1203](https://cplusplus.github.io/LWG/issue1203), code such as ([std::ostringstream](/cpp/io/basic_ostringstream/)() << 1.2).str() does not compile.

## Example
```cpp
#include <fstream>
#include <iostream>
 
void foo()
{
    // error: operator<< (basic_ostream<char, _Traits>&, char8_t) is deleted
//  std::cout << u8'z' << '\n';
}
 
std::ostream& operator<<(std::ostream& os, char8_t const& ch)
{
    return os << static_cast<char>(ch);
}
 
int main()
{
    std::cout << "Hello, world" // uses `const char*` overload
              << '\n';          // uses `char` overload
    std::ofstream{"test.txt"} << 1.2; // uses rvalue overload
 
    std::cout << u8'!' << '\n'; // uses program-defined operator<<(os, char8_t const&)
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 167 | C++98 | the number of characters inserted for alloverloads in (2) was traits::length(s) | updated the numbers for the overloadswhere CharT does not match the type of ch |
| LWG 1203 | C++11 | overload for rvalue stream returnedlvalue reference to the base class | returns rvalue referenceto the derived class |
| LWG 2011 | C++98 | padding was determined by std::num_put::do_put() | determined by the operator itself |
| LWG 2534 | C++11 | overload for rvalue stream was not constrained | constrained |

## See also
- [operator<<](/cpp/io/basic_ostream/operator_ltlt/)
- [print(std::ostream)](/cpp/io/basic_ostream/print/)
- [formatted](/cpp/utility/format/)
- [widen](/cpp/io/basic_ios/widen/)
