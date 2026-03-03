---
title: "std::basic_string<CharT,Traits,Allocator>::data"
source_path: "cpp/string/basic_string/data"
category: "string"
---

Returns a pointer to the underlying array serving as character storage. The pointer is such that the range

## Declarations
```cpp
const CharT* data() const;
```
_(noexcept since C++11)(constexpr since C++20)_

```cpp
CharT* data() noexcept;
```
_(since C++17) (constexpr since C++20)_

## Return value
A pointer to the underlying character storage.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <cstring>
#include <string>
 
int main()
{
    std::string const s("Emplary");
    assert(s.size() == std::strlen(s.data()));
    assert(std::equal(s.begin(), s.end(), s.data()));
    assert(std::equal(s.data(), s.data() + s.size(), s.begin()));
    assert('\0' == *(s.data() + s.size()));
}
```

## See also
- [front](/cpp/string/basic_string/front/)
- [back](/cpp/string/basic_string/back/)
- [c_str](/cpp/string/basic_string/c_str/)
- [data](/cpp/string/basic_string_view/data/)
