---
title: "std::experimental::basic_string_view<CharT,Traits>::remove_suffix"
source_path: "cpp/experimental/basic_string_view/remove_suffix"
category: "experimental"
---

Moves the end of the view back by n characters.

## Declarations
```cpp
constexpr void remove_suffix( size_type n );
```
_(library fundamentals TS)_

## Parameters
- `n`: number of characters to remove from the end of the view

## Return value
(none)

## Example
```cpp
#include <experimental/string_view>
#include <iostream>
 
int main()
{
    char arr[] = {'a', 'b', 'c', 'd', '\0', '\0', '\0'};
    std::experimental::string_view v(arr, sizeof arr);
    auto trim_pos = v.find('\0');
    if (trim_pos != v.npos)
        v.remove_suffix(v.size() - trim_pos);
    std::cout << "Array: '" << arr << "', size=" << sizeof arr << '\n'
              << "View : '" << v << "', size=" << v.size() << '\n';
}
```

## See also
- [remove_prefix](/cpp/experimental/basic_string_view/remove_prefix/)
