---
title: "std::deque<T,Allocator>::insert"
source_path: "cpp/container/deque/insert"
category: "container"
since: "C++11"
---

Inserts elements at the specified location in the container.

## Declarations
```cpp
iterator insert( const_iterator pos, const T& value );
```

```cpp
iterator insert( const_iterator pos, T&& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator pos,
size_type count, const T& value );
```

```cpp
template< class InputIt >
iterator insert( const_iterator pos, InputIt first, InputIt last );
```

```cpp
iterator insert( const_iterator pos, std::initializer_list<T> ilist );
```
_(since C++11)_

## Parameters
- `pos`: iterator before which the content will be inserted (pos may be the end() iterator)
- `value`: element value to insert
- `count`: number of elements to insert
- `first, last`: the range of elements to insert, cannot be iterators into container for which insert is called
- `ilist`: std::initializer_list to insert the values from

## Example
```cpp
#include <iostream>
#include <iterator>
#include <string_view>
#include <deque>
 
namespace stq {
void println(std::string_view rem, const std::deque<int>& container)
{
    std::cout << rem.substr(0, rem.size() - 2) << '[';
    bool first{true};
    for (const int x : container)
        std::cout << (first ? first = false, "" : ", ") << x;
    std::cout << "]\n";
}
}
 
int main()
{
    std::deque<int> c1(3, 100);
    stq::println("1. {}", c1);
 
    auto pos = c1.begin();
    pos = c1.insert(pos, 200); // overload (1)
    stq::println("2. {}", c1);
 
    c1.insert(pos, 2, 300); // overload (3)
    stq::println("3. {}", c1);
 
    // reset pos to the begin:
    pos = c1.begin();
 
    std::deque<int> c2(2, 400);
    c1.insert(std::next(pos, 2), c2.begin(), c2.end()); // overload (4)
    stq::println("4. {}", c1);
 
    int arr[] = {501, 502, 503};
    c1.insert(c1.begin(), arr, arr + std::size(arr)); // overload (4)
    stq::println("5. {}", c1);
 
    c1.insert(c1.end(), {601, 602, 603}); // overload (5)
    stq::println("6. {}", c1);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 149 | C++98 | overloads (3) and (4) returned nothing | returns an iterator |
| LWG 247 | C++98 | the complexity was only specifiedfor inserting a single element | also specified for insertingmultiple elements |

## See also
- [emplace](/cpp/container/deque/emplace/)
- [push_front](/cpp/container/deque/push_front/)
- [push_back](/cpp/container/deque/push_back/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
