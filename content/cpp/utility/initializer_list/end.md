---
title: "std::initializer_list<T>::end"
source_path: "cpp/utility/initializer_list/end"
category: "utility"
---

Obtains a pointer to one past the last element in the initializer list, i.e. [begin()](/cpp/utility/initializer_list/begin/)+ size().

## Declarations
```cpp
const T* end() const noexcept;
```
_(since C++11) (constexpr since C++14)_

## Return value
A pointer to one past the last element in the initializer list

## Example
```cpp
#include <initializer_list>
#include <numeric>
 
int main()
{
    static constexpr auto l = {3, 13, 13};
    static_assert(std::accumulate(l.begin(), l.end(), 13) == 42);
}
```

## See also
- [begin](/cpp/utility/initializer_list/begin/)
