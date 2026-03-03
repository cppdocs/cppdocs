---
title: "C++ keyword: alignof (since C++11)"
source_path: "cpp/keyword/alignof"
category: "keyword"
since: "C++11"
---

[alignof operator](/cpp/language/alignof/)

## Example
```cpp
#include <cstddef>
#include <iostream>
 
int main()
{
    std::cout << alignof(std::max_align_t) << '\n';
}
```

## See also
- [alignas](/cpp/keyword/alignas/)
