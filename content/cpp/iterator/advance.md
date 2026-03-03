---
title: "std::advance"
source_path: "cpp/iterator/advance"
header: "<iterator>"
category: "iterator"
since: "C++17"
---

Increments given iterator it by n elements.

## Declarations
```cpp
template< class InputIt, class Distance >
void advance( InputIt& it, Distance n );
```
_(until C++17)_

```cpp
template< class InputIt, class Distance >
constexpr void advance( InputIt& it, Distance n );
```
_(since C++17)_

## Parameters
- `it`: iterator to be advanced
- `n`: number of elements it should be advanced

## Return value
(none)

## Notes
The behavior is undefined if the specified sequence of increments or decrements would require that a non-incrementable iterator (such as the past-the-end iterator) is incremented, or that a non-decrementable iterator (such as the front iterator or the [singular](/cpp/iterator/#Dereferenceability_and_validity) iterator) is decremented.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main() 
{
    std::vector<int> v{3, 1, 4};
 
    auto vi = v.begin();
    std::advance(vi, 2);
    std::cout << *vi << ' ';
 
    vi = v.end();
    std::advance(vi, -2);
    std::cout << *vi << '\n';
}
```

## See also
- [next](/cpp/iterator/next/)
- [prev](/cpp/iterator/prev/)
- [distance](/cpp/iterator/distance/)
- [ranges::advance](/cpp/iterator/ranges/advance/)
