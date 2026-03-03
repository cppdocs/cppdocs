---
title: "std::getline"
source_path: "cpp/string/basic_string/getline"
header: "<string>"
category: "string"
since: "C++11"
---

getline reads characters from an input stream and places them into a string:

## Declarations
```cpp
template< class CharT, class Traits, class Allocator >
std::basic_istream<CharT, Traits>&
getline( std::basic_istream<CharT, Traits>& input,
std::basic_string<CharT, Traits, Allocator>& str, CharT delim );
```

```cpp
template< class CharT, class Traits, class Allocator >
std::basic_istream<CharT, Traits>&
getline( std::basic_istream<CharT, Traits>&& input,
std::basic_string<CharT, Traits, Allocator>& str, CharT delim );
```
_(since C++11)_

```cpp
template< class CharT, class Traits, class Allocator >
std::basic_istream<CharT, Traits>&
getline( std::basic_istream<CharT, Traits>& input,
std::basic_string<CharT, Traits, Allocator>& str );
```

```cpp
template< class CharT, class Traits, class Allocator >
std::basic_istream<CharT, Traits>&
getline( std::basic_istream<CharT, Traits>&& input,
std::basic_string<CharT, Traits, Allocator>& str );
```
_(since C++11)_

## Parameters
- `input`: the stream to get data from
- `str`: the string to put the data into
- `delim`: the delimiter character

## Return value
input

## Notes
When consuming whitespace-delimited input (e.g. int n; [std::cin](/cpp/io/cin/) >> n;) any whitespace that follows, including a newline character, will be left on the input stream. Then when switching to line-oriented input, the first line retrieved with getline will be just that whitespace. In the likely case that this is unwanted behaviour, possible solutions include:

## Example
```cpp
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    // greet the user
    std::string name;
    std::cout << "What is your name? ";
    std::getline(std::cin, name);
    std::cout << "Hello " << name << ", nice to meet you.\n";
 
    // read file line by line
    std::istringstream input;
    input.str("1\n2\n3\n4\n5\n6\n7\n");
    int sum = 0;
    for (std::string line; std::getline(input, line);)
        sum += std::stoi(line);
    std::cout << "\nThe sum is " << sum << ".\n\n";
 
    // use separator to read parts of the line
    std::istringstream input2;
    input2.str("a;b;c;d");
    for (std::string line; std::getline(input2, line, ';');)
        std::cout << line << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 91 | C++98 | getline did not behave as an unformatted input function | behaves as an unformatted input function |

## See also
- [getline](/cpp/io/basic_istream/getline/)
