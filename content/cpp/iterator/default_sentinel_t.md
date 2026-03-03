---
title: "std::default_sentinel_t, std::default_sentinel"
source_path: "cpp/iterator/default_sentinel_t"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

1) default_sentinel_t is an empty class type used to denote the end of a range. It can be used together with iterator types that know the bound of their range (e.g., [std::counted_iterator](/cpp/iterator/counted_iterator/)).

## Declarations
```cpp
struct default_sentinel_t {};
```
_(since C++20)_

```cpp
inline constexpr default_sentinel_t default_sentinel{};
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <list>
 
int main()
{
    std::list<int> l{3, 1, 4, 1, 5, 9, 2, 6};
 
    std::ranges::copy(std::counted_iterator(std::begin(l), 4),
        std::default_sentinel, std::ostream_iterator<int>{std::cout, " "});
    std::cout << '\n';
}
```

## See also
- [istream_iterator](/cpp/iterator/istream_iterator/)
- [std::basic_istream](/cpp/io/basic_istream/)
- [istreambuf_iterator](/cpp/iterator/istreambuf_iterator/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
- [counted_iterator](/cpp/iterator/counted_iterator/)
