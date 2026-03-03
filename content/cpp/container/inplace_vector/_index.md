---
title: "std::inplace_vector"
source_path: "cpp/container/inplace_vector"
header: "<inplace_vector>"
since: "C++26"
---

inplace_vector is a dynamically-resizable array with contiguous inplace storage. The elements of type T are stored and properly aligned within the object itself. The capacity of the internal storage is fixed at compile-time and is equal to N.

## Declarations
```cpp
template<
class T,
std::size_t N
> struct inplace_vector;
```
_(since C++26)_

## Notes
The number of elements in a inplace_vector may vary dynamically up to a fixed capacity because elements are stored within the object itself similarly to [std::array](/cpp/container/array/). However, objects are initialized as they are inserted into inplace_vector unlike C arrays or [std::array](/cpp/container/array/) , which must construct all elements on instantiation.

inplace_vector is useful in environments where dynamic memory allocations are undesired.

## Example
```cpp
#include <algorithm>
#include <array>
#include <cassert>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<int, 4> v1{0, 1, 2};
    assert(v1.max_size() == 4);
    assert(v1.capacity() == 4);
    assert(v1.size() == 3);
    assert(std::ranges::equal(v1, std::array{0, 1, 2}));
    assert(v1[0] == 0);
    assert(v1.at(0) == 0);
    assert(v1.front() == 0);
    assert(*v1.begin() == 0);
    assert(v1.back() == 2);
    v1.push_back(3);
    assert(v1.back() == 3);
    assert(std::ranges::equal(v1, std::array{0, 1, 2, 3}));
    v1.resize(3);
    assert(std::ranges::equal(v1, std::array{0, 1, 2}));
    assert(v1.try_push_back(3) != nullptr);
    assert(v1.back() == 3);
    assert(v1.size() == 4);
    assert(v1.try_push_back(13) == nullptr); // no place
    assert(v1.back() == 3);
    assert(v1.size() == 4);
    v1.clear();
    assert(v1.size() == 0);
    assert(v1.empty());
}
```

## See also
- [vector](/cpp/container/vector/)
- [array](/cpp/container/array/)
- [deque](/cpp/container/deque/)
