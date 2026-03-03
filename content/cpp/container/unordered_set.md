---
title: "std::unordered_set"
source_path: "cpp/container/unordered_set"
header: "<unordered_set>"
aliases:
  - "/cpp/experimental/unordered_set/"
category: "container"
since: "C++11"
---

std::unordered_set is an associative container that contains a set of unique objects of type Key. Search, insertion, and removal have average constant-time complexity.

## Declarations
```cpp
template<
class Key,
class Hash = std::hash<Key>,
class KeyEqual = std::equal_to<Key>,
class Allocator = std::allocator<Key>
> class unordered_set;
```
_(since C++11)_

```cpp
namespace pmr {
template<
class Key,
class Hash = std::hash<Key>,
class Pred = std::equal_to<Key>
> using unordered_set = std::unordered_set<Key, Hash, Pred,
std::pmr::polymorphic_allocator<Key>>;
}
```
_(since C++17)_

## Notes
The swap functions do not invalidate any of the iterators inside the container, but they do invalidate the iterator marking the end of the swap region.
References and pointers to data stored in the container are only invalidated by erasing that element, even when the corresponding iterator is invalidated.
After container move assignment, unless elementwise move assignment is forced by incompatible allocators, references, pointers, and iterators (other than the past-the-end iterator) to moved-from container remain valid, but refer to elements that are now in *this.

## Example
```cpp
#include <iostream>
#include <unordered_set>
 
void print(const auto& set)
{
    for (const auto& elem : set)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::unordered_set<int> mySet{2, 7, 1, 8, 2, 8}; // creates a set of ints
    print(mySet);
 
    mySet.insert(5); // puts an element 5 in the set
    print(mySet);
 
    if (auto iter = mySet.find(5); iter != mySet.end())
        mySet.erase(iter); // removes an element pointed to by iter
    print(mySet);
 
    mySet.erase(7); // removes an element 7
    print(mySet);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2050 | C++11 | the definitions of reference, const_reference, pointerand const_pointer were based on allocator_type | based on value_type andstd::allocator_traits |

## See also
- [unordered_multiset](/cpp/container/unordered_multiset/)
- [set](/cpp/container/set/)
- [flat_set](/cpp/container/flat_set/)
