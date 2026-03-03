---
title: "std::inplace_vector<T,N>::try_emplace_back"
source_path: "cpp/container/inplace_vector/try_emplace_back"
category: "container"
since: "C++26"
---

Conditionally appends an object of type T to the end of the container.

## Declarations
```cpp
template< class... Args >
constexpr pointer try_emplace_back( Args&&... args );
```
_(since C++26)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
[std::addressof](/cpp/memory/addressof/)(back()) if size() < capacity(), nullptr otherwise.

## Notes
This section is incompleteReason: Explain the purpose of this API.

## Example
```cpp
#include <cassert>
#include <complex>
#include <inplace_vector>
 
int main()
{
    using namespace std::complex_literals;
    using C = std::complex<double>;
    using I = std::inplace_vector<C, 3>;
    auto v = I{1.0 + 2.0i, 3.0 + 4.0i};
 
    C* c = v.try_emplace_back(5.0, 6.0);
    assert(*c == 5.0 + 6.0i);
    assert((v == I{1.0 + 2.0i, 3.0 + 4.0i, 5.0 + 6.0i}));
 
    c = v.try_emplace_back(7.0, 8.0); // no space => no insertion
    assert(c == nullptr);
    assert((v == I{1.0 + 2.0i, 3.0 + 4.0i, 5.0 + 6.0i}));
}
```

## See also
- [emplace_back](/cpp/container/inplace_vector/emplace_back/)
- [push_back](/cpp/container/inplace_vector/push_back/)
- [append_range](/cpp/container/inplace_vector/append_range/)
- [try_append_range](/cpp/container/inplace_vector/try_append_range/)
- [unchecked_emplace_back](/cpp/container/inplace_vector/unchecked_emplace_back/)
- [unchecked_push_back](/cpp/container/inplace_vector/unchecked_push_back/)
- [pop_back](/cpp/container/inplace_vector/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
