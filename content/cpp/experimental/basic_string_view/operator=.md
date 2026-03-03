---
title: "std::experimental::basic_string_view<CharT,Traits>::operator="
source_path: "cpp/experimental/basic_string_view/operator"
category: "experimental"
---

Replaces the view with that of view.

## Declarations
```cpp
basic_string_view& operator=( const basic_string_view& view ) noexcept = default;
```
_(library fundamentals TS)_

## Parameters
- `view`: view to copy

## Return value
*this

## Example
```cpp
#include <iostream>
#include <experimental/string_view>
int main()
{
    std::experimental::string_view v = "Hello, world";
    v = v.substr(7);
    std::cout << v << '\n';
}
```

## See also
- [(constructor)](/cpp/experimental/basic_string_view/basic_string_view/)
