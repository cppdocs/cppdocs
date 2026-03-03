---
title: "std::basic_istream<CharT,Traits>::getline"
source_path: "cpp/io/basic_istream/getline"
category: "io"
---

Extracts characters from stream until end of line or the specified delimiter delim.

## Declarations
```cpp
basic_istream& getline( char_type* s, std::streamsize count );
```

```cpp
basic_istream& getline( char_type* s, std::streamsize count, char_type delim );
```

## Parameters
- `s`: pointer to the character string to store the characters to
- `count`: size of character string pointed to by s
- `delim`: delimiting character to stop the extraction at. It is extracted but not stored.

## Return value
*this

## Notes
Because condition #2 is tested before condition #3, the input line that exactly fits the buffer does not trigger failbit.

Because the terminating character is counted as an extracted character, an empty input line does not trigger failbit.

## Example
```cpp
#include <array>
#include <iostream>
#include <sstream>
#include <vector>
 
int main()
{
    std::istringstream input("abc|def|gh");
    std::vector<std::array<char, 4>> v;
 
    // note: the following loop terminates when std::ios_base::operator bool()
    // on the stream returned from getline() returns false
    for (std::array<char, 4> a; input.getline(&a[0], 4, '|');)
        v.push_back(a);
 
    for (auto& a : v)
        std::cout << &a[0] << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 531 | C++98 | std::getline could not handle thecase where count is non-positive | no character isextracted in this case |

## See also
- [getline](/cpp/string/basic_string/getline/)
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
- [get](/cpp/io/basic_istream/get/)
- [read](/cpp/io/basic_istream/read/)
