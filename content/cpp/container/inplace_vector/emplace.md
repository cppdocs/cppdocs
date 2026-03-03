---
title: "std::inplace_vector<T,N>::emplace"
source_path: "cpp/container/inplace_vector/emplace"
category: "container"
since: "C++26"
---

Inserts a new element into the container directly before pos. Typically, the element is constructed uses placement-new to construct the element in-place at the location provided by the container. The arguments args... are forwarded to the constructor as [std::forward](/cpp/utility/forward/)<Args>(args)....

## Declarations
```cpp
template< class... Args >
constexpr iterator emplace( const_iterator position, Args&&... args );
```
_(since C++26)_

## Parameters
- `pos`: iterator before which the new element will be constructed
- `args`: arguments to forward to the constructor of the element

## Return value
An iterator to the inserted element.

## Example
```cpp
#include <cassert>
#include <inplace_vector>
#include <new>
#include <utility>
 
int main()
{
    using P = std::pair<int, int>;
    using I = std::inplace_vector<P, 3>;
    auto nums = I{{0, 1}, {2, 3}};
 
    auto it = nums.emplace(nums.begin() + 1, -1, -2);
    assert((*it == P{-1, -2}));
    assert((nums == I{P{0, 1}, {-1, -2}, {2, 3}}));
 
    try
    {
        nums.emplace(nums.begin(), 1, 3); // throws: no space
    }
    catch(const std::bad_alloc& ex)
    {
        std::cout << ex.what() << '\n';
    }
}
```

## See also
- [insert](/cpp/container/inplace_vector/insert/)
- [emplace_back](/cpp/container/inplace_vector/emplace_back/)
