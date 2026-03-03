---
title: "std::inplace_vector<T,N>::try_append_range"
source_path: "cpp/container/inplace_vector/try_append_range"
category: "container"
since: "C++26"
---

Appends copies of initial elements in rg before [end()](/cpp/container/inplace_vector/end/), until all elements are inserted or the internal storage is exhausted (i.e. size() == capacity() is true).

## Declarations
```cpp
template< container-compatible-range<T> R >
constexpr std::ranges::borrowed_iterator_t<R> try_append_range( R&& rg );
```
_(since C++26)_

## Parameters
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
An iterator pointing to the first element of rg that was not inserted into *this, or [ranges::end](/cpp/ranges/end/)(rg) if no such element exists.

## Notes
This section is incompleteReason: Explain the purpose of this API.

## Example
```cpp
#include <cassert>
#include <initializer_list>
#include <inplace_vector>
 
int main()
{
    using I = std::inplace_vector<int, 8>;
    auto nums = I{1, 2, 3};
    const auto rg = {-1, -2, -3};
 
    auto it = nums.try_append_range(rg);
    assert(nums.size() == 6);
    assert((nums == I{1, 2, 3, -1, -2, -3}));
    assert(it == rg.end());
 
    it = nums.try_append_range(rg);
    assert(nums.size() == 8);
    assert((nums == I{1, 2, 3, -1, -2, -3, -1, -2}));
    assert(it == rg.begin() + 2);
}
```

## See also
- [append_range](/cpp/container/inplace_vector/append_range/)
- [push_back](/cpp/container/inplace_vector/push_back/)
- [try_push_back](/cpp/container/inplace_vector/try_push_back/)
- [unchecked_push_back](/cpp/container/inplace_vector/unchecked_push_back/)
- [emplace_back](/cpp/container/inplace_vector/emplace_back/)
- [try_emplace_back](/cpp/container/inplace_vector/try_emplace_back/)
- [unchecked_emplace_back](/cpp/container/inplace_vector/unchecked_emplace_back/)
- [pop_back](/cpp/container/inplace_vector/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
