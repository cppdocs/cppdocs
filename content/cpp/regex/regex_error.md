---
title: "std::regex_error"
source_path: "cpp/regex/regex_error"
header: "<regex>"
category: "regex"
since: "C++11"
---

Defines the type of exception object thrown to report errors in the regular expressions library.

## Declarations
```cpp
class regex_error;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <regex>
 
int main()
{
    try
    {
        std::regex re("[a-b][a");
    }
    catch (const std::regex_error& e)
    {
        std::cout << "regex_error caught: " << e.what() << '\n';
        if (e.code() == std::regex_constants::error_brack)
            std::cout << "The code was error_brack\n";
    }
}
```
