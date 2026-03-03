---
title: "std::inplace_vector<T,N>::push_back"
source_path: "cpp/container/inplace_vector/push_back"
category: "container"
since: "C++26"
---

Appends the given element value to the end of the container.

## Declarations
```cpp
constexpr reference push_back( const T& value );
```
_(since C++26)_

```cpp
constexpr reference push_back( T&& value );
```
_(since C++26)_

## Parameters
- `value`: the value of the element to append

## Return value
[back()](/cpp/container/inplace_vector/back/), i.e. a reference to the inserted element.

## Example
```cpp
#include <inplace_vector>
#include <new>
#include <print>
#include <string>
 
int main()
{
    std::inplace_vector<std::string, 2> fauna;
    std::string dog{"\N{DOG}"};
 
    fauna.push_back("\N{CAT}"); // overload (1)
    fauna.push_back(std::move(dog)); // overload (2)
    std::println("fauna = {}", fauna);
 
    try
    {
        fauna.push_back("\N{BUG}"); // throws: there is no space
    }
    catch(const std::bad_alloc& ex)
    {
        std::println("{}", ex.what());
    }
    std::println("fauna = {}", fauna);
}
```

## See also
- [emplace_back](/cpp/container/inplace_vector/emplace_back/)
- [append_range](/cpp/container/inplace_vector/append_range/)
- [try_push_back](/cpp/container/inplace_vector/try_push_back/)
- [try_emplace_back](/cpp/container/inplace_vector/try_emplace_back/)
- [try_append_range](/cpp/container/inplace_vector/try_append_range/)
- [unchecked_push_back](/cpp/container/inplace_vector/unchecked_push_back/)
- [unchecked_emplace_back](/cpp/container/inplace_vector/unchecked_emplace_back/)
- [pop_back](/cpp/container/inplace_vector/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
