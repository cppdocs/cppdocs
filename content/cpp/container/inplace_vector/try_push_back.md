---
title: "std::inplace_vector<T,N>::try_push_back"
source_path: "cpp/container/inplace_vector/try_push_back"
category: "container"
since: "C++26"
---

Conditionally appends the given element value to the end of the container.

## Declarations
```cpp
constexpr pointer try_push_back( const T& value );
```
_(since C++26)_

```cpp
constexpr pointer try_push_back( T&& value );
```
_(since C++26)_

## Parameters
- `value`: the value of the element to append

## Return value
[std::addressof](/cpp/memory/addressof/)(back()) if size() < capacity(), nullptr otherwise.

## Notes
This section is incompleteReason: Explain the purpose of this API.

## Example
```cpp
#include <cassert>
#include <inplace_vector>
#include <string>
 
int main()
{
    std::inplace_vector<std::string, 2> pets;
    std::string dog{"dog"};
 
    std::string* p1 = pets.try_push_back("cat"); // overload (1)
    assert(*p1 == "cat" and pets.size() == 1);
 
    std::string* p2 = pets.try_push_back(std::move(dog)); // overload (2)
    assert(*p2 == "dog" and pets.size() == 2);
 
    assert(pets[0] == "cat" and pets[1] == "dog");
    assert(pets.size() == pets.capacity());
 
    std::string* p3 = pets.try_push_back("bug");
    assert(p3 == nullptr and pets.size() == 2);
}
```

## See also
- [push_back](/cpp/container/inplace_vector/push_back/)
- [emplace_back](/cpp/container/inplace_vector/emplace_back/)
- [append_range](/cpp/container/inplace_vector/append_range/)
- [try_emplace_back](/cpp/container/inplace_vector/try_emplace_back/)
- [try_append_range](/cpp/container/inplace_vector/try_append_range/)
- [unchecked_emplace_back](/cpp/container/inplace_vector/unchecked_emplace_back/)
- [unchecked_push_back](/cpp/container/inplace_vector/unchecked_push_back/)
- [pop_back](/cpp/container/inplace_vector/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
