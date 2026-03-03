---
title: "std::begin(std::initializer_list)"
source_path: "cpp/utility/initializer_list/begin2"
header: "<initializer_list>"
category: "utility"
---

The overload of [std::begin](/cpp/iterator/begin/) for initializer_list returns a pointer to the first element of il.

## Declarations
```cpp
template< class E >
const E* begin( std::initializer_list<E> il ) noexcept;
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `il`: an initializer_list

## Return value
il.begin()

## Example
```cpp
#include <algorithm>
#include <initializer_list>
#include <iostream>
#include <iterator>
 
int main()
{
    std::initializer_list ϕ = {'1', '.', '6', '1', '8', '0'};
 
    std::copy(std::begin(ϕ),
              std::end(ϕ),
              std::ostream_iterator<char>(std::cout, ""));
 
    std::cout << '\n';
}
```

## See also
- [begin](/cpp/utility/initializer_list/begin/)
