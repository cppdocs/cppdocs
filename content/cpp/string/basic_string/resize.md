---
title: "std::basic_string<CharT,Traits,Allocator>::resize"
source_path: "cpp/string/basic_string/resize"
category: "string"
---

Resizes the string to contain count characters.

## Declarations
```cpp
void resize( size_type count );
```
_(constexpr since C++20)_

```cpp
void resize( size_type count, CharT ch );
```
_(constexpr since C++20)_

## Parameters
- `count`: new size of the string
- `ch`: character to initialize the new characters with

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <stdexcept>
 
int main()
{
    const unsigned desired_length{8};
    std::string long_string("Where is the end?");
    std::string short_string("H");
 
    std::cout << "Basic functionality:\n"
              << "Shorten:\n"
              << "1. Before: " << std::quoted(long_string) << '\n';
    long_string.resize(desired_length);
    std::cout << "2. After:  " << std::quoted(long_string) << '\n';
 
    std::cout << "Lengthen with a given value 'a':\n"
              << "3. Before: " << std::quoted(short_string) << '\n';
    short_string.resize(desired_length, 'a');
    std::cout << "4. After:  " << std::quoted(short_string) << '\n';
 
    std::cout << "Lengthen with char() == " << static_cast<int>(char()) << '\n'
              << "5. Before: " << std::quoted(short_string) << '\n';
    short_string.resize(desired_length + 3);
    std::cout << "6. After:  \"";
    for (char c : short_string)
        std::cout << (c == char() ? '@' : c);
    std::cout << "\"\n\n";
 
    std::cout << "Errors:\n";
    std::string s;
 
    try
    {
        // size is OK, no length_error
        // (may throw bad_alloc)
        s.resize(s.max_size() - 1, 'x');
    }
    catch (const std::bad_alloc& ex)
    {
        std::cout << "1. Exception: " << ex.what() << '\n';
    }
 
    try
    {
        // size is OK, no length_error
        // (may throw bad_alloc)
        s.resize(s.max_size(), 'x');
    }
    catch (const std::bad_alloc& ex)
    {
        std::cout << "2. Exception: " << ex.what() << '\n';
    }
 
    try
    {
        // size is BAD, throw length_error
        s.resize(s.max_size() + 1, 'x');
    }
    catch (const std::length_error& ex)
    {
        std::cout << "3. Length error: " << ex.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2250 | C++98 | the behavior was undefined ifcount > max_size() is true | always throws an exception in this case |

## See also
- [sizelength](/cpp/string/basic_string/size/)
- [reserve](/cpp/string/basic_string/reserve/)
- [shrink_to_fit](/cpp/string/basic_string/shrink_to_fit/)
