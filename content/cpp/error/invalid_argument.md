---
title: "std::invalid_argument"
source_path: "cpp/error/invalid_argument"
header: "<stdexcept>"
category: "error"
---

Defines a type of object to be thrown as exception. It reports errors that arise because an argument value has not been accepted.

## Declarations
```cpp
class invalid_argument;
```

## Parameters
- `what_arg`: explanatory string
- `other`: another exception object to copy

## Return value
*this

## Notes
Because copying std::invalid_argument is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string. This is also why there is no constructor taking std::string&&: it would have to copy the content anyway.

Before the resolution of [LWG issue 254](https://cplusplus.github.io/LWG/issue254), the non-copy constructor can only accept [std::string](/cpp/string/basic_string/). It makes dynamic allocation mandatory in order to construct a [std::string](/cpp/string/basic_string/) object.

After the resolution of [LWG issue 471](https://cplusplus.github.io/LWG/issue471), a derived standard exception class must have a publicly accessible copy constructor. It can be implicitly defined as long as the explanatory strings obtained by what() are the same for the original object and the copied object.

## Example
```cpp
#include <bitset>
#include <iostream>
#include <stdexcept>
#include <string>
 
int main()
{
    try
    {
        std::bitset<4>{"012"}; // Throws: only '0' or '1' expected
    }
    catch (std::invalid_argument const& ex)
    {
        std::cout << "#1: " << ex.what() << '\n';
    }
 
    try
    {
        [[maybe_unused]] int f = std::stoi("ABBA"); // Throws: no conversion
    }
    catch (std::invalid_argument const& ex)
    {
        std::cout << "#2: " << ex.what() << '\n';
    }
 
    try
    {
        [[maybe_unused]] float f = std::stof("(3.14)"); // Throws: no conversion
    }
    catch (std::invalid_argument const& ex)
    {
        std::cout << "#3: " << ex.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 254 | C++98 | the constructor accepting const char* was missing | added |
| LWG 471 | C++98 | the explanatory strings of std::invalid_argument'scopies were implementation-defined | they are the same as that of theoriginal std::invalid_argument object |
