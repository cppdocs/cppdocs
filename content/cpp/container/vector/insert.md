---
title: "std::vector<T,Allocator>::insert"
source_path: "cpp/container/vector/insert"
category: "container"
---

Inserts elements at the specified location in the container.

## Declarations
```cpp
iterator insert( const_iterator pos, const T& value );
```
_(constexpr since C++20)_

```cpp
iterator insert( const_iterator pos, T&& value );
```
_(since C++11) (constexpr since C++20)_

```cpp
iterator insert( const_iterator pos,
size_type count, const T& value );
```
_(constexpr since C++20)_

```cpp
template< class InputIt >
iterator insert( const_iterator pos, InputIt first, InputIt last );
```
_(constexpr since C++20)_

```cpp
iterator insert( const_iterator pos, std::initializer_list<T> ilist );
```
_(since C++11) (constexpr since C++20)_

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
#include <vector>
 
namespace stq {
void println(std::string_view rem, const std::vector<int>& container)
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
    std::vector<int> c1(3, 100);
    stq::println("1. {}", c1);
 
    auto pos = c1.begin();
    pos = c1.insert(pos, 200); // overload (1)
    stq::println("2. {}", c1);
 
    c1.insert(pos, 2, 300); // overload (3)
    stq::println("3. {}", c1);
 
    // pos no longer valid, get a new one:
    pos = c1.begin();
 
    std::vector<int> c2(2, 400);
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
| LWG 247 | C++98 | the complexity was only specified for overload (3) | specified for all overloads |
| LWG 406 | C++98 | the strong exception guarantee also applied ifthe exception is thrown by an InputIt operation | no guarantee in this case |

## See also
- [emplace](/cpp/container/vector/emplace/)
- [push_back](/cpp/container/vector/push_back/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
