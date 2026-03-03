---
title: "std::stoi, std::stol, std::stoll"
source_path: "cpp/string/basic_string/stol"
header: "<string>"
category: "string"
since: "C++11"
---

Interprets a signed integer value in the string str.

## Declarations
```cpp
int stoi ( const std::string& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
int stoi ( const std::wstring& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
long stol ( const std::string& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
long stol ( const std::wstring& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
long long stoll( const std::string& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
long long stoll( const std::wstring& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

## Parameters
- `str`: the string to convert
- `pos`: address of an integer to store the number of characters processed
- `base`: the number base

## Return value
Integer value corresponding to the content of str.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <stdexcept>
#include <string>
#include <utility>
 
int main()
{
    const auto data =
    {
        "45",
        "+45",
        " -45",
        "3.14159",
        "31337 with words",
        "words and 2",
        "12345678901",
    };
 
    for (const std::string s : data)
    {
        std::size_t pos{};
        try
        {
            std::cout << "std::stoi(" << std::quoted(s) << "): ";
            const int i{std::stoi(s, &pos)};
            std::cout << i << "; pos: " << pos << '\n';
        }
        catch (std::invalid_argument const& ex)
        {
            std::cout << "std::invalid_argument::what(): " << ex.what() << '\n';
        }
        catch (std::out_of_range const& ex)
        {
            std::cout << "std::out_of_range::what(): " << ex.what() << '\n';
            const long long ll{std::stoll(s, &pos)};
            std::cout << "std::stoll(" << std::quoted(s) << "): " << ll
                      << "; pos: " << pos << '\n';
        }
    }
 
    std::cout << "\nCalling with different radixes:\n";
    for (const auto& [s, base] : {std::pair<const char*, int>
        {"11",  2}, {"22",  3}, {"33",  4}, {"77",  8},
        {"99", 10}, {"FF", 16}, {"jJ", 20}, {"Zz", 36}})
    {
        const int i{std::stoi(s, nullptr, base)};
        std::cout << "std::stoi(" << std::quoted(s)
                  << ", nullptr, " << base << "): " << i << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2009 | C++11 | std::out_of_range would not be thrown ifstd::strtol or std::strtoll sets errno to ERANGE | will throw |

## See also
- [stoulstoull](/cpp/string/basic_string/stoul/)
- [stofstodstold](/cpp/string/basic_string/stof/)
- [strtolstrtoll](/cpp/string/byte/strtol/)
- [strtoulstrtoull](/cpp/string/byte/strtoul/)
- [strtoimaxstrtoumax](/cpp/string/byte/strtoimax/)
- [std::intmax_t](/cpp/types/integer/)
- [std::uintmax_t](/cpp/types/integer/)
- [from_chars](/cpp/utility/from_chars/)
- [atoiatolatoll](/cpp/string/byte/atoi/)
- [to_string](/cpp/string/basic_string/to_string/)
- [to_wstring](/cpp/string/basic_string/to_wstring/)
