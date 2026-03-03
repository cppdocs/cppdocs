---
title: "operator<<,>>(std::basic_string)"
source_path: "cpp/string/basic_string/operator"
header: "<string>"
category: "string"
---

1) Behaves as a [FormattedOutputFunction](/cpp/named_req/formattedoutputfunction/). After constructing and checking the sentry object, [determines the output format padding](/cpp/named_req/formattedoutputfunction/#Padding).
Then inserts each character from the resulting sequence seq (the contents of str plus padding) to the output stream os as if by calling os.rdbuf()->sputn(seq, n), where n is [std::max](/cpp/algorithm/max/)(os.width(), str.size())
Finally, calls os.width(0) to cancel the effects of [std::setw](/cpp/io/manip/setw/), if any.
Equivalent to return os << [std::basic_string_view](/cpp/string/basic_string_view/)<CharT, Traits>(str);.
(since C++17)

## Declarations
```cpp
template< class CharT, class Traits, class Allocator >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::basic_string<CharT, Traits, Allocator>& str );
```

```cpp
template< class CharT, class Traits, class Allocator >
std::basic_istream<CharT, Traits>&
operator>>( std::basic_istream<CharT, Traits>& is,
std::basic_string<CharT, Traits, Allocator>& str );
```

## Parameters
- `os`: a character output stream
- `is`: a character input stream
- `str`: the string to be inserted or extracted

## Example
```cpp
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    std::string greeting = "Hello, whirled!";
    std::istringstream iss(greeting);
 
    std::string hello_comma, whirled, word;
 
    iss >> hello_comma;
    iss >> whirled;
 
    std::cout << greeting << '\n'
              << hello_comma << '\n' << whirled << '\n';
 
    // Reset the stream
    iss.clear();
    iss.seekg(0);
 
    while (iss >> word)
        std::cout << '+' << word << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 25 | C++98 | n was the smaller of os.width() and str.size() | n is the larger of them |
| LWG 90 | C++98 | std::isspace(c, getloc()) was used to checkfor spaces, but getloc is not declared in <string> | replaced getloc()with is.getloc() |
| LWG 91 | C++98 | operator>> did not behaveas a FormattedInputFunction | behaves as aFormattedInputFunction |
| LWG 211 | C++98 | operator>> did not set failbit if no character is extracted | sets failbit |
| LWG 435 | C++98 | characters were inserted by os.rdbuf()->sputn(str.data(), n),and the resolution of LWG issue 25 made the behaviorundefined if os.width() is larger than str.size() | determines the paddingfirst and inserts the paddedcharacter sequence instead |
| LWG 586 | C++98 | operator<< did not behaveas a FormattedOutputFunction | behaves as aFormattedOutputFunction |

## See also
- [operator<<](/cpp/string/basic_string_view/operator_ltlt/)
