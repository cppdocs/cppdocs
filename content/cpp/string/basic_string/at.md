---
title: "std::basic_string<CharT,Traits,Allocator>::at"
source_path: "cpp/string/basic_string/at"
category: "string"
---

Returns a reference to the character at specified location pos. Bounds checking is performed, exception of type [std::out_of_range](/cpp/error/out_of_range/) will be thrown on invalid access.

## Declarations
```cpp
CharT& at( size_type pos );
```
_(constexpr since C++20)_

```cpp
const CharT& at( size_type pos ) const;
```
_(constexpr since C++20)_

## Parameters
- `pos`: position of the character to return

## Return value
Reference to the requested character.

## Example
```cpp
#include <iostream>
#include <stdexcept>
#include <string>
 
int main()
{
    std::string s("message"); // for capacity
 
    s = "abc";
    s.at(2) = 'x'; // OK
    std::cout << s << '\n';
 
    std::cout << "string size = " << s.size() << '\n';
    std::cout << "string capacity = " << s.capacity() << '\n';
 
    try
    {
        // This will throw since the requested offset is greater than the current size.
        s.at(3) = 'x';
    }
    catch (std::out_of_range const& exc)
    {
        std::cout << exc.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2207 | C++98 | the behavior was undefined if pos >= size() is true | always throws an exception in this case |

## See also
- [operator[]](/cpp/string/basic_string/operator_at/)
- [at](/cpp/string/basic_string_view/at/)
