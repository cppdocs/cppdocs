---
title: "std::end(std::initializer_list)"
source_path: "cpp/utility/initializer_list/end2"
header: "<initializer_list>"
category: "utility"
---

The overload of [std::end](/cpp/iterator/end/) for initializer_list returns a pointer to one past the last element of il.

## Declarations
```cpp
template< class E >
const E* end( std::initializer_list<E> il ) noexcept;
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `il`: an initializer_list

## Return value
il.end()

## Example
```cpp
#include <cassert>
#include <initializer_list>
#include <iterator>
#include <numeric>
 
int main()
{
    std::initializer_list e = {2, 7, 1, 8, 2, 8, 1};
    assert(std::accumulate(std::begin(e), std::end(e), 13) == 42);
}
```

## See also
- [end](/cpp/utility/initializer_list/end/)
