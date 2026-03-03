---
title: "std::inplace_vector<T,N>::emplace_back"
source_path: "cpp/container/inplace_vector/emplace_back"
category: "container"
since: "C++26"
---

Appends a new element to the end of the container. Typically, the element is constructed using placement-new to construct the element in-place at the location provided by the container. The arguments args... are forwarded to the constructor as [std::forward](/cpp/utility/forward/)<Args>(args)....

## Declarations
```cpp
template< class... Args >
constexpr reference emplace_back( Args&&... args );
```
_(since C++26)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
[back()](/cpp/container/inplace_vector/back/), i.e. a reference to the inserted element.

## Example
```cpp
#include <inplace_vector>
#include <new>
#include <print>
#include <string>
#include <utility>
 
int main()
{
    std::inplace_vector<std::pair<std::string, std::string>, 2> fauna;
    std::string dog{"\N{DOG}"};
 
    fauna.emplace_back("\N{CAT}", dog);
    fauna.emplace_back("\N{CAT}", std::move(dog));
    std::println("fauna = {}", fauna);
 
    try
    {
        fauna.emplace_back("\N{BUG}", "\N{BUG}"); // throws: there is no space
    }
    catch(const std::bad_alloc& ex)
    {
        std::println("{}", ex.what());
    }
    std::println("fauna = {}", fauna);
}
```

## See also
- [append_range](/cpp/container/inplace_vector/append_range/)
- [push_back](/cpp/container/inplace_vector/push_back/)
- [try_push_back](/cpp/container/inplace_vector/try_push_back/)
- [try_emplace_back](/cpp/container/inplace_vector/try_emplace_back/)
- [try_append_range](/cpp/container/inplace_vector/try_append_range/)
- [unchecked_push_back](/cpp/container/inplace_vector/unchecked_push_back/)
- [unchecked_emplace_back](/cpp/container/inplace_vector/unchecked_emplace_back/)
- [pop_back](/cpp/container/inplace_vector/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
