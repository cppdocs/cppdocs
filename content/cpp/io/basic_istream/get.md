---
title: "std::basic_istream<CharT,Traits>::get"
source_path: "cpp/io/basic_istream/get"
category: "io"
---

Extracts character or characters from stream.

## Declarations
```cpp
int_type get();
```

```cpp
basic_istream& get( char_type& ch );
```

```cpp
basic_istream& get( char_type* s, std::streamsize count );
```

```cpp
basic_istream& get( char_type* s, std::streamsize count, char_type delim );
```

```cpp
basic_istream& get( basic_streambuf& strbuf );
```

```cpp
basic_istream& get( basic_streambuf& strbuf, char_type delim );
```

## Parameters
- `ch`: reference to the character to write the result to
- `s`: pointer to the character string to store the characters to
- `count`: size of character string pointed to by s
- `delim`: delimiting character to stop the extraction at. It is not extracted and not stored
- `strbuf`: stream buffer to read the content to

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream s1("Hello, world.");
    char c1 = s1.get(); // reads 'H'
    std::cout << "after reading " << c1 << ", gcount() == " <<  s1.gcount() << '\n';
 
    char c2;
    s1.get(c2);         // reads 'e'
    char str[5];
    s1.get(str, 5);     // reads "llo,"
    std::cout << "after reading " << str << ", gcount() == " <<  s1.gcount() << '\n';
 
    std::cout << c1 << c2 << str;
    s1.get(*std::cout.rdbuf()); // reads the rest, not including '\n'
    std::cout << "\nAfter the last get(), gcount() == " << s1.gcount() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 370 | C++98 | the effect of overload (5) was get(s, count, widen('\n')),which is the effect of overload (3) | corrected toget(strbuf, widen('\n')) |
| LWG 531 | C++98 | overloads (3,4) could not handle thecase where count is non-positive | no character isextracted in this case |

## See also
- [read](/cpp/io/basic_istream/read/)
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
- [operator>>(std::basic_istream)](/cpp/io/basic_istream/operator_gtgt2/)
