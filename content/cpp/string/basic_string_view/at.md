---
title: "std::basic_string_view<CharT,Traits>::at"
source_path: "cpp/string/basic_string_view/at"
category: "string"
since: "C++17"
---

Returns a const reference to the character at specified location pos. Bounds checking is performed, exception of type [std::out_of_range](/cpp/error/out_of_range/) will be thrown on invalid access.

## Declarations
```cpp
constexpr const_reference at( size_type pos ) const;
```
_(since C++17)_

## Parameters
- `pos`: position of the character to return

## Return value
Const reference to the requested character.

## Example
```cpp
#include <iostream>
#include <stdexcept>
#include <string_view>
 
int main()
{
    std::string_view str_view("abcdef");
 
    try
    {
        for (std::size_t i = 0; true; ++i)
            std::cout << i << ": " << str_view.at(i) << '\n';
    }
    catch (const std::out_of_range& e)
    {
        std::cout << "Whooops. Index is out of range.\n";
        std::cout << e.what() << '\n';
    }
}
```

## See also
- [operator[]](/cpp/string/basic_string_view/operator_at/)
- [at](/cpp/string/basic_string/at/)
