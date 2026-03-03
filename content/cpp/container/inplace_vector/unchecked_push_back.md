---
title: "std::inplace_vector<T,N>::unchecked_push_back"
source_path: "cpp/container/inplace_vector/unchecked_push_back"
category: "container"
since: "C++26"
---

Appends the given element value to the end of the container.

## Declarations
```cpp
constexpr reference unchecked_push_back( const T& value );
```
_(since C++26)_

```cpp
constexpr reference unchecked_push_back( T&& value );
```
_(since C++26)_

## Parameters
- `value`: the value of the element to append

## Return value
[back()](/cpp/container/inplace_vector/back/), i.e. a reference to the inserted element.

## Notes
This section is incompleteReason: Explain the purpose of this API.

## Example
```cpp
#include <cassert>
#include <inplace_vector>
#include <string>
 
int main()
{
    std::inplace_vector<std::string, 2> fauna;
    std::string dog{"dog"};
 
    auto& r1 = fauna.unchecked_push_back("cat"); // overload (1)
    assert(r1 == "cat" and fauna.size() == 1);
    auto& r2 = fauna.unchecked_push_back(std::move(dog)); // overload (2)
    assert(r2 == "dog" and fauna.size() == 2);
    assert(fauna[0] == "cat" and fauna[1] == "dog");
    // fauna.unchecked_push_back("bug"); // undefined behavior: there is no space
}
```

## See also
- [push_back](/cpp/container/inplace_vector/push_back/)
- [emplace_back](/cpp/container/inplace_vector/emplace_back/)
- [append_range](/cpp/container/inplace_vector/append_range/)
- [try_push_back](/cpp/container/inplace_vector/try_push_back/)
- [try_emplace_back](/cpp/container/inplace_vector/try_emplace_back/)
- [try_append_range](/cpp/container/inplace_vector/try_append_range/)
- [unchecked_emplace_back](/cpp/container/inplace_vector/unchecked_emplace_back/)
- [pop_back](/cpp/container/inplace_vector/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
