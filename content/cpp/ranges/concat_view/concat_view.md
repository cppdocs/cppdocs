---
title: "std::ranges::concat_view<Views...>::concat_view"
source_path: "cpp/ranges/concat_view/concat_view"
category: "ranges"
since: "C++26"
---

## Declarations
```cpp
concat_view() = default;
```
_(since C++26)_

```cpp
constexpr concat_view( Views... views );
```
_(since C++26)_

## Parameters
- `views`: view objects to adapt

## Notes
In order to call the default constructor, Views must be explicitly provided and all types it contains must be default-initializable.

## Example
```cpp
#include <algorithm>
#include <ranges>
 
int main()
{
    using namespace std::ranges;
 
    static constexpr concat_view<empty_view<char>> concat1{}; // overload (1)
    static_assert(equal(concat1, views::empty<char>));
 
    static constexpr auto con = {'c', 'o', 'n'};
    static constexpr char cat[]{'c', 'a', 't', '\0'};
    static constexpr auto concat2{views::concat(con, cat)};   // overload (2)
    static_assert(equal(concat2, "concat"));
}
```
